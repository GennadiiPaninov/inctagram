import { baseApi } from '@/shared/assets'
import {
  AddPostReq,
  DeletePostArgs,
  EditPostArgs,
  GetPostsArgs,
  PostItemTypeRes,
  PostType,
  PostsType,
  getPostArgs,
} from '@/shared/assets/api/post/types'
import { PublicUserApi } from '@/shared/assets/api/public-user/public-user-api'
import { getState } from '@vitest/expect'
import { current } from 'immer'
import { patchConsoleError } from 'next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info'

const postApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      addPost: builder.mutation<PostType, AddPostReq>({
        invalidatesTags: ['MyPosts'],
        query: body => ({
          body: body,
          method: 'POST',
          url: `v1/post`,
        }),
      }),
      deletePost: builder.mutation<void, DeletePostArgs>({
        // invalidatesTags: ['MyPosts'],
        onQueryStarted: async ({ id }, { dispatch, getState, queryFulfilled }) => {
          const patchResult = dispatch(
            postApi.util.updateQueryData('getPostsByUserId', undefined, draft => {
              if (draft) {
                const deletedPostIdx = draft.items.findIndex(el => el.id === id)

                if (deletedPostIdx !== -1) {
                  draft.items.splice(deletedPostIdx, 1)
                }
              }
            })
          )

          try {
            await queryFulfilled
          } catch {
            patchResult?.undo()
          }
        },
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/post/${id}`,
        }),
      }),

      editPost: builder.mutation<void, EditPostArgs>({
        invalidatesTags: ['MyPosts'],
        onQueryStarted: async ({ description, id }, { dispatch, getState, queryFulfilled }) => {
          const invalidatedBy = postApi.util.selectInvalidatedBy(getState(), [{ type: 'MyPosts' }])
          const patchResults: any[] = []

          invalidatedBy.forEach(({ originalArgs }) => {
            patchResults.push(
              dispatch(
                postApi.util.updateQueryData('getPostsByUserId', originalArgs, draft => {
                  const itemToUpdateIndex = draft.items.findIndex(post => post.id === id)

                  if (itemToUpdateIndex !== -1) {
                    draft.items[itemToUpdateIndex].description = description
                  }
                })
              )
            )
          })

          try {
            await queryFulfilled
          } catch (e) {
            patchResults.forEach(patchResult => {
              patchResult.undo()
            })
          }
        },
        query: ({ description, id }) => ({
          body: {
            description,
          },
          method: 'PUT',
          url: `v1/post/${id}`,
        }),
      }),

      getImgId: builder.mutation<{ imageId: string }, FormData>({
        query: body => ({
          body: body,
          method: 'POST',
          url: 'v1/post/photo',
        }),
      }),
      // getPost: builder.query<PostItemTypeRes, getPostArgs>({
      //   providesTags: ['MyPosts'],
      //   query: body => ({
      //     method: 'GET',
      //     url: `v1/public-posts/${body.id}`,
      //   }),
      // }),
      // getPosts: builder.query<PostsType, void>({
      //   // forceRefetch({ currentArg, previousArg }) {
      //   //   return currentArg !== previousArg
      //   // },
      //   // merge: (currentCache, newItems) => {
      //   //   currentCache.items.push(...newItems.items)
      //   // },
      //   providesTags: ['MyPosts'],
      //   query: () => ({
      //     method: 'GET',
      //     url: 'v1/public-posts',
      //   }),
      //   // serializeQueryArgs: ({ endpointName }) => {
      //   //   return endpointName
      //   // },
      // }),
      getPostsByUserId: builder.query<PostsType, GetPostsArgs>({
        forceRefetch({ currentArg, previousArg }) {
          return currentArg?.page !== previousArg?.page
        },
        merge: (currentCache, newItems) => {
          if (currentCache) {
            currentCache.items.push(...newItems.items)
            currentCache.page = newItems.page
          } else {
            return newItems
          }
        },
        providesTags: ['MyPosts'],
        query: ({ page, pageSize, userId }) => {
          return {
            method: 'GET',
            params: { page, pageSize },
            url: `v1/post/${userId}`,
          }
        },
        serializeQueryArgs: ({ endpointName }) => {
          return endpointName
        },
      }),
    }
  },
})

export const { getPostsByUserId } = postApi.endpoints
export const {
  useAddPostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  useGetImgIdMutation,
  useGetPostsByUserIdQuery,
} = postApi
