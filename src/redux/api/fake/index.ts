import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<FakeStore.GetTodoFakeProductResponse, FakeStore.GetTodoFakeProductRequest>(
      {
        query: () => ({
          url: `/products`,
          method: 'GET',
        }),
        providesTags: ['fake'],
      }
    ),
  }),
  overrideExisting: true,
});

export const { useGetTodoQuery } = api;
