import { useState } from 'react'
import './UserCard.css'
import ContactInfo from '../ContactInfo/ContactInfo'

const UserCard = (props) => {
  const [displayContactInfo, setDisplayContactInfo] = useState(false)
  function handleDisplayContactInfo() {
    setDisplayContactInfo(displayContactInfo ? false : true)
  }
  return ( 
    <div className='user-card'>
      <div className='profile-container'>
        {displayContactInfo ? 
          <ContactInfo user={props.user} />
          :
          <>
            <img 
              className='user-photo' 
              src={props.user.avatar} alt="cartoon avatar photo" 
            />
            <div className='user-name'>
              <h2>{props.user.name}</h2>
              <h3>({props.user.username})</h3>
            </div>
          </>
        }
      </div>
      <button onClick={handleDisplayContactInfo}>
        {displayContactInfo ? 'Hide Contact Info' : 'Show Contact Info'}
      </button>
    </div>
  )
}

export default UserCard