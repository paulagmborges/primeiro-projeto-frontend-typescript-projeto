import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import '../../styles/buttons.css'

function SignIn() {
    return (
        <div className='container container-sign-in'>
            <div className='sign-in'>
                <h1>SignIn</h1>
                <img src="../../assets/logo" alt="" />
                <form action="">
                    <input type="text" placeholder='E-mail' />
                    <input type="password" placeholder='password' />
                    <span>Não tem cadastro? 
                        <Link to='siginup'>clique aqui</Link> 
                    </span>
                    <button className='btn-pink'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
