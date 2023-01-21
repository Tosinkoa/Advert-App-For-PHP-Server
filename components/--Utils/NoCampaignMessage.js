import Image from "next/legacy/image"
import Link from "next/link"

const NoCampaignMessage = () => {
  return (
    <>
      <div className="no_campagin_image_bg">
        <Image
          src="/assets/gif/empty-data.gif"
          alt="empty box"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl"
          unoptimized={true}
        />
      </div>
      <p className="no_campaign_message_text">
        Campaign has not been created.{" "}
        <Link href="/campaign/new-campaign">
          <button className="text-blue-600">Want to add campaign?</button>
        </Link>
      </p>
    </>
  )
}

export default NoCampaignMessage
