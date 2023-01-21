import Image from "next/legacy/image"
import Typewriter from "typewriter-effect"

const Banner = () => {
  return (
    <div className="banner_bg">
      <div className="banner_overlay"></div>
      <Image
        src="/assets/images/arcewave-project-banner.jpg"
        objectPosition="center"
        objectFit="cover"
        alt="a beautiful lady"
        layout="fill"
        className="w-full"
      />
      <div className="banner_text_bg ">
        <p className="banner_text_head">Enjoy the opportunities </p>
        <h1 className="banner_header">Advertisment Campaign</h1>

        <Typewriter
          options={{
            strings: [
              "We help your business to reach a large audience and increase your brand awareness. And also makes you stand above your competitors",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  )
}

export default Banner
