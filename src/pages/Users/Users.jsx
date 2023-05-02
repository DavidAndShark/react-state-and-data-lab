import { userData } from "../../data/userData"
import './Users.css'
import UserCard from "../../components/UserCard/UserCard"
console.log(userData)

const Users = () => {
  return (
    <>
      <h1>User List</h1>
      <div className="card-container">
        {userData.map(user => 
          <UserCard key={user.id} user={user} />
          )}
      </div> 
    </>
  )
}

export default Users;