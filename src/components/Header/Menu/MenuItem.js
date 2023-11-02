import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubMenuOpen: false,
        };
    }

    toggleSubMenu = () => {
        this.setState((prevState) => ({
            isSubMenuOpen: !prevState.isSubMenuOpen,
        }));
    };

    render() {
        return (
            <>
                <li
                    key={this.props.keyElement}
                    className={`${this.props.className ? ` ${this.props.className} menu__item` : 'menu__item'}`}
                    onMouseEnter={this.props.subMenuOpen === true ? this.toggleSubMenu : null}
                >
                    <a href={`#${this.props.href}`} className={'menu__link'}>{this.props.content} </a>
                </li>
                {this.state.isSubMenuOpen && (
                    <ul className="submenu">
                        <li>Submenu Item 1</li>
                        <li>Submenu Item 2</li>
                        <li>Submenu Item 3</li>
                    </ul>
                )}
            </>

        )
    }
}

MenuItem.propTypes = {
    className: PropTypes.string,
    keyElement: PropTypes.number,
    content: PropTypes.string,
    href: PropTypes.string

}

export default MenuItem
