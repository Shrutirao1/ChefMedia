import React from 'react'

import './Navbar.css'
import { MenuItems } from "./MenuItems"

class Navbar extends React.Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            
            <nav className = "NavbarItems">
                <h1 className = "navbar-logo"> ChefMedia </h1>
                <div className = "menu-icon" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? 'fas-fa-times': 'fas fa-bars'}> </i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return (
                            <li key = {index}>
                                <a className = {item.cName} href = {item.url}>
                                    {item.title}  
                                </a>
                            </li>
                        )
                    })}

                    
                </ul>
                
            </nav>
            
        )
    }
}
export default Navbar
