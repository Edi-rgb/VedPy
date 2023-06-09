import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav>
      <ul>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
        <li>
          <Link to="/demoapp">Demo App</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar;
