import "aos/dist/aos.css"
import Image from "next/legacy/image"

const Grid = ({}) => {
  return (
    <div>
      <div className="left_text_right_pic " id="advertisement">
        <div className="left_right_text_bg" data-aos="fade-up-right" data-aos-delay="200">
          <h1 className="grid_header_text">Attract New Customers</h1>
          <p>Let's help can help to attract new customers and expand business's customer base.</p>
        </div>

        <div className="left_right_pic_bg" data-aos="fade-down-left" data-aos-delay="200">
          <div className="grid_pic ">
            <Image
              objectPosition="center"
              src="/assets/images/product.png"
              alt="a girl"
              objectFit="contain"
              layout="fill"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="right_text_left_pic" id="boost-traffic">
        <div className="px-8" data-aos="flip-left" data-aos-delay="200">
          <div className="grid_pic">
            <Image
              objectPosition="center"
              src="/assets/images/girl.jpg"
              alt="a girl"
              objectFit="cover"
              layout="fill"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="right_left_text_bg" data-aos="fade-up" data-aos-delay="200">
          <h1 className="grid_header_text">Targets specific audiences</h1>
          <p>
            We would target specific demographics or groups of consumers, ensuring that their message is seen by the
            people who are most likely to be interested in your products or services.
          </p>
        </div>
      </div>
      <div className="left_text_right_pic " id="trust-building">
        <div data-aos="fade-up-right" data-aos-delay="200">
          <div className="left_right_text_bg">
            <h1 className="grid_header_text "> Enhances customer loyalty</h1>
            <p>
              We would help you build customer loyalty by keeping a brand top-of-mind and reminding customers about your
              products or services.
            </p>
          </div>
        </div>

        <div className="left_right_pic_bg" data-aos="fade-up-left" data-aos-delay="200">
          <div className="grid_pic">
            <Image
              objectPosition="center"
              src="/assets/images/flower.png"
              alt="a girl"
              objectFit="contain"
              layout="fill"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid
