import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
    return (
        <div className='breadcrum'>
            Trang Chủ <img src={arrow_icon} alt="" /> Cửa hàng <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrums