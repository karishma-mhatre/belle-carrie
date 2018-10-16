import React from 'react';
import ladyYoga from "../../Images/ladyYoga.jpg";
import "./home.css";

class Home extends React.Component {
    render () {
        return (
            <div className="flex-container content">
                <div className="tagline green-font">
                    <h1>YOGA</h1>
                    <p>For Better Health & Flexibility</p>
                </div>
                <img alt="lady-yoga" src={ladyYoga}></img>
            </div>
        )
    }
}
export default Home;