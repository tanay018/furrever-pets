import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        heading="Terms & Conditions"
      />


      <div className='pgcont1'>
        <h3>Acceptance of Terms: </h3>
        <p>By accessing and using this website, you agree to comply with these terms and conditions, as well as any additional terms and policies referenced or incorporated herein.</p>
      </div>
      <div className='pgcont1'>
        <h3>Products and Services:</h3>
        <p> Our website offers a variety of pet-related products and services. We strive to provide accurate product descriptions, pricing, and availability. However, we reserve the right to modify or discontinue any product or service without prior notice.</p>
      </div>

      <div className='pgcont1'>

        <h3>Ordering and Payment:</h3>
        <p> When placing an order, you agree to provide accurate and complete information. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel an order for any reason. Payment must be made in full at the time of purchase unless other arrangements are agreed upon.</p>
      </div>

      <div className='pgcont1'>
        <h3>Shipping and Delivery: </h3>
        <p>We will make reasonable efforts to ship products in a timely manner. However, we cannot guarantee specific delivery dates or times. Risk of loss and title for items purchased pass to you upon delivery by the carrier.</p>
      </div>

      <div className='pgcont1'>
        <h3>Returns and Refunds: </h3>
        <p>Our return and refund policy outlines the procedures and conditions for returning products and receiving refunds or exchanges. Please review this policy carefully before making a purchase.</p>
      </div>

      <div className='pgcont1'>
        <h3>Privacy and Data Protection:</h3>
        <p> Our privacy policy explains how we collect, use, and protect your personal information. By using this website, you consent to the collection and processing of your data as described in the privacy policy.</p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions