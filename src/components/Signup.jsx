import React, { useState, useRef } from 'react'
import axios from 'axios'
import useAuth from '../hooks/authHooks';
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { bake_cookie } from 'sfcookies';

function Signup() {
    let [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState('');
    const { setIsLoggedIn, API_URL } = useAuth()
    const navigate = useNavigate();

    const phoneNum = useRef();
    const password = useRef();

    // JS
    const btnfunc = (e) => {
        if (phoneNum.current.value === '' || password.current.value === '') {
            alert('Please Write Phone Number or Password');
        } else {
            setLoading(true)
            e.preventDefault();
            let obj = {
                phone: phoneNum.current.value,
                password: password.current.value
            }
            console.log(obj);
            let url = API_URL + '/signup'

            axios.post(url, obj).then((res) => {
                setStatusMsg('You have Logged In');
                console.log(res);
                setLoading(false)
                setIsLoggedIn(true)
                bake_cookie('cookie', true);
                setInterval(() => {
                    navigate('/nav/main')
                }, 3000)
            }).catch((err) => {
                setStatusMsg('Not Logged In');
                console.log(err)
                setLoading(false)
            })
            setInterval(() => {
                setStatusMsg('');
            }, 2500)
        }
    }
    return (
        <>
            <div className='container text-center'>
                <h1>Login OR Signup</h1>
                <Link to='/login' className='btn btn-warning btn-outline-dark'>Login</Link>
                <Link to='/signup' className='btn btn-warning btn-outline-dark'>Signup</Link>
            </div>
            <div className='container mt-5 text-center'>
                <h1>SignUp Form</h1>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Phone Number</label>
                    <input ref={phoneNum} type="number" className="w-100 htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3  text-start">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input ref={password} type="password" className="w-100 htmlForm-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" onClick={btnfunc} className="btn btn-primary">{loading ? <BeatLoader style={{ color: "black", position: "relative", top: "2px" }} size="12px" /> : 'Submit'}</button>
                <h2>{statusMsg}</h2>
            </div>
        </>
    )
}

export default Signup