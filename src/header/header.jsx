import React from 'react';
import Menu from "../menu/menu";

export function Header() {

    return (
        <header className="header">
            <div className="container">
                <nav className="header__menu">
                    <Menu/>
                </nav>
            </div>
        </header>
    );
}

export default Header;