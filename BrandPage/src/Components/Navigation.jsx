import React from 'react'

const Navigation=()=>{
    return(
      <div className='container'>
        <nav>
          <div className="logo">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-700x394.png" alt="img ?" />
          </div>
          <div>
          <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
          </div>
          <div className='logInbtn'>
          <button>LogIn</button>
          </div>
        </nav>
      </div>
    );
};

export default Navigation;
