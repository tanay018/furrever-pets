import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading="About Us"
        bannerimage= 'https://bighandslittlepaws.org/wp-content/uploads/cat-and-dog.jpg'
        />
        <div className='pgleft pgcommon'>
            <img src='https://img.freepik.com/premium-vector/pet-shop-dog-cat-cartoon-vector-icon-illustration_480044-815.jpg' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg' alt='noimg' />

            <div>
                <h1>Who are we</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://w7.pngwing.com/pngs/674/885/png-transparent-pet-shop-illustration-alecrim-pet-e-jardim-loja-2-pet-shop-pet-shop-model-celebrities-building-pet-thumbnail.png' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About