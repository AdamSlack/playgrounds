import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import BurgerButton from '../BurgerButton/BurgerButton';

import { useStyles } from './NavBar.css';


type NavLinksProps = {
  visible: boolean,
}
const NavLinks: React.FC<NavLinksProps> = ({ visible }) => {
  const { navLinks, navLink } = useStyles();

  return (
    <ul hidden={!visible} className={ navLinks }>
      <li>
        <Link to='/' className={ navLink }>Home</Link>
      </li>
    </ul>
  )
}

export const NavBar = () => {
  const { navBar } = useStyles();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleBurgerClick = () => setIsNavOpen(!isNavOpen)
  const handleBurgerBlur = () => setIsNavOpen(false);

  return (
      <div className={ navBar }>
        <nav>
          <Link to='/'>Home</Link>
          <BurgerButton onClick={handleBurgerClick} onBlur={handleBurgerBlur}/>
        </nav>
        <NavLinks visible={isNavOpen}/>
    </div>
  )
}

export default NavBar;