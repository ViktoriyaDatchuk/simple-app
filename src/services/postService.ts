import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostItem } from '../interfaces/responce.interface';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<PostItem[], number>({
      query: (limit: number = 8) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
    }),
    signIn: build.query({
      query: (username: string) => ({
        url: '/users',
        method: 'POST',
        params: {
          username: username,
        },
      }),
    }),
  }),
});
