import React from 'react';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.menuClick = this.menuClick.bind(this)
        this.state = {className: false}
    }

    menuClick () {

        this.setState(prevState => ({
            className: !prevState.className
        }))
    }

    render() {

        return (
            <>
                <ul className={this.state.className ? 'menu active':'menu'}>
                    <li className="menu-item"><a href={"#main"}>Главная</a></li>
                    <li className="menu-item"><a href={"#"}>Обо мне</a></li>
                    <li className="menu-item"><a href={"#"}>Навыки</a></li>
                    <li className="menu-item"><a href={"#"}>Мои работы</a></li>
                    <li className="menu-item"><a href={"#"}>Контакты</a></li>
                </ul>
                <button
                    onClick={this.menuClick}
                    className={this.state.className ? 'menu__btn active':'menu__btn'}>
                    <span></span>
                </button>
            </>
        )
    }
}

export default Menu;