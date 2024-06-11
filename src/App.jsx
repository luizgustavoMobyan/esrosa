/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Auth } from './router/auth/auth';
import { Home } from './router/home/home';
import { Navigation } from './router/navigation/navigation';
import { Shop } from './router/shop/shop';
import CheckoutPage from './components/checkout-page/CheckoutPage';
import { CartProvider } from './components/cart-context/CartContext';

export function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='auth' element={<Auth />} />
          <Route path='shop/*' element={<Shop/>} />
          <Route path='checkout' element={<CheckoutPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}