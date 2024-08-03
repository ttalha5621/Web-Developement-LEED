import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    console.log("Header ", props.name);

    return (

        <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <Link className="navbar-brand" to={"/" + props.name}>{props.name} Page</Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navigation">


                    <ul className="navbar-nav">
                        <li className={"nav-item " + (props.name === "dashboard" ? "active" : "")}>
                            <Link to="/" className="nav-link">
                                <i className="now-ui-icons design_app"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className={"nav-item " + (props.name === "registration" ? "active" : "")}>
                            <Link to="/registration" className="nav-link">
                                <i className="now-ui-icons tech_mobile"></i>
                                Register
                            </Link>
                        </li>
                        <li className={"nav-item " + (props.name === "login" ? "active" : "")}>
                            <Link to="/login" className="nav-link">
                                <i className="now-ui-icons users_circle-08"></i>
                                Login
                            </Link>
                        </li>

                        <li className={"nav-item " + (props.name === "pricing" ? "active" : "")}>
                            <Link to="/pricing" className="nav-link">
                                <i className="now-ui-icons now-ui-icons business_money-coins"></i>
                                Pricing
                            </Link>
                        </li>

                        <li className={"nav-item " + (props.name === "lock" ? "active" : "")}>
                            <Link to="/lock" className="nav-link">
                                <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                Lock
                            </Link>
                        </li>
                        <li className={"nav-item " + (props.name === "invoice" ? "active" : "")}>
                            <Link to="/invoice" className="nav-link">
                                <i className="now-ui-icons files_paper"></i>
                                Invoice
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;