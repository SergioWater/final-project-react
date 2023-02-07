import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href="#" className="logo__label">Movies</a>
                <ul className="nav__links">
                    <li className="nav__list">
                    <a href="" className="nav__link">Home</a>

                    </li>
                    <li className="nav__list">
                    <a href="" className="nav__link">Find your movie</a>

                    </li>
                    <li className="nav__list">
                    <span href="" className="nav__link no-cursor">Contact</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
