import React, {useState} from 'react'
import {Nav, NavLogo, NavLinks, MenuButton} from './NavigationStyles'
import {FaHamburger} from 'react-icons/fa' 
import {Link} from 'react-scroll'

export default function Navigation() {

    const [menuOpen, setMenuopen] = useState(false)

    const toggleMenu = () =>{
        console.log('toggling')
        menuOpen? setMenuopen(false) : setMenuopen(true)
    }

    return (
        <Nav>
            <NavLogo>Justice M</NavLogo>
            <NavLinks menuOpen={menuOpen}>
                <Link to='Home' smooth={true} offset={-50} duration={1000}><li><a href="#">Home</a></li></Link>
                <Link to='About' smooth={true} offset={-50} duration={1000}><li><a href="About">About</a></li></Link>
                <Link to='Projects' smooth={true} offset={-50} duration={1000}><li><a href="#">Projects</a></li></Link>
                <Link to='Blogs' smooth={true} offset={-50} duration={1000}><li><a href="#">Blogs</a></li></Link>
                <Link to='Contact' smooth={true} offset={-50} duration={1000}><li><a href="#">Contact</a></li></Link>
            </NavLinks>
            <MenuButton>
                <FaHamburger onClick={toggleMenu} />
            </MenuButton>
        </Nav>
    )
}
