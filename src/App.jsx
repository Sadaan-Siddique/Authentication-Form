import React from 'react'
import Nav from './comppnents/Nav';
import Main from './comppnents/Main';
import Login from './comppnents/Login';
import SignUp from './comppnents/SignUp';
import { Routes, Route } from 'react-router-dom';
import Start from './comppnents/Start';
import useAuth from './hooks/authHook';
import PermissionDenied from './comppnents/PermissionDenied';
function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      {/* <Start /> */}
      <Routes>
        <Route path={'/'} element={<Start />} />
        <Route path={'signup'} element={<SignUp />} />
        <Route path={'login'} element={<Login />} />

        <Route path={'nav'} element={isLoggedIn ? <Nav /> : <PermissionDenied/>}>
          <Route path={'main'} element={<Main />} />
        </Route>

        <Route path="*" element={<div className='text-center mt-5'><h1>Invalid URL </h1><h3>404 Page not found</h3></div>} />
      </Routes>
    </div >
  );
}

export default App;
