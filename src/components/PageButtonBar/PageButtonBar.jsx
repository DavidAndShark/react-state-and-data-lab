import './PageButtonBar.css'

const PageButtonBar = ({currPage, pageCount, handleSetCurrIdx}) => {
  
  function handleSelect(e) {
    if (!isNaN(e.target.value)) {
      handleSetCurrIdx(e.target.value)
      e.target.value = '...'
    }
  }
  
  return (
    <>
      {currPage <= 4 &&
        <>
          {[...Array(5)].map((pageNum, idx) => 
            <button 
              className={`page-num ${currPage === (idx + 1) ? 'selected' : ''}`} 
              key={idx}
              onClick={() => handleSetCurrIdx(idx)}
            >
              {idx + 1}
            </button>
          )}
          <select className='page-select' onChange={handleSelect}>
            <option value="...">...</option>
            {[...Array(pageCount - 6)].map((pageNum, idx) =>
              <option key={idx} value={idx + 5}>{idx + 6}</option>
            )}
          </select>
          <button 
            className={`page-num ${currPage === (pageCount) ? 'selected' : ''}`} 
            onClick={() => handleSetCurrIdx(pageCount - 1)}
          >
            {pageCount}
          </button>
        </>
      }
      {currPage > 4 && currPage < pageCount - 3 &&
        <>
          <button 
          className={`page-num ${currPage === 1 ? 'selected' : ''}`} 
          onClick={() => handleSetCurrIdx(0)}
          >
            1
          </button>
          <select className='page-select' onChange={handleSelect}>
            <option value="...">...</option>
            {[...Array(currPage - 3)].map((pageNum, idx) =>
              <option key={idx} value={1 + idx}>{2 + idx}</option>
            )}
          </select>
          {[...Array(3)].map((pageNum, idx) => 
            <button 
              className={`page-num ${currPage === (idx + currPage - 1) ? 'selected' : ''}`} 
              key={idx}
              onClick={() => handleSetCurrIdx(idx + currPage - 2)}
            >
              {idx + currPage - 1}
            </button>
          )}
          <select className='page-select' onChange={handleSelect}>
            <option value="...">...</option>
            {[...Array(pageCount - currPage - 2)].map((pageNum, idx) =>
              <option key={idx} value={idx + currPage + 1}>{idx + currPage + 2}</option>
            )}
          </select>
          <button 
            className={`page-num ${currPage === (pageCount) ? 'selected' : ''}`} 
            onClick={() => handleSetCurrIdx(pageCount - 1)}
          >
            {pageCount}
          </button>
        </>
      }
      {currPage >= pageCount - 3 &&
        <>
          <button 
          className={`page-num ${currPage === 1 ? 'selected' : ''}`} 
          onClick={() => handleSetCurrIdx(0)}
          >
            1
          </button>
          <select className='page-select' onChange={handleSelect}>
            <option value="...">...</option>
            {[...Array(pageCount - 6)].map((pageNum, idx) =>
              <option key={idx} value={idx + 1}>{idx + 2}</option>
              )}
          </select>  
          {[...Array(5)].map((pageNum, idx) => 
            <button 
              className={`page-num ${currPage === (idx + pageCount - 4) ? 'selected' : ''}`} 
              key={idx}
              onClick={() => handleSetCurrIdx(idx + pageCount - 5)}
            >
              {idx + pageCount - 4}
            </button>
          )}
        </>
      }
    </> 
  )
}

export default PageButtonBar