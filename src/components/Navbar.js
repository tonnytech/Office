import React, {useState} from 'react'
import menu from '../Assets/menu.png';
import office from '../Assets/office.png';
import close from '../Assets/hamburgerclose.png';
import './Navbar.css'

const Navbar =()=> {
    const [isOpen, setIsOpen] = useState(false);

    const ToggleNav =()=> {
        setIsOpen(true);
    }

    const closeNav =()=> {
        setIsOpen(false);
    }
  return (
    <div className='NavbarMainContainer'>
        <div className={isOpen ? 'hideMenu' : 'showMenu'}>
            <img src={menu} className='hamburger' onClick={ToggleNav}/>
        </div>

        <div className='desktopLogo'>
            <img src={office} className='hamburger'/>
        </div>

        <div className={isOpen ? 'open' : 'close'}>
            
            <ul>
                <li className='mobileLogo'>
                    <img src={office} className='hamburger'/>
                </li>
                <li>menu</li>
                <li>menu</li>
                <li>menu</li>
            </ul>
            <div>
                <img src={close} className='hamburger hamClose'onClick={closeNav}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar