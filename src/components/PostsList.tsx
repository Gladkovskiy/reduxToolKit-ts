import React, {FC, useEffect, useState} from 'react'
import {postsApi} from '../services/PostsService'
import {IPosts} from '../types/posts'
import PostItem from './PostItem'

const PostsList: FC = () => {
  const [limit, setLimit] = useState(100)
  const {data: posts, refetch} = postsApi.useFatchAllPostsQuery(limit)
  const [createPosts, {data, isSuccess}] = postsApi.useCreatePostMutation()
  const [deletePost, {}] = postsApi.useDeletePostMutation()
  const [updatePost, {}] = postsApi.useUpdatePostMutation()
  useEffect(() => {
    setTimeout(() => {
      setLimit(50)
    }, 10000)
  }, [])

  const handlerCreate = async () => {
    const title = prompt()
    await createPosts({title, body: title} as IPosts)
  }

  const handleRemove = (post: IPosts) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPosts) => {
    updatePost(post)
  }

  return (
    <div>
      <button onClick={() => refetch()}>REFETCH</button>
      {posts?.map(post => (
        <PostItem post={post} remove={handleRemove} update={handleUpdate} />
      ))}
      <button onClick={handlerCreate}>Добвить пост</button>
      {isSuccess && <h3>{JSON.stringify(data, null, 2)}</h3>}
    </div>
  )
}

export default PostsList
