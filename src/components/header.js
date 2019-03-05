import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Navbar = props => {
    return (
        <>
            <div className="flex-container">

            <div className= 'Navbar'>

                <nav className="navbar navbar-expand-lg ">

                    <img width='20' src={require('../assets/image.jpeg')} />

                    <div className="Pursuit">
                        <ol> <a>Pursuit Tube</a> </ol>
                    </div>

                    <div className="navbar ">
                        <Link to='/'>Home</Link>
                        <Link to='/user'>User</Link>
                        <Link to='/feededitor'>Feed Editor</Link>
                    </div>

                    <input className="box" type="search" id="search" placeholder="Search" />

                    <button className='searchButton' type='text' placeholder='Search ...' >Search</button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav">

                        </div>
                    </div>
                </nav>
            </div>
        </div>
      </>
    )
}

export default Navbar;