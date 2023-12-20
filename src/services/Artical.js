import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICAL_KEY;
export const articalApi = createApi({
    reducerPath: 'articalApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders:(headers) => {
      headers.set('X-RappidAPI-Key' , rapidApiKey);
      headers.set('X-RapidAPI-Host' , 
      'article-extractor-and-summarizer.p.rapidapi.com');

      return headers;
     }
   }),
   
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarizer?url=
            ${encodeURIComponent(params.articleUrl)}&length=3`
        }),
    }),
});

export const { useLazyGetSummaryQuery} = articalApi;    