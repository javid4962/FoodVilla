import React from 'react'

function Body() {
  return (
    <div className="bodyContainer">
      <div className="search-bar">
        <input type="text" className="search-input" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurantContainer">
        <div className="restaurant-items">
          <div className="restaurant-item">
            <img src="" alt="" className="restaurant-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body