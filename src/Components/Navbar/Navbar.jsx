import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '../../Img/logo.png';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { Badge } from '@mui/material';
// import { AiOutlineShopping, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Cart from '../../Img/icons/cart.png';
import Favorite from '../../Img/icons/favorite.png';
import User from '../../Img/icons/user.png';

export const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  const [show, setShow] = useState(true)
  const [drop, setDrop] = useState(true)
  console.log(Mobile);

  const[value, setValue ] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    setMobile(!Mobile)
  }

  const reset = (e) => {
    setShow(!show);
    setValue('')
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
    if (Mobile) {
    document.body.style.overflow = 'hidden';
    } else {document.body.style.overflow = 'visible'};
  }, [Mobile])

  

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img className='img-logo' src={Logo} alt="logo" />  
      </Link>
        <ul className={`nav-links ${Mobile && "open"}`}>
          <div className='nav-items'>
            <li>
              <Link className='hasChild' to='/'>
                Каталог товаров
                <i className='fas fa-caret-down'/>
              </Link>
              <div className='dropdown'>
                    <div className="row">
                      <ul>
                        <li><a href="/">Показать все</a></li>
                        <li><a href="/">Подгузники</a></li>
                        <li><a href="/">Детское питание</a></li>
                        <li><a href="/">Lorem, ipsum.</a></li>
                        <li><a href="/">Lorem, ipsum.</a></li>
                      </ul>
                    </div>
              </div>
            </li>
            <li>
              <Link  to='/'>
                О нас
              </Link>
            </li>
            <li>
              <Link  to='/'>
                Разное
              </Link>
            </li>
            <li>
              <Link  to='/'>
                  Контакты
              </Link>
            </li>
            <li>
              <Link  to='/'>
                Акции
              </Link>
            </li>
          </div>

          <div className='icons'>
          <Link to='/cart'>
            <Badge>
              <img className='img-cart' src={Cart} alt="cart" />
            </Badge> 
          </Link>
          <Link to='/'>
            <Badge>
              <img className='img-favorite' src={Favorite} alt="favorite" />
            </Badge>
          </Link>
          <Link  to='/'>
            <img className='img-user' src={User} alt="user" />
          </Link>
        </div>
        </ul>
        
      <button className='mobile-menu-icon' onClick={handleClick}>
        {Mobile ? <ImCross/> : <FaBars/>}   
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