import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import AuthRequired from '../HOC/AuthRequired';
import HomePage from './HomePage'
import Login from './Login';
import SignUp from './SignUp';

const MainRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthRequired>
              <HomePage />
            </AuthRequired>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default MainRoute