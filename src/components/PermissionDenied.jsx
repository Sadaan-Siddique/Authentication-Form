import React from 'react'
import { Link } from 'react-router-dom'

function PermissionDenied() {
    return (
        <>
            <div className='text-center text-danger display-2 fw-bold'>PermissionDenied</div>
            <div className='container text-center'>
                <h1>Login OR Signup</h1>
                <Link to='/login' className='btn btn-warning btn-outline-dark'>Login</Link>
                <Link to='/signup' className='btn btn-warning btn-outline-dark'>Signup</Link>
            </div>
        </>
    )
}

export default PermissionDenied