import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvoCkB8K0Pi7IjPbsTSIHwdykMTVKqXhtrA&usqp=CAU',
            title: 'Pet food & treats at your doorstep',
            description: 'One stop solution for your pet',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://img.freepik.com/premium-photo/pet-care-concept-various-pet-accessories-tools-yellow-background-flat-lay_154515-6903.jpg',
            title: 'Toys for your pet',
            description: 'One stop solution for your pet',
            button: 'htttps://www.google.com'
        },
        {
            id: 3,
            image: 'https://cdn.hswstatic.com/gif/dog-leash.jpg',
            title: ' Belts , Leashes & other accessories at your doorstep',
            description: 'One stop solution for your pet',
            button: 'htttps://www.google.com'
        }
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
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
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