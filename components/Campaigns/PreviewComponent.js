import { previewCampaignActions } from "@/store/slices/preview-campaign-slice"
import dayjs from "dayjs"
import Image from "next/legacy/image"
import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

const PreviewComponent = ({ openAndClosePreview }) => {
  const dispatch = useDispatch()
  const previewCampaignData = useSelector((state) => state.previewCampaign.previewCampaignData)
  const toDate = dayjs(previewCampaignData?.to_date).format("MMM D, YYYY")
  const fromDate = dayjs(previewCampaignData?.from_date).format("MMM D, YYYY")
  const showPreviewCard = useSelector((state) => state.previewCampaign.previewCampaign)

  return (
    <>
      {showPreviewCard && (
        <div className="-z-50">
          <div
            onClick={() => dispatch(previewCampaignActions.previewCampaignFunction())}
            className="preview_component_overlay"
          ></div>
          <div className="preview_component_bg">
            <div className="preview_component_img_overlay"></div>
            <div
              className="preview_component_cancel_button"
              onClick={() => dispatch(previewCampaignActions.previewCampaignFunction())}
            >
              <FaTimes />
            </div>
            {previewCampaignData?.creative_upload ? (
              <Image
              objectPosition="center"
                src={previewCampaignData?.creative_upload}
                className="rounded-md"
                alt="preview-image"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              ""
            )}
            <div className="preview_component_campaign_detail">
              <div className="preview_component_name">{previewCampaignData?.name ?? ""}</div>
              <div className="flex flex-col">
                <div>From: {fromDate !== "Invalid Date" ? fromDate : "----------"}</div>
                <div>To: {toDate !== "Invalid Date" ? toDate : "----------"}</div>
                <div className="flex space-x-6 flex-row">
                  <p>Total Budget: ${previewCampaignData?.total_budget || "00.00"}</p>
                  <p>Daily Budget: ${previewCampaignData?.daily_budget || "00.00"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PreviewComponent
