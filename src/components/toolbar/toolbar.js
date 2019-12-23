import React from 'react';
import "./Toolbar.css";
import { useAuthUser } from "../auth/AuthUser";

const Toolbar = props => {
    const { logged, setLogged } = useAuthUser();
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div>
                </div>
                <div className="toolbar_logo"><a href="/home">Zuri's Circle </a></div>
                <div className="spacer" />
                {renderToolBarOptions(props, logged, setLogged)}
            </nav>
        </header>
    );

}

const renderToolBarOptions = (props, logged, setLogged) => {
    if (logged)
        return (
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/home">
                            <button onClick={() => {
                                setLogged(false)
                            }}
                        >
                            Logout
                            </button></a>
                    </li>
                </ul>
            </div>
        ); else
        return (
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="/register">Register</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div>
        );
}

export default Toolbar;