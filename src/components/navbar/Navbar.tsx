import './Navbar.css'
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
    <div className="navbar">
        <div className="netflix-logo">NETFLIX</div>
  <ul>
    <li>Tv Shows</li>
    <li>Movies</li>
    <li>Recently Added</li>
    <li>My List</li>
  </ul>
</div>
<div className="icon"><IoSearchSharp /></div>
</nav>
  )
}

export default Navbar
