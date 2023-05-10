import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSETS/Images/grrom.png'
import img5 from '../../ASSETS/Images/5.png'
import img6 from '../../ASSETS/Images/6.png'
import img7 from '../../ASSETS/Images/7.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
      
        <div className='content'>
          <h1>
           Grooming 
          </h1>
          {/* <p> Shop vegetables now</p> */}
        </div>
      </div>
      <div className='container'>
        <img src={img5} alt='img5' />
        <div className='content'>
          <h1>
            Accessories
          </h1>
          <p> Shop now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img6} alt='img6' />
        <div className='content'>
          <h1>
            Food
          </h1>
          <p> Shop  now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img7} alt='img7' />
         <div className='content'>
          <h1>
           Toys
          </h1>
          <p> Shop  now</p>
        </div>
      </div>
    </div>
  )
}
//ddndnndndndnndndnd
export default HomeCategories