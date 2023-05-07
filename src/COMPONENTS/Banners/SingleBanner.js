import React from 'react'
import './SingleBanner.css'

const SingleBanner = ({bannerimage, heading}) => {
  return (
    <div className='singlebanner'>
        <div className='bannerimgfilter'></div>
        {/* <img className='bannerimg' src={bannerimage} alt='noimg' /> */}
        <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/petshop1.jpg"></img>
        <div className='bannerheading'>
            <h1>{heading}</h1>
        </div>
    </div>
  )
}

export default SingleBanner