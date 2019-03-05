import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Navbar = props => {
    return (
        <>
            <div class="flex-container">

                <nav class="navbar navbar-expand-lg ">

                    <img width='20' src={require('../assets/image.jpeg')} />

                    <div class="Pursuit">
                        <ol> <a>Pursuit Tube</a> </ol>
                    </div>

                    <div class="navbar ">
                        <Link to='/'>Home</Link>
                        <Link to='/user'>User</Link>
                        <Link to='/feededitor'>Feed Editor</Link>
                    </div>

                    <input class="box" type="search" id="search" placeholder="Search" />

                    <button className='searchButton' type='text' placeholder='Search ...' >Search</button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div class="navbar-nav">

                        </div>
                    </div>
                </nav>
            </div>
        </div>
      </>
    )
}

export default Navbar;