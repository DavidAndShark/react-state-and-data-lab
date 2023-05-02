import { useState } from "react"
import './CircleSelector.css'
import Circles from "../../components/Circles/Circles"
import Selectors from "../../components/Selectors/Selectors"

const CircleSelector = () => {
  // state is initialized as 'true' for a circle that is currently selected - no need to adjust this!
  const [selections, setSelections] = useState([true, false, false, false])

  // function handleSelectCircle() {
  //   // this function should set state by using the index of the circle a user clicks
  //   // create a new array composed of the new true/false values
  //   // use the new array to set state 
  // }

  function handleSelectCircle(selectedIdx) {
    const newSelections = selections.map((selection, idx) => (
      selectedIdx === idx ? true : false
    ))
    setSelections(newSelections)
  }


  return ( 
    <main>
      <Circles selections={selections} handleSelectCircle={handleSelectCircle} />
      <Selectors selections={selections} handleSelectCircle={handleSelectCircle} />
    </main>
  )
}

export default CircleSelector