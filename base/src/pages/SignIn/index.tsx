
import { useState, FormEvent } from 'react';
import './style.css';
import { Link, Navigate } from 'react-router-dom';
import Logo from '../../assets/logoCubos.png';
import api from '../../services/api';

import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()

    const { handleGetToken, handleAddToken } = useAuth()

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            const response = await api.post('/login', {
                email: email,
                password: password,
            });

            const { acessToken } = response.data
            handleAddToken(acessToken)
            navigate('/main')

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container container-sign-in">
            <div className="sign-in">
                <img src={Logo} alt="Logo" />

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span>Não tem cadastro?
                        <Link to="/signup"> Clique aqui</Link>
                    </span>
                    <button className="btn-pink">Login</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;



