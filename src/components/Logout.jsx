import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { delete_cookie } from 'sfcookies'
import useAuth from '../hooks/authHooks';

function Logout() {
  const { setIsLoggedIn } = useAuth()
  const navigate = useNavigate();
  useEffect(() => {
    delete_cookie('cookie')
    setIsLoggedIn(false)
    setTimeout(() => {
      navigate('/');
    }, 2000)
  }, [])
  return (
    <div className='text-center display-2 fw-bold'>You Have been Logged Out !</div>
  )
}

export default Logout