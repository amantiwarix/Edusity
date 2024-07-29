import React, { useEffect, useState } from 'react'
import './Nabar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      window.scrollY > 800 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu =() => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true); 
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
      <img  className='logo' src={logo} alt=""/>
      <ul className={mobileMenu?'':'mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-330} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-230} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testi' smooth={true} offset={-420} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-400} duration={500}>Contact Us</Link></button></li>
      </ul>
      <img src={menu} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
