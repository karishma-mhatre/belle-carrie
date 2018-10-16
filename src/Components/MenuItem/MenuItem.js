import React from 'react';
import './menuItem.css'

class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu-item">
                <div>{this.props.name}</div>
                {
                    this.props.subMenu.map((item,index) => {
                        return (
                        <div key={index} className="sub-menu">
                            {item}
                        </div>
                        )
                    })
                }
            </div>
            
        )
    }
}
export default MenuItem;