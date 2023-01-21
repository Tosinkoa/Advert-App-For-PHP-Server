import { configureStore } from "@reduxjs/toolkit"
import { fetcherApi } from "./fetcherApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { campaignApi } from "./APIs/campaignApi"
import previewCampaignSlice from "./slices/preview-campaign-slice"

const store = configureStore({
  reducer: {
    [fetcherApi.reducerPath]: fetcherApi.reducer,
    [campaignApi.reducerPath]: campaignApi.reducer,
    previewCampaign: previewCampaignSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetcherApi.middleware),
})
setupListeners(store.dispatch)

export default store
