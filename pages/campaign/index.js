import Header from "@/components/--Utils/Header"
import NoCampaignMessage from "@/components/--Utils/NoCampaignMessage"
import AllCampaignData from "@/components/Campaigns/AllCampaign"
import Layout from "@/components/Helper/Layout"
import AllCampaignSkeleton from "@/components/LoadingSkeleton/AllCampaignSkeleton"
import { useSelectAllCampaignQuery } from "@/store/APIs/campaignApi"
import "aos/dist/aos.css"

const Campaigns = () => {
  const {
    currentData: allCampaignData,
    isLaoding: allCampaignDataIsLoading,
    isSuccess: allCampaignDataSuccess,
    isError: allCampaignDataError,
    isFetching: allCampaignDataIsFetching,
  } = useSelectAllCampaignQuery()
  console.log(allCampaignData)
  return (
    <Layout>
      <Header dontShowBackButton={true} headerText="ALL CAMPAIGN" />
      {!allCampaignData && allCampaignDataIsFetching && !allCampaignDataSuccess && <AllCampaignSkeleton />}
      {!allCampaignDataIsLoading && !allCampaignData && <NoCampaignMessage />}
      {!allCampaignDataIsFetching && !allCampaignDataError && <AllCampaignData allCampaignData={allCampaignData} />}
    </Layout>
  )
}

export default Campaigns
