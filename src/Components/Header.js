import React, { Component} from 'react';
import '../styles/Header.css';
import NavBar from './NavBar';

class Header extends Component {
    render(){
        return (
            <div className='Header'>
              <NavBar />
            </div>
        )
    }
}
export default Header;