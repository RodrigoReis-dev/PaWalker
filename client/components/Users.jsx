import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../features/users/usersSlice'



function Users() {
  const usersDisplay = useSelector((state) => state.users)
  const dispatch = useDispatch()
  // console.log(usersDisplay)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <main className="">
      {usersDisplay.map((user, i) => (
          <section key={i} className="">
            <div>
              <img className="" src={user.image} alt={user.name} />
            </div>
            <div>
              <h3 className="">{user.name}</h3>
            </div>
            <div>
              <h3 className="">{user.location}</h3>
            </div>
          </section>
        ))}
    </main>
  )
}

export default Users
