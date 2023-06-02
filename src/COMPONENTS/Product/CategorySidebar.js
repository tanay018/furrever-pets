import React from 'react'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Name tags'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Hygiene'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Treats'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Bowl & Feeder'
        },
        {
            id: 5,
            categoryimage: img1,
            categoryname: 'Clothes'
        },
        {
            id: 6,
            categoryimage: img2,
            categoryname: 'Biscuits'
        },
        {
            id: 7,
            categoryimage: img3,
            categoryname: 'Medicines'
        },
        {
            id: 8,
            categoryimage: img4,
            categoryname: 'Supplement'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar