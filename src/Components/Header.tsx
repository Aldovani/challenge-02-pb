import logo from '../assets/logo.svg';
import user from '../assets/user.png';

const Header = () => {
  return (
    <div>
        <img src={logo} alt="Exemplo" />
        <div>
        <ul>
        <li>Home </li>
        <li>Register </li>
        <li>Products </li>
        <li>About us </li>
      </ul>
        </div>
      <img src={user} alt="Exemplo" />
    </div>
  )
}

export default Header
