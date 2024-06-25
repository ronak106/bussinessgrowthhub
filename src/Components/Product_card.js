import React from 'react'

export default function Product_card(props) {
  return (
    <div className="card">
        <div className="imagess">
            <img src={props.image} alt="imgg" />
            <div className="titles">{props.title}</div>
            <div className="category">{props.cat}</div>
            <div className="price">{props.price} $</div>
            <button className='buyy'>Buy</button>
        </div>
    </div>
  )
}
