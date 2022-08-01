import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IPosts} from '../types/posts'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
  //для обновление нкжного нам get запроса
  tagTypes: ['Post'],
  endpoints: build => ({
    fatchAllPosts: build.query<IPosts[], number>({
      query: (limit = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      //для обновление нкжного нам get запроса
      providesTags: () => ['Post'],
    }),
    createPost: build.mutation<IPosts, IPosts>({
      query: post => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      //для обновление нкжного нам get запроса
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IPosts, IPosts>({
      query: post => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      //для обновление нкжного нам get запроса
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<IPosts, IPosts>({
      query: post => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      //для обновление нкжного нам get запроса
      invalidatesTags: ['Post'],
    }),
  }),
})
