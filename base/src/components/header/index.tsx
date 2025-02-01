import './style.css'
import Logo from '../../assets/logoCubos.png'
import arrowBack from '../../assets/arrowBack.png'
import { useNavigate } from 'react-router-dom'

type Props ={
    showBack?: boolean
}

function Header({showBack}:Props){
    const navigate = useNavigate()

    return(
        <header>
            {showBack && 
            <img src={arrowBack} 
            alt="arrow-back" 
            className='arrow-back'
            onClick={() => navigate(-1)} />
            }
            
            <img src={Logo} alt="logo" />
        </header>
    )
}
export default Header