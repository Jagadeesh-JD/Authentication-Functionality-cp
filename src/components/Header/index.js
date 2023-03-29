import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-menu">
    <ul>
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)
export default Header
