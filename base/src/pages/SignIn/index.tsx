
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoCubos.png'


function SignIn() {
    return (
        <div className='container container-sign-in'>
            <div className='sign-in'>
                <img src={Logo} alt="" />
             

                <form>
                    <input type="text" placeholder='E-mail'/>
                    <input type="password" placeholder='Password' />
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

