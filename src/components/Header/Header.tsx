import logo from '../../assets/logo.svg'
import { ArrowIcon } from '../GlobalComponents/ArrowIcon'
import { PersonIcon } from '../GlobalComponents/PersonIcon'
import './Header.scss'

export const Header = () => {

    return (
        <div className="Header">
            <img className='Header__logo' src={logo} alt="" />
            <div className="Header__signIn">
                <PersonIcon className='Header__signIn-icon'/>
                <label 
                className='Header__signIn-label' 
                htmlFor="signIn"
                >
                    <button className='Header__signIn-button' id='signIn'>Войти</button>
                    <ArrowIcon id='signIn' />
                </label>
            </div>
        </div>
    )
}