import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex align-items-center">
                <h1 className="navbar-brand">Knowledge Cafe</h1>
                <div className="d-flex align-items-center" role="search">
                    <img className="me-2 img-style" src='https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?w=740&t=st=1680192774~exp=1680193374~hmac=9eb3115d46d82f3edc2fc7a904474e37052dce0bf084c432976b87779e95b444' alt='' />

                </div>
            </div>
        </nav>
    );
};

export default Header;