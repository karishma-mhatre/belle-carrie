import React from 'react';
import "./header.css";
class Header extends React.Component {

    showMenu = (e) => {
        let menu = document.getElementsByClassName("menu")[0];
        if(e.target.className === "menu-icon") {
            menu.style.display = "block";
            e.target.className += " menu-close";
        }else {
            menu.style.display = "none";
            e.target.className = "menu-icon";
        }
    }
    render() {
        return (
            <div className="header center-align">
                <h1 className="light-green-font extra-large-font">Belle & Carrie</h1>
                <h2 className="greyish-green-font large-font uppercase-text">Rehabilitation Yoga</h2>
                <span className = "menu-icon" onClick = {this.showMenu}></span>
            </div>
        )
    }
}
export default Header;