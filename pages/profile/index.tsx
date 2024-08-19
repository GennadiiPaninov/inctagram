import { useMeQuery } from '@/shared/assets/api/auth/auth-api'
import { useProfileInformationQuery } from '@/shared/assets/api/profile/profile-api'
import { PageWrapper } from '@/shared/components'
import { HeadMeta } from '@/shared/components/headMeta/HeadMeta'
import { getMixLayout } from '@/shared/components/layout/mixLayout'
import { MyProfile } from '@/widgets'
import { InferGetServerSidePropsType, NextPageContext } from 'next'

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context
  const userId = Array.isArray(query.id) ? query.id[0] : query.id
  const postId = Array.isArray(query.postId) ? query.postId[0] : query.postId

  if (!userId) {
    return { notFound: true }
  }

  const userProfileResponse = await fetch(`https://inctagram.org/api/v1/public-user/${userId}`)

  if (!userProfileResponse) {
    return {
      notFound: true,
    }
  }

  const userProfile = await userProfileResponse.json()

  let post = null

  if (postId) {
    const postResponse = await fetch(`https://inctagram.org/api/v1/public-posts/${postId}`)

    if (postResponse.ok) {
      post = await postResponse.json()
    } else {
      return { notFound: true }
    }
  }

  return {
    props: { post, userId, userProfile },
  }
}

const Profile = ({
  post,
  userId,
  userProfile,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: user } = useMeQuery(undefined)
  const { data } = useProfileInformationQuery()
  const isMyProfile = userId === user?.userId

  return (
    <PageWrapper>
      <HeadMeta title={'Profile'} />
      <MyProfile
        isMyProfile={isMyProfile}
        myProfileData={data}
        post={post || null}
        publicProfile={userProfile}
        userId={userId}
      />
    </PageWrapper>
  )
}

Profile.getLayout = getMixLayout
export default Profile
