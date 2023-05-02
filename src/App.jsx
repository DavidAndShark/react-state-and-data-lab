import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Pokedex from './pages/Pokedex/Pokedex'
import Users from './pages/Users/Users'
import CircleSelector from './pages/CircleSelector/CircleSelector'
import PokemonShow from './pages/PokemonShow/PokemonShow'

// ---------------------------------------------------------------------------
// ***************************************************************************
// You should not need to touch any of the code in this file for this lab!!!!!
// ***************************************************************************
// ---------------------------------------------------------------------------

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/users' element={<Users />}/>
        <Route path='/pokedex' element={<Pokedex />}/>
        <Route path='/pokemon/:pokeId' element={<PokemonShow />}/>
        <Route path='/circle-selector' element={<CircleSelector />}/>
      </Routes>
    </>
  )
}

export default App
