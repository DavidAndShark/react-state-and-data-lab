import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/users">Users 🧑‍🤝‍🧑</Link>
      <Link to="/pokedex">Pokemon 👹</Link>
      <Link to="/circle-selector">Circles ⭕</Link>
    </header>
  )
}

export default NavBar