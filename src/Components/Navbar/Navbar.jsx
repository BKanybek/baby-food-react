import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '../../Img/logo.png';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { Badge } from '@mui/material';
import { AiOutlineShopping, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

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
      <div className={`nav-links ${Mobile && "open"}`}>
          <div className='drop-wrapper' to="/" onClick={() => setDrop(!drop)}>Каталог товаров
              <div className={`links-dropdown ${!drop && 'drop-list'}`} onClick={() => setMobile(false)}>
                <Link to="products">Посмотреть все</Link>
                <Link to="/add">Детское питание</Link>
                <Link to="/">Подгузники</Link>
                <Link to="/add">Товары по оптовым ценам</Link>
                  {/* <Link to="/">Юбки и Платья</Link>
                  <Link to="/add">Брюки и шорты</Link>
                  <Link to="/add">Деним</Link>
                  <Link to="/add">Верхняя одежда</Link> */}
              </div>
              <ul>
            <li>
              <Link>
                О нас
              </Link>
            </li>
            <li>
              <Link>
                Разное
              </Link>
            </li>
            <li>
              <Link>
                Контакты
              </Link>
            </li>
            <li>
              <Link>
                Акции
              </Link>
            </li>

          </ul>        
          </div> 
         
          <div className='icons'>
              <Link to='/cart'>
              <Badge>
                <AiOutlineShopping/>
              </Badge> 
              </Link>
              <Link to='/'>
              <Badge>
                <AiOutlineHeart/>
              </Badge>
              </Link>
              <Link  to='/'>
              <AiOutlineUser/>
              </Link>
            </div>
        </div>
         
        <button className='mobile-menu-icon' onClick={handleClick}>
          {Mobile ? <ImCross/> : <FaBars/>}   
        </button>
    </nav>
  )
}
