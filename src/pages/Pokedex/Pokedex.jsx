import { useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import PageButtonBar from "../../components/PageButtonBar/PageButtonBar"
import { pokeData } from "../../data/pokeData"
console.log(pokeData)


const Pokedex = () => {
  const [currIdx, setCurrIdx] = useState(0)
  const [displayCount, setDisplayCount] = useState(10)
  const [pageCount, setPageCount] = useState(Math.ceil(pokeData.length / 10))
  const [currPage, setCurrPage] = useState(1)
  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemonData(10, 0))
  const [searchValue, setSearchValue] = useState('')

  function handleSearchInput(e) {
    setSearchValue(e.target.value)
    setDisplayedPokemon(pokeData.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  }

  function filterPokemonData(newCount, newIndex) {
    const filteredData = pokeData.filter((pokemon, idx) => {
      return idx >= newIndex && idx < newIndex + newCount
    })
    return filteredData
  }

  function handleChangePageCount(numPerPage) {
    const newPageCount = Math.ceil(pokeData.length/numPerPage)
    setPageCount(newPageCount)
  }

  function handleChangeDisplayCount(e) {
    const newCount = parseInt(e.target.value) 
    setDisplayCount(newCount)
    setCurrIdx(0)
    setDisplayedPokemon(filterPokemonData(newCount, 0))
    handleChangePageCount(newCount)
    setCurrPage(1)
  }

  function handleIncreaseCurrIdx() {
    if(currIdx + displayCount < pokeData.length) {
      const newIdx = currIdx + displayCount 
      setCurrIdx(newIdx)
      setDisplayedPokemon(filterPokemonData(displayCount, newIdx))
      setCurrPage(currPage + 1)
    }
  }
  
  function handleDecreaseCurrIdx() {
    let newIdx = currIdx - displayCount
    if (currIdx - displayCount > 0) {
      setCurrIdx(newIdx)
      setCurrPage(currPage - 1)
    } else {
      newIdx = 0
      setCurrIdx(newIdx)
      setCurrPage(1)
    }
    setDisplayedPokemon(filterPokemonData(displayCount, newIdx))
  }

  function handleSetCurrIdx(selectedPageIdx) {
    let newIdx = (parseInt(selectedPageIdx) * displayCount)
    setCurrPage(parseInt(selectedPageIdx) + 1)
    setCurrIdx(newIdx)
    setDisplayedPokemon(filterPokemonData(displayCount, newIdx))
  }

  return ( 
    <>
      <h1>Pokemon List</h1>
      <input type="text" placeholder="Search" onChange={handleSearchInput}/>
      {!searchValue && 
        <>
          <div className="pagination-container">
            <button onClick={handleDecreaseCurrIdx}>&lt;</button>
            <PageButtonBar currPage={currPage} pageCount={pageCount} handleSetCurrIdx={handleSetCurrIdx} />
            <button onClick={handleIncreaseCurrIdx}>&gt;</button>
          </div>
          <div className="num-results-container">
            <div className="result-count">
              Results {currIdx + 1} - {(currIdx + displayCount <= pokeData.length ? (currIdx + displayCount) : pokeData.length)} of {pokeData.length}
            </div>
            <div>
              <select onChange={handleChangeDisplayCount} value={displayCount} name="displayCount">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select> Results per page
            </div>
          </div>
        </>
      }
      <div className="pokemon-container">
        {displayedPokemon.map(pokemon => 
          <Link to={`/pokemon/${pokemon.number - 1}`} key={pokemon._id}>
            <div className="pokemon-link">
              <img src={pokemon.image} alt="a fierce pokemon" />
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>  
            </div>
          </Link>
        )}
      </div>
    </>
  )
}

export default Pokedex