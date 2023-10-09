import { Link } from 'react-router-dom'

function PageNav(){
    return (
      <ul className="navbar-list-items">
        <li>
          <Link to="/">HOME</Link>
        </li>
      </ul>
    )
}

export default PageNav
