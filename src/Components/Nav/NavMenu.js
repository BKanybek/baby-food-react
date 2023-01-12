import React from 'react';
import './NavMenu.css';

export const NavMenu = () => {
  return (
    <nav className="desktop-navigation-menu">
      <div className="nav-container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <a href="/" className="menu-title">Ipsum</a>
          </li>
          <li className="menu-category">
            <a href="/" className="menu-title">Категории</a>
            <div className="dropdown-panel">
              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="/">Electronics</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Desktop</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Laptop</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Camera</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Tablet</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Headphone</a>
                </li>
              </ul>
              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="/">Памперсы</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Formal</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Casual</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Sports</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Jacket</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Sunglasses</a>
                </li>
              </ul>
              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="/">Детское питание</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Formal</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Casual</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Perfume</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Cosmetics</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Bags</a>
                </li>
              </ul>
              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="/">Electronics</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Smart Watch</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Smart TV</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Keyboard</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Mouse</a>
                </li>
                <li className="panel-list-item">
                  <a href="/">Microphone</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu-category">
            <a href="/" className="menu-title">Lorem</a>
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="/">Shirt</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Shorts & Jeans</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Safety Shoes</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Wallet</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="/" className="menu-title">Lorem</a>
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
            </ul>
            
          </li>
          <li className="menu-category">
            <a href="/" className="menu-title">Lorem Ipsum</a>
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <a href="/" className="menu-title">Lorem</a>
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
              <li className="dropdown-item">
                <a href="/">Lorem Ipsum</a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <a href="/" className="menu-title">Контакты</a>
          </li>
          <li className="menu-category">
            <a href="/" className="menu-title">Разное</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
