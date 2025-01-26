import { useState, FormEvent } from 'react';  
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoCubos.png'
import api from '../../services/api';

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   async function handleSubmit(event: FormEvent){
        event.preventDefault()
        try {
            const response = await api.post('/login', {
                email,
                password,
              });
              console.log('Login realizado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    }
    return (
        <div className='container container-sign-in'>
            <div className='sign-in'>
                <img src={Logo} alt="" />
             

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='E-mail' value={ email } onChange={(e)=> setEmail (e.target.value)}/>
                    <input type="password" placeholder='Password' value={ password } onChange={(e)=> setPassword (e.target.value)} />
                    <span>Não tem cadastro?
                        <Link to='/signup'>Clique aqui</Link>
                    </span>
                    <button className='btn-pink'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;

