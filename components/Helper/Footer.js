import { FaFacebook, FaTwitter } from "react-icons/fa"
import Link from "next/link"
import dayjs from "dayjs"

const Footer = () => {
  return (
    <div className="footer_first_bg">
      <div className="footer_second_bg">
        <div className="footer_grid">
          <div className="footer_logo_bg">
            <Link href="/">
              <h1>AC</h1>
            </Link>
          </div>
          <div className="footer_link_list">
            <h1 className="footer_link_list_header">Services</h1>
            <Link href="/#advertisement">
              <button>Advertisment</button>
            </Link>
            <Link href="/#boost-traffic">
              <button>Boost Traffic</button>
            </Link>
            <Link href="/#trust-building">
              <button>Trust Building</button>
            </Link>
          </div>
          <div className="footer_link_list">
            <h1 className="footer_link_list_header">Navigate</h1>
            <Link href="/campaign/new-campaign">
              <button>Create Campaign</button>
            </Link>
            <Link href="/campaign">
              <p>View Campagin</p>
            </Link>
            <Link href="/">
              <button>Visit Home</button>
            </Link>
          </div>
        </div>
        <div className="footer_social_bg">
          <div className="footer_second_social_bg">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="footer_facebook" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="footer_twitter" />
            </Link>
          </div>
          <div className="footer_year">
            <span>@{dayjs().year()}</span>
            <span>Ad Camp</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
