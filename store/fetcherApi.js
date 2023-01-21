import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export const fetcherApi = createApi({
  reducerPath: "fetcherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BackendURL}`,
  }),
  tagTypes: ["ForCampaign"],
  endpoints(build) {
    return {}
  },
})
