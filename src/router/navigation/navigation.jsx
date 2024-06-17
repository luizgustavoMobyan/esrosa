/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { LogoIcon } from '../../components/logo-icon/logo-icon'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <span className="logo-text-left">ES</span>
          <NavLink to="/">
          <LogoIcon />
          </NavLink>
          <span className="logo-text-right">ROSA</span>
        </div>
        <div className="nav-links-container">
          <a className="nav-link">Doces</a>
          <a className="nav-link">Bolos</a>
          <a className="nav-link">Salgados</a>
          <a className="nav-link">Faça Sua Festa</a>
        </div>
        <NavLink className="nav-link-login" to="/auth">
        <a className="nav-link-login">Minha Conta</a>
        </NavLink>
        <NavLink className="nav-link" to="/checkout">
        <CartIcon className="nav-cart" />
        </NavLink>
      </div>
      <Outlet/>
    </>
  );
}

