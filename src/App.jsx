import './App.scss'
import { Navigation } from './router/navigation/navigation'
import { Home } from './router/home/home'

export function App() {
  return ( <>
    <Navigation/>
    <Home/>
  </>
  )
}