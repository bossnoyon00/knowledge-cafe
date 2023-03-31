import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Knowledge Library</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item text-success-subtle">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item text-success-subtle">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item text-success-subtle">
                            <a className="nav-link" href="#">Blog</a>
                        </li>

                        <li className="nav-item text-success-subtle">
                            <a className="nav-link">Notification</a>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <img className="me-2 img-style" src='https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?w=740&t=st=1680192774~exp=1680193374~hmac=9eb3115d46d82f3edc2fc7a904474e37052dce0bf084c432976b87779e95b444' alt='' />
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Header;