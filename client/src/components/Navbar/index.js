import React from 'react'
import { Link } from 'react-router-dom'
import User from '../../utils/User'
import './style.css'
function Navbar() {

  const LogOut = () => {
    User()?.logOut();
    window.location.reload()
  }
  // console.log(User())
  return (
    User() &&
    <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar_brand" to="/">BRIBEBANE</Link>
          <Link className='navbar_links' to="/about">About Project</Link>
          <Link className='navbar_links' to="/news">News</Link>
          <Link className='navbar_links' to="/marketplace">Explore</Link>
          <Link>
            <i className='fa fa-user'></i>
            <span className='mx-1'>{User().user?.username}</span>
          </Link>
          <button className='navbar_links btn btn_small_brand' onClick={() => LogOut()}>Logout</button>
    </nav>
  )
}

export default Navbar