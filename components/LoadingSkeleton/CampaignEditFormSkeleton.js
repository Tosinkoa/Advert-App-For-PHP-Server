const CampaignEditFormSkeleton = () => {
  return (
    <div className="pb-10 relative ">
      <div className="campaign_edit_skeleton">
        <div className="campaign_edit_skeleton_bg " />
        <div>
          <div className="campaign_edit_skeleton_sec_bg">
            <div className="campaign_edit_sekeleton_name" />
            <div className="flex">
              <div className="campaign_edit_skeleton_left_input" />
              <div className="campaign_edit_skeleton_right_input" />
            </div>
            <div className="flex">
              <div className="campaign_edit_skeleton_left_input" />
              <div className="campaign_edit_skeleton_right_input" />
            </div>
            <div className="campaign_edit_skeleton_but_bg">
              <div className="campaign_edit_skeleton_left_but" />
              <div className="campaign_edit_skeleton_right_but" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignEditFormSkeleton
