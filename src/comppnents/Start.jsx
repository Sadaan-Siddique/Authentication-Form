import React from 'react'
import { Link } from 'react-router-dom'
// import ChatGPTScientificCalculator from '../comppnents/ChatGPTScientificCalculator'
function Start() {
    return (
        <>
            <div className='container text-center'>
                <h1>Login In OR Signup</h1>
                <Link className='btn btn-dark btn-outline-warning' to={'/login'}>Login</Link>
                <Link className='btn btn-dark btn-outline-warning' to={'/signup'}>Signup</Link>
            </div>
            {/* <ChatGPTScientificCalculator/> */}
            

        </>
    )
}

export default Start