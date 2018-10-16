import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';
import "./menu.css";
class Menu extends React.Component {
    render() {
        return (
            <div className="menu" id = "menu">
                {
                    this.props.menuItems.map((menu) => {
                        return (
                               <Link to={menu.state}>
                                <MenuItem key={menu.name} name={menu.name} subMenu={menu.subMenu}></MenuItem> 
                               </Link>
                        );
                    })
                }
            </div>
        )
    }
}
export default Menu;