// import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// export const articalApi = createApi({
//     reducerPath:'articalApi',
//     endpoints: (builder) =({
//         getSummary: builder.query({
//             query:(params) => `test`
//         })
//     })

// });
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articalApi = createApi({
    reducerPath: 'articalApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://your-base-url.com/api/' }), // Define your base URL here
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`,
        }),
    }),
});
