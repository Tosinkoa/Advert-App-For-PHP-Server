import { createSlice } from "@reduxjs/toolkit"

const previewCampaignSlice = createSlice({
  name: "previewCampaign",
  initialState: {
    previewCampaign: false,
    previewCampaignData: {
      name: "",
      from_date: "",
      to_date: "",
      total_budget: "",
      daily_budget: "",
      creativeUpload: "",
    },
  },

  reducers: {
    previewCampaignFunction: (state, action) => {
      state.previewCampaign = action.payload
    },
    previewCampaignDataFunction: (state, action) => {
      console.log("SHOWN")
      state.previewCampaignData = action.payload
    },
  },
})

export const previewCampaignActions = previewCampaignSlice.actions
export default previewCampaignSlice
