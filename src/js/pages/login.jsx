import React from 'react';
import Input from '../components/input';
import Button from '../components/button';
import { Checkbox } from '@material-ui/core';

export default function Login() {
  return(
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="loginContainer__title">FOXRADAR</h1>
        <div className="loginContainer__content">
          <Input className="input_dark input_large" placeholder="Email"/>
          <Input type="password" className="input_dark input_large" placeholder="Password"/>
          <div className="loginContainer__checkbox"><Checkbox />Remember me</div>
          <Button className="button_red button_large" title="Login" />
        </div>
      </div>
    </div>
  )
}