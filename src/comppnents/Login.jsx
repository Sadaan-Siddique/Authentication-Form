import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import useAuth from '../hooks/authHook';
import { Link } from 'react-router-dom'

function Login() {
    let [loading, setLoading] = useState(false);
    // use State
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    // auth Hook
    const { setIsLoggedIn, API_URL } = useAuth()
    // use Navigate
    const navigate = useNavigate();
    // JS
    const submitfunc = (e) => {
        setLoading(true)
        console.log(phone, password)
        e.preventDefault();
        let obj = {
            phone,
            password
        }
        let url = API_URL + '/Login';
        axios.post(url, obj).then((res) => {
            setIsLoggedIn(true)
            setLoading(false)
            console.log(res);
            setStatusMsg('You Have Logged in')
            navigate('/nav/main')
        }).catch((err) => {
            setLoading(false)
            console.log(err);
            setStatusMsg('Not Logged in')
            navigate('/login')
        })
    }
    return (
        <>

            <div className='container text-center'>
                <h1>Login In OR Signup</h1>
                <Link className='btn btn-dark btn-outline-warning' to={'/login'}>Login</Link>
                <Link className='btn btn-dark btn-outline-warning' to={'/signup'}>Signup</Link>
            </div>
            <div className='text-center container mt-5'>
                <p className="display-2">Login</p>
                <h1>{statusMsg}</h1>
                <input type="number" onChange={(e) => {
                    setPhone(e.target.value);
                }} placeholder='Phone number' />
                <input type="password" onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder='Password' />
                <button type='Submit' onClick={submitfunc}>{loading ? (<BeatLoader style={{ color: "black", position: "relative", top: "2px" }} size="12px" />) : ('Submit')}</button>
            </div>
        </>
    )
}

export default Login