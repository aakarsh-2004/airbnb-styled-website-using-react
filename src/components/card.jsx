import React from 'react';
import '../style.css';

export default function Card(props) {
    return(
        <div className="card">
            <div className="cardbadge">
                <p>{props.instock ? "IN STOCK" : "SOLD OUT"}</p>
            </div>
            <div className="card-image">
                <img src={props.link} alt="" />
            </div>
            <div className="info">
                <h3 className='rating'><span>&#9733;</span> {props.rating}</h3>
                <h3 className='quantity'>{props.quantity}</h3>
                <li>{props.country}</li>
            </div>
            <div className="info bio">
                {props.bio}
            </div>
            <div className="price">
                <h3 className='cost'>{props.price} <span> / Person</span></h3>
            </div>
        </div>
    )
} 