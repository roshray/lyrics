import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const shazamCoreApi =  createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','3274a39f8emshd0204c1e886f08fp1a4643jsndd659075106e')

            return headers
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
})

export const {
    useGetTopChartsQuery,

} = shazamCoreApi