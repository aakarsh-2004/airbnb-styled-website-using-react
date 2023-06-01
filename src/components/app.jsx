import React from 'react';
import '../style.css';
import Navbar from './navbar';
import Header from './landing-page';
import Card from './card';
import Details from '../details';

export default function App() {
    return(
        <div className="container">
            <Navbar />
            <Header />
            <div className="cards">
                {Details.map((ele, index) => {
                    return(
                        <Card 
                            key = {index}
                            // ele = {ele}
                            // with this we have to write props.ele.whatever in card.jsx
                            // or we can use es6 feature
                            {...ele}
                        />
                    )
                })}
            </div>
        </div>
    )
}