import Link from "next/link"

const Navbar = () => {
  return (
    <div className="navbar_bg">
      <div className="navbar_second_bg">
        <div className="navbar_third_bg">
          <Link href="/">
            <h1 className="navbar_logo">AC</h1>
          </Link>
          <div className="navbar_buttons_bg ">
            <Link href="/campaign/new-campaign">
              <button className="navbar_buttons">Create Campaign</button>
            </Link>
            <Link href="/campaign">
              <button className="navbar_buttons">View Campaigns</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
