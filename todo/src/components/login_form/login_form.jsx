import React, { useState } from 'react';
import LoginInput from "../inputs/ login_input/login_input";
import PassInput from "../inputs/pass_input/pass_input";
import { Link } from 'react-router-dom';

import './login_form.css';
import UserService from "../../api/UserService";

function LoginForm({email, setEmail, password, setPassword}) {


    return (
        <div className="login-form-container">
            <LoginInput value={email} onChange={e => setEmail(e.target.value)} />
            <PassInput value={password} onChange={e => setPassword(e.target.value)} />
            <Link to="/registration" className="login-heading">Зарегистрироваться</Link>
        </div>
    );
}

export default LoginForm;