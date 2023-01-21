import { fetcherApi } from "../fetcherApi"

export const campaignApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      createCampaign: build.mutation({
        query: (body) => ({ url: "/campaigns", method: "post", body }),
        invalidatesTags: ["ForCampaign"],
      }),
      updateCampaign: build.mutation({
        query: ({ campaignId, formData }) => ({ url: `/updateCampaign/${campaignId}`, method: "post", body: formData }),
        invalidatesTags: ["ForCampaign"],
      }),
      deleteCampaign: build.mutation({
        query: ({ campaignId }) => ({ url: `/campaigns/${campaignId}`, method: "delete" }),
        invalidatesTags: ["ForCampaign"],
      }),
      selectACampaign: build.query({
        query: (campaignId) => ({ url: `/campaigns/${campaignId}` }),
        providesTags: ["ForCampaign"],
      }),
      selectAllCampaign: build.query({
        query: () => ({ url: "/campaigns" }),
        providesTags: ["ForCampaign"],
      }),
      invalidatesTags: ["ForCampaign"],
    }
  },
})

export const {
  useCreateCampaignMutation,
  useDeleteCampaignMutation,
  useSelectACampaignQuery,
  useUpdateCampaignMutation,
  useSelectAllCampaignQuery,
} = campaignApi
