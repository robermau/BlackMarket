import {Link, NavLink} from 'react'
import {FcHome} from 'react-icons/fc'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {

  const [togglerNav,setTogglernav]=useState(false);

  const clickHandler=() => {
    setTogglernav(!togglerNav);
  };

  return (
  <nav className='h-auto md:h-24 p2 bg-blue-200 max-w-6x1 mx-auto flex justify-between md:items-center'>
    <Link to='/'>
      <FcHome className='text-6x1'/>
    </Link>
    <div className={
      togglerNav ? 'flex  flex-col gap-4 md:inline' : 'hidden md:inline'
    }>
    <NavLink className='nav-link' onClick={clickHandler} to='/'>Home</NavLink>
    <NavLink className='nav-link' onClick={clickHandler} to='/AcercaDe'>Acerca de</NavLink>
    <NavLink className='nav-link' onClick={clickHandler} to='/Contacto'>Contacto</NavLink>
    </div>  
    <button className='inline md:hidden self-start nav-link'
    onClick={clickHandler}>{togglerNav ? <AiOutlineClose />:<FaBars/> }</button>
  <nav/>
);

}

export default Navbar;
