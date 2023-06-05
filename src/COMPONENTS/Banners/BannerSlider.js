import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import img1 from '../../ASSETS/banner/drools.jpg'
import img2 from '../../ASSETS/banner/n&d.jpg'
import img3 from '../../ASSETS/banner/pedigree offer.jpg'
import img4 from '../../ASSETS/banner/rc.jpg'
import img5 from '../../ASSETS/banner/BL.jpg'



const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: img1,
          //  title: 'Pet food & treats at your doorstep',
           // description: 'One stop solution for your pet',
           // button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: img4,
            // title: 'Toys for your pet',
            // description: 'One stop solution for your pet',
           // button: 'htttps://www.google.com'
        },{
            id: 3,
            image: img2,
            // title: 'Pet food & treats at your doorstep',
            // description: 'One stop solution for your pet',
            //button: 'htttps://www.google.com'
        },
        {
            id: 5,
            image: img3,
            // title: 'Toys for your pet',
            // description: 'One stop solution for your pet',
           // button: 'htttps://www.google.com'
        },
        {
            id: 6,
            image: img5,
            // title: ' Belts , Leashes & other accessories at your doorstep',
            // description: 'One stop solution for your pet',
            button: 'htttps://www.google.com'
        },
        
    ]

   
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content' >
                                    {/* <h1>{item.title}</h1>
                                    <span>{item.description}</span> */}
                                    {/* <button>Shop More</button> */}
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider