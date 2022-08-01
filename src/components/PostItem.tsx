import React, {FC, MouseEvent} from 'react'
import {IPosts} from '../types/posts'

interface PostItemProps {
  post: IPosts
  remove: (post: IPosts) => void
  update: (post: IPosts) => void
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
  const handleDelete = (e: MouseEvent) => {
    e.preventDefault()
    remove(post)
  }

  const handleUpdate = (e: MouseEvent) => {
    e.preventDefault()
    const title = prompt() || ''
    update({...post, title})
  }

  return (
    <div>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={handleDelete}>Удалить</button>
        <button onClick={handleUpdate}>Обновить</button>
      </div>
    </div>
  )
}

export default PostItem
