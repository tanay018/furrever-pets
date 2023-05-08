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
                <p>Welcome to FurrEver, your ultimate destination for all your pet's needs. We are a leading online pet store dedicated to providing a wide range of high-quality products and services to pet owners around the world. At FurrEver, we understand the deep bond you share with your furry companions and strive to enhance the well-being and happiness of every pet.</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg' alt='noimg' />

            <div>
                <h1>Our Mission</h1>
                <p>Our mission is to be the go-to online destination for pet owners, offering a comprehensive selection of pet supplies, accessories, and services. We aim to provide a seamless and convenient shopping experience, coupled with exceptional customer service, to ensure the satisfaction of both you and your beloved pets.</p>

            </div>
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://w7.pngwing.com/pngs/674/885/png-transparent-pet-shop-illustration-alecrim-pet-e-jardim-loja-2-pet-shop-pet-shop-model-celebrities-building-pet-thumbnail.png' alt='noimg' />

            <div>
                <h1>Community and Education</h1>
                <p> At FurrEver, we believe in fostering a vibrant and supportive pet-loving community. Our blog section is a valuable resource for pet owners, featuring informative articles, tips, and advice on various topics, including pet care, training, nutrition, health, and behavioral issues. We are committed to empowering pet owners with the knowledge they need to provide the best care for their beloved companions.</p>
            </div>
        </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About