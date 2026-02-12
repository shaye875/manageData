import React from 'react'
import "./terorists.css"

const Terorist = (props) => {
    return (
        <div id='terorist'>
            {props.img == null && <img src="https://nimigo.com/cdn/shop/products/CO88934_1200x.jpg?v=1661855648" alt="" className='foont' />}
            {props.img != null && <img src={props.img} alt="" className='foont' />}
            <p className='foontP'>{props.name}</p>
            <p className='foontP'>{props.organization}</p>
            <p className='foontP blue'>attacks: {props.attacks}</p>
            <p className='foontP'>{props.status}</p>
            <p className='foontP'>{props.summary}</p>
        </div>
    )
}

export default Terorist
