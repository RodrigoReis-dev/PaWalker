import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Login() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main')
    }
    console.log(isAuthenticated)
    // console.log(user)
    // console.log(user === {})
  }, [isAuthenticated])

  function handleLogoff(e) {
    e.preventDefault()
    // console.log('log off')
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    // console.log('register')
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    // console.log('sign in')
    loginWithRedirect()
  }

  return (
    <div>
      <div className='block text-center'>
        <IfAuthenticated>
          <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  drop-shadow-shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            <a href='/' onClick={handleLogoff}>
              Log off
            </a>
          </button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  drop-shadow-shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            <a href='/' onClick={handleRegister}>
              Register
            </a>
          </button>
          <button className='w-52 cursor-pointer mb-5 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            <a href='/' onClick={handleSignIn}>
              Sign in
            </a>
          </button>
        </IfNotAuthenticated>
      </div>
    </div>
  )
}

export default Login
