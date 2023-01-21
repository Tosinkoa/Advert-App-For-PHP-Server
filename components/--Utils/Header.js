import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/router"

const Header = ({ headerText, dontShowBackButton }) => {
  const router = useRouter()
  return (
    <div className="header_bg">
      {!dontShowBackButton && <AiOutlineArrowLeft className="header_icon" onClick={() => router.back()} />}
      <p className="header_text">{headerText} </p>
    </div>
  )
}

export default Header
