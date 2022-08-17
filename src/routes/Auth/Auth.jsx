import React from 'react'
import Button from '../../components/button/Button';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './auth.scss'

export default function Auth() {



  return (
    <div className='authContainer'>
        <h1>Authentication</h1>
        <SignIn />
        <SignUp />
    </div>
  )
}
