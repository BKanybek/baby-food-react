import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '../../Img/icons/LogoTest.png';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { Badge } from '@mui/material';
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Cart from '../../Img/icons/cart.png';
import Favorite from '../../Img/icons/favorite.png';
import User from '../../Img/icons/user.png';

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  console.log(mobile);

  const handleClick = () => {
    setMobile(!mobile)
  }

  const handleResize = () => {
    if(window.innerWidth > 720) {
        setMobile(false)
    }
  }

  useEffect(() => {
      window.addEventListener("resize", handleResize)
  })


  useEffect(() =>{
    if (mobile) {
    document.body.style.overflow = 'hidden';
    } else {document.body.style.overflow = 'visible'};
  }, [mobile])

  

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img className='img-logo' src={Logo} alt="logo" />  
      </Link>
      <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Поиск..."/>
            <div className="search-btn">
              <BsSearch/>
            </div>
          </div>
        <ul className={`nav-links ${mobile && "open"}`}>
          

          <div className='icons'>
          <a href='/cart'>
            <Badge>
              <img className='img-cart' src={Cart} alt="cart" />
            </Badge> 
          </a>
          <a href='/'>
            <Badge>
              <img className='img-favorite' src={Favorite} alt="favorite" />
            </Badge>
          </a>
          <a href='/'>
            <img className='img-user' src={User} alt="user" />
          </a>
        </div>
        </ul>
        
      <button className='mobile-menu-icon' onClick={handleClick}>
        {mobile ? <ImCross/> : <FaBars/>}   
      </button>
    </nav>
  )
}
            // <div className='drop-wrapper' to="/"><p onClick={() => setDrop(!drop)}>Каталог товаров</p>
            // <div className={`links-dropdown ${!drop && 'drop-list'}`} onClick={() => setMobile(false)}>
            //   <Link to="products">Посмотреть все</Link>
            //   <Link to="/add">Детское питание</Link>
            //   <Link to="/">Подгузники</Link>
            //   <Link to="/add">Товары по оптовым ценам</Link>
            //     {/* <Link to="/">Юбки и Платья</Link>
            //     <Link to="/add">Брюки и шорты</Link>
            //     <Link to="/add">Деним</Link>
            //     <Link to="/add">Верхняя одежда</Link> */}
            // </div>
            // <ul>
            //   <li>
            //     <Link>
            //       О нас
            //     </Link>
            //   </li>
            //   <li>
            //     <Link>
            //       Разное
            //     </Link>
            //   </li>
            //   <li>
            //     <Link>
            //       Контакты
            //     </Link>
            //   </li>
            //   <li>
            //     <Link>
            //       Акции
            //     </Link>
            //   </li>
            // </ul>        
            // </div>  