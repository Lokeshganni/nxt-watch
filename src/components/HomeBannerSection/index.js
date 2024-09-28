// import {RxCross2} from 'react-icons/rx'
import {useState} from 'react'
import {BannerContainer} from './styledComponents'
import './index.css'

const HomeBannerSection = () => {
    const [close,setClose]=useState(false)
    const handleCloseBannerBtn=()=>{
        setClose(true)
    }
return(
  <BannerContainer data-testid='banner' style={{display:`${close && 'none'}`}} className="home-banner-container">
    <img
      className="nav-logo-img"
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="nxt watch logo"
    />
    <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
    <button className="get-it-now-btn" type="button">
      GET IT NOW
    </button>
    <button  onClick={handleCloseBannerBtn} data-testid='close' className="cancel-btn" type="button">
      X{/* <RxCross2 /> */}
    </button>
  </BannerContainer>
)}

export default HomeBannerSection
