import { useCreateCampaignMutation, useUpdateCampaignMutation } from "@/store/APIs/campaignApi"
import { previewCampaignActions } from "@/store/slices/preview-campaign-slice"
import dayjs from "dayjs"
import { Form, Formik } from "formik"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaImages } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import MyInput from "../--Utils/Formik"
import { validation } from "./CampaignFormValidation"

const CampaignForm = ({ theCampaign, formId, campaignId, newCampaign = true }) => {
  const { name, from_date, to_date, total_budget, daily_budget, creative_upload } = theCampaign
  const [createCampaign, { isLoading: createCampaignIsLoading }] = useCreateCampaignMutation()
  const [updateCampaign, { isLoading: updateCampaignIsLoading }] = useUpdateCampaignMutation()
  const [campaignImage, setCampaignImage] = useState("")
  const [campaignImageURL, setCampaignImageURL] = useState(creative_upload)
  const [previewButtonClicked, setPreviewButtonClicked] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  // Make a valid src url for diplaying the current selected image to upload to the backend
  useEffect(() => {
    if (campaignImage) setCampaignImageURL(URL.createObjectURL(campaignImage))
  }, [campaignImage])

  // Initial state of all form inputs
  const initialValues = {
    name,
    from_date: dayjs(from_date).format("YYYY-MM-DD"),
    to_date: dayjs(to_date).format("YYYY-MM-DD"),
    total_budget,
    daily_budget,
    creative_upload,
  }

  // If newCampaign is true, make request to the server to create new campaign
  // Else,  make request to the server update the selected campaign
  const submitFormToMakeRequest = async (values) => {
    const { daily_budget, from_date, name, to_date, total_budget } = values
    if (!campaignImage && !campaignImageURL) return toast.warning("You need to add an image to continue!")
    const formData = new FormData()
    formData.append("name", name)
    if (campaignImage) {
      formData.append("creative_upload", campaignImage)
    }
    formData.append("daily_budget", daily_budget)
    formData.append("from_date", from_date)
    formData.append("to_date", to_date)
    formData.append("total_budget", total_budget)
    let result
    newCampaign
      ? (result = await createCampaign(formData))
      : (result = await updateCampaign({ campaignId: campaignId, formData: formData }))
    if (result?.error) return toast.warning(result?.error?.error)
    return router.push("/campaign")
  }

  // Preview handler for showing the current campaign user is working on
  const previewCampaignHandler = (values) => {
    const { daily_budget, from_date, name, to_date, total_budget } = values
    if (!previewButtonClicked) return
    dispatch(
      previewCampaignActions.previewCampaignDataFunction({
        creative_upload: campaignImageURL,
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
    <div>
      <div className="campaign_form_bg">
        <div className="campaign_form_img_bg ">
          <div className="campaign_form_img">
            <input
              className="campaign_form_input"
              type="file"
              name="profile-image"
              accept="image/*"
              onChange={(e) => {
                setCampaignImage(e.target.files[0])
              }}
            />
          </div>
          {campaignImageURL ? (
            <Image
              objectPosition="center"
              className="rounded-md"
              src={campaignImageURL}
              objectFit="cover"
              alt="profile"
              layout="fill"
            />
          ) : (
            <FaImages className="text-[10em] flex" />
          )}
          <h1> Click to add an image!</h1>
        </div>
        <Formik validationSchema={validation} onSubmit={submitFormToMakeRequest} initialValues={initialValues}>
          {({ values }) => (
            <Form className="campaign_form_form_bg" id={formId}>
              <MyInput
                className=" campaign_form_form_input"
                type="text"
                name="name"
                placeholder="Name Of Campaign?"
                label="Name"
              />
              <div className="flex w-11/12 ">
                <div className="flex-col mr-2 w-full">
                  <MyInput
                    className="campaign_form_form_input "
                    type="date"
                    placeholder="mm/dd/yyy"
                    name="from_date"
                    label="From"
                  />
                </div>
                <div className="flex-col ml-2 w-full">
                  <MyInput
                    className="campaign_form_form_input "
                    type="date"
                    placeholder="mm/dd/yyy"
                    name="to_date"
                    label="To"
                  />
                </div>
              </div>
              <div className="flex w-11/12">
                <div className="mr-2 flex flex-col relative w-full">
                  <p className="campaign_form_dollar">$</p>
                  <MyInput
                    className="campaign_form_form_input pl-5"
                    type="number"
                    step="0.1"
                    name="total_budget"
                    label="Total Budget"
                    placeholder="00.0"
                  />
                </div>
                <div className="ml-2 flex flex-col relative w-full">
                  <p className="campaign_form_dollar">$</p>
                  <MyInput
                    className="campaign_form_form_input pl-5"
                    type="number"
                    step="0.1"
                    name="daily_budget"
                    label="Daily Budget"
                    placeholder="00.0"
                  />
                </div>
              </div>
              <div className="campaign_form_button_bg">
                <button
                  type="button"
                  onClick={() => {
                    setPreviewButtonClicked(true)
                    previewCampaignHandler(values)
                  }}
                  className="campaign_form_preview_button"
                >
                  Preview
                </button>
                <button type="submit" disabled={createCampaignIsLoading} className="campaign_form_submit_button">
                  {createCampaignIsLoading || updateCampaignIsLoading ? (
                    <div className="submit_button_spinner"></div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  )
}

export default CampaignForm
