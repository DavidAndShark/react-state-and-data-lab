import './ContactInfo.css'

const ContactInfo = (props) => {
  return (
    <div className='contact-container'>
      <div className='contact-info company'>
        <h2>{props.user.company.name}</h2>
        <h5>"{props.user.company.catchPhrase}"</h5>
      </div>
      <div className='contact-info'>
        <h4>{props.user.email}</h4>
        <h4>{props.user.phone}</h4>
      </div>
      <div className='contact-info'>
        <h4>{props.user.address.street}</h4>
        <h4>{props.user.address.suite}</h4>
        <h4>{props.user.address.city} {props.user.address.zipcode}</h4>
      </div>
      <a href={props.user.website}><button className='website-btn'>Visit Website</button></a>
    </div>
  )
}

export default ContactInfo