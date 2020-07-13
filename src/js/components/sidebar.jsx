import React from 'react';
import {Link} from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <div className="sidebar__nav">
                    <ul className="nav__list">
                        <li className="nav-link__item"><Link to={``}>Users</Link></li>
                        <li className="nav-link__item"><Link to={`/keys`}>Keys</Link></li>
                        <li className="nav-link__item"><Link to={`/servers`}>Servers</Link></li>
                    </ul>
                    <div className="nav__logout">
                        <div className="nav-link__item"><Link to={`/logout`}>Log Out</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}