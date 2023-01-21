import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useSelector } from "react-redux"
import dynamic from "next/dynamic"

const PreviewComponent = dynamic(() => import("../Campaigns/PreviewComponent"))

const Layout = ({ title, keywords, description, children }) => {
  const showPreviewCard = useSelector((state) => state.previewCampaign.previewCampaign)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout_bg">
        <Navbar />
        {showPreviewCard && <PreviewComponent />}
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout

// This is use for SEO Optimization
Layout.defaultProps = {
  title: "Arce-Wave Project",
  description: "Arce-Wave Project",
  keywords: "arcewave-project.com, arcewave.com, arcewave",
}
