import { useState } from 'react'

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
import { EditPostModal } from '@/widgets/profile/post/ui/EditPostModal'

import d from '@/shared/components/dropDownMenu/dropDown.module.scss'

type Props = {
  postId: string
}

export const PostMenu = ({ postId }: Props) => {
  const { t } = useTranslationPages()
  const [deletePost] = useDeletePostMutation()
  const [open, setOpen] = useState(false)
  const onOpenChangeHandler = () => {
    setOpen(!open)
  }

  const handleDeletePost = async () => {
    deletePost({ id: postId }).unwrap()
  }

  return (
    <DropdownMenu onOpenChange={onOpenChangeHandler} open={open}>
      <DropdownMenuTrigger>
        <More />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'}>
        <DropdownMenuItem asChild>
          <Modal
            title={'Edit Post'}
            trigger={
              <Button className={d.item} icon={<Edit />} variant={'icon'}>
                {t.post.editPost}
              </Button>
            }
          >
            <EditPostModal postId={postId} postImg={''} />
          </Modal>
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
  )
}
