import React from 'react';
import '../style.css';
import CoverImage from '../assets/cover.png';

export default function Header() {
    return (
        <div className="photogrid">
            <div className="text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
            <img src={CoverImage} alt="" />
        </div>
    )
}