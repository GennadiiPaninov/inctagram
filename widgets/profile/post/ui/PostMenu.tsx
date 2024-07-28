import React, { useCallback, useEffect, useState } from 'react'

import { Edit, More, Trash } from '@/public'
import { useTranslationPages } from '@/shared/assets'
import { useDeletePostMutation } from '@/shared/assets/api/post/post-api'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Modal,
  ModalWindow,
} from '@/shared/components'
import { PostEdit } from '@/widgets/profile/post-edit/PostEdit'

import d from '@/shared/components/dropDownMenu/dropDown.module.scss'
import s from '@/widgets/profile/post/ui/post.module.scss'

type Props = {
  postDescription: string
  postId: string
  postImg: string
}

export const PostMenu = ({ postDescription, postId, postImg }: Props) => {
  const { t } = useTranslationPages()
  const [deletePost] = useDeletePostMutation()
  const [open, setOpen] = useState(false)
  const [isDescriptionChanged, setIsDescriptionChanged] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const onOpenChangeHandler = () => {
    setOpen(!open)
  }

  const handleDeletePost = async () => {
    deletePost({ id: postId }).unwrap()
  }

  const handlePostEdit = () => {
    setIsEditModalOpen(true)
  }

  const handleCancelEditModal = () => {
    setIsEditModalOpen(false)
  }

  const handleCancelConfirmModal = () => {
    setIsConfirmModalOpen(false)
  }

  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(isDescriptionChanged)
    if (!isDescriptionChanged) {
      setIsEditModalOpen(false)
    }
  }

  const handleChangeDescription = (changed: boolean) => {
    setIsDescriptionChanged(changed)
  }

  useEffect(() => {
    if (!isConfirmModalOpen && !isEditModalOpen) {
      setIsDescriptionChanged(false)
    }
  }, [isConfirmModalOpen, isEditModalOpen])

  return (
    <>
      <DropdownMenu onOpenChange={onOpenChangeHandler} open={open}>
        <DropdownMenuTrigger>
          <More />
        </DropdownMenuTrigger>
        <DropdownMenuContent align={'end'}>
          <DropdownMenuItem asChild>
            <Button className={d.item} icon={<Edit />} onClick={handlePostEdit} variant={'icon'}>
              {t.post.editPost}
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Modal
              title={t.post.deletePost}
              trigger={
                <Button className={d.item} icon={<Trash />} variant={'icon'}>
                  {t.post.deletePost}
                </Button>
              }
            >
              <ModalWindow callback={handleDeletePost} text={t.post.text} />
            </Modal>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Modal
        className={s.modalPostEdit}
        handleCloseClickButton={handleOpenConfirmModal}
        handleCloseClickOutside={handleOpenConfirmModal}
        open={isEditModalOpen}
        title={t.edit.titleEdit}
      >
        <PostEdit
          handleCancelEditModal={handleCancelEditModal}
          handleChangeDescription={handleChangeDescription}
          postDescription={postDescription}
          postId={postId}
          postImg={postImg}
        />
      </Modal>

      <Modal
        onOpenChange={handleCancelConfirmModal}
        open={isConfirmModalOpen}
        title={t.edit.titleConfirm}
      >
        <ModalWindow
          callback={() => {
            handleCancelConfirmModal()
            handleCancelEditModal()
            handleChangeDescription(false)
          }}
          text={t.edit.text}
        />
      </Modal>
    </>
  )
}
