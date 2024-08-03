import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/About-us"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/Services"}>Services</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
