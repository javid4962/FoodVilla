import React from 'react'

function Header() {
  return (
    <div className="headerContainer">
        <nav className="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqIuJc5KeM9wC3X1CDPUOoBhDFTBuCrO6Wg&usqp=CAU" alt="FoodVilla Logo" className="logo-item" />
            <ul className="nav-items">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/">About</a></li>
                <li className="nav-item"><a href="/">Services</a></li>
                <li className="nav-item"><a href="/">Contact us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header