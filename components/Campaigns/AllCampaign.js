import { useDeleteCampaignMutation } from "@/store/APIs/campaignApi"
import { previewCampaignActions } from "@/store/slices/preview-campaign-slice"
import dayjs from "dayjs"
import Image from "next/legacy/image"
import Link from "next/link"
import { useState } from "react"
import { BsPencilFill } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux"

const AllCampaignData = ({ allCampaignData }) => {
  return (
    <div className="all_campaign_grid">
      {allCampaignData?.map((data) => (
        <div key={data.id} data-aos="fade-" data-aos-delay="200" data-aos-offset="0">
          <AllCampaign
            id={data.id}
            name={data.name}
            from_date={data.from_date}
            to_date={data.to_date}
            total_budget={data.total_budget}
            daily_budget={data.daily_budget}
            creative_upload={data.creative_upload}
          />
        </div>
      ))}
    </div>
  )
}

const AllCampaign = ({ id, name, from_date, to_date, total_budget, daily_budget, creative_upload }) => {
  const dispatch = useDispatch()
  const [showEditAndDeleteButton, setShowEditAndDeleteButton] = useState(false)
  const [deleteCampaign] = useDeleteCampaignMutation()

  const showClickedCampaignDetails = (e) => {
    if (parseInt(e.target.id) !== id) return
    dispatch(
      previewCampaignActions.previewCampaignDataFunction({
        creative_upload,
        daily_budget,
        name,
        total_budget,
        from_date,
        to_date,
      })
    )
    dispatch(previewCampaignActions.previewCampaignFunction(true))
  }
  return (
    <div key={id}>
      <div
        className="all_campaign_bg"
        onMouseEnter={() => setShowEditAndDeleteButton(true)}
        onMouseLeave={() => setShowEditAndDeleteButton(false)}
      >
        <div>
          <div className="all_campaign_overlay" id={id} onClick={showClickedCampaignDetails}></div>
          {showEditAndDeleteButton && (
            <div className=" all_campaign_icons_bg ">
              <MdDelete onClick={async () => await deleteCampaign({ campaignId: id })} />
              <Link href="/campaign/edit-campaign/[id]" as={`/campaign/edit-campaign/${id}`}>
                <BsPencilFill className="text-xl" />
              </Link>
            </div>
          )}

          <Image
            objectPosition="center"
            src={creative_upload}
            alt="all campaign images"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className=" all_campaign_text_bg">
            <p onClick={showClickedCampaignDetails} id={id} className=" all_campaign_name">
              {name}
            </p>
            <div className="all_campaign_details">
              <div>From: {dayjs(from_date).format("MMM D, YYYY")}</div>
              <div>To: {dayjs(to_date).format("MMM D, YYYY")}</div>
              <div className="all_campaign_budget">
                <p>Total Budget: ${total_budget}</p>
                <p>Daily Budget: ${daily_budget}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCampaignData
