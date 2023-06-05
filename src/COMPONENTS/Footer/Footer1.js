import React from 'react'
// import veges from '../../ASSETS/veges.png'
import './Footer1.css'
import img1 from '../../ASSETS/banner/drools.jpg'
import img2 from '../../ASSETS/banner/n&d.jpg'
import img3 from '../../ASSETS/banner/pedigree offer.jpg'
import img4 from '../../ASSETS/banner/rc.jpg'
import img5 from '../../ASSETS/banner/BL.jpg'
import Slider from 'react-slick'
const Footer1 = () => {
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
        // <div className='footer1'>
        //     <div className='left'>
        //         {/* <img src={veges} alt='veges' /> */}
        //         <img src='https://waya.media/wp-content/uploads/sites/3/2020/07/pawsket.jpeg ' alt='noimg' />
             
        //     </div>
        //     <div className='right'>
        //         <h1>All your Pet's needs in one place
        //         </h1>
        //         <p>We deliver Pet Food , Treats , Toys and Accessories at your doorstep.
                  
        //         </p>
        //     </div>
        // </div>
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
    )
}

export default Footer1