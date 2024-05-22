import './App.scss'
import { Navigation } from './router/navigation/navigation'
import { Home } from './router/home/home'
import { Auth } from './router/auth/auth'

export function App() {
  return ( <>
    <Navigation/>
    <Home/>
    <Auth/>
  </>
  )
}