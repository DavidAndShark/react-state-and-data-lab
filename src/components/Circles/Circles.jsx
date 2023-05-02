import './Circles.css'

const Circles = (props) => {
  return (
    <div className="circles">
      {props.selections.map((selection, idx) =>
        <div 
          key={idx}
          className={selection ? 'selected' : ''}
          onClick={()=>props.handleSelectCircle(idx)} 
        >
          {idx + 1}
        </div>  
      )}
    </div>
  )
}

export default Circles