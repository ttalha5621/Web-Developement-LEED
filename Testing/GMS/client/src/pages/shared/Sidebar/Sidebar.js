import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../../assets/index';
import PerfectScrollbar from "perfect-scrollbar";

const Sidebar = (props) => {
    var ps;
    const sidebar = useRef(null);

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (checked) {
            props.handelSidebar("sidebar-mini")
        } else {
            props.handelSidebar("")
        }
    }, [checked])

    useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(sidebar.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
        }
        return () => {
            ps.destroy();
        }
    }, [sidebar]);
    return (
        <div className="sidebar" data-color={props.sidebar_color} >
            <div className="logo">
                <a href="#" className="simple-text logo-mini">CG</a>

                <Link to="/" className="simple-text logo-normal">CapregSoft</Link>

                <div className="navbar-minimize">
                    <button id="minimizeSidebar" className="btn btn-outline-white btn-icon btn-round" onClick={() => {
                        setChecked((prevState) => {
                            return !prevState
                        })
                    }}>
                        <i className="now-ui-icons text_align-center visible-on-sidebar-regular"></i>
                        <i className="now-ui-icons design_bullet-list-67 visible-on-sidebar-mini"></i>
                    </button>
                </div>
            </div>

            <div className="sidebar-wrapper"
                ref={sidebar}
            >
                <div className="user">
                    <div className="photo">
                        <img src={Images.James} alt="..." />
                    </div>
                    <div className="info">
                        <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                            <span>
                                James Amos
                <b className="caret"></b>
                            </span>
                        </a>
                        {/* <div className="clearfix"></div> */}
                        <div className="collapse" id="collapseExample">
                            <ul className="nav">
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">MP</span>
                                        <span className="sidebar-normal">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">EP</span>
                                        <span className="sidebar-normal">Edit Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">S</span>
                                        <span className="sidebar-normal">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className="nav">
                    <li className="active">
                        <Link to="/">
                            <i className="fas fa-home"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#pagesExamples">
                            <i className="fas fa-image"></i>

                            <p>Pages <b className="caret"></b></p>
                        </a>

                        <div className="collapse" id="pagesExamples">
                            <ul className="nav">
                                <li>
                                    <Link to="/pricing">
                                        <span className="sidebar-mini-icon">P</span>
                                        <span className="sidebar-normal"> Pricing </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/arabic">
                                        <span className="sidebar-mini-icon">RS</span>
                                        <span className="sidebar-normal"> RTL Support </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/invoice">
                                        <span className="sidebar-mini-icon">I</span>
                                        <span className="sidebar-normal"> Invoice </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/timeline">
                                        <span className="sidebar-mini-icon">T</span>
                                        <span className="sidebar-normal"> Timeline </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/login">
                                        <span className="sidebar-mini-icon">L</span>
                                        <span className="sidebar-normal"> Login </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/registration">
                                        <span className="sidebar-mini-icon">R</span>
                                        <span className="sidebar-normal"> Register </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/lock">
                                        <span className="sidebar-mini-icon">LS</span>
                                        <span className="sidebar-normal"> Lock Screen </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/profile">
                                        <span className="sidebar-mini-icon">UP</span>
                                        <span className="sidebar-normal"> User Profile </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#componentsExamples">
                            <i className="fab fa-react"></i>

                            <p>Components <b className="caret"></b></p>
                        </a>

                        <div className="collapse" id="componentsExamples">
                            <ul className="nav">
                                <li>
                                    <Link to="/buttons">
                                        <span className="sidebar-mini-icon">B</span>
                                        <span className="sidebar-normal"> Buttons </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/grids">
                                        <span className="sidebar-mini-icon">G</span>
                                        <span className="sidebar-normal"> Grid System </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/panels">
                                        <span className="sidebar-mini-icon">P</span>
                                        <span className="sidebar-normal"> Panels </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/alerts">
                                        <span className="sidebar-mini-icon">SA</span>
                                        <span className="sidebar-normal"> Sweet Alert </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/notification">
                                        <span className="sidebar-mini-icon">N</span>
                                        <span className="sidebar-normal"> Notifications </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/icons">
                                        <span className="sidebar-mini-icon">I</span>
                                        <span className="sidebar-normal"> Icons </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/typography">
                                        <span className="sidebar-mini-icon">T</span>
                                        <span className="sidebar-normal"> Typography </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#formsExamples">
                            <i className="fab fa-wpforms"></i>
                            <p>Forms <b className="caret"></b></p>
                        </a>

                        <div className="collapse" id="formsExamples">
                            <ul className="nav">
                                <li>
                                    <Link to="/regular-form">
                                        <span className="sidebar-mini-icon">RF</span>
                                        <span className="sidebar-normal"> Regular Forms </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/extended-form">
                                        <span className="sidebar-mini-icon">EF</span>
                                        <span className="sidebar-normal"> Extended Forms </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/validation-form">
                                        <span className="sidebar-mini-icon">V</span>
                                        <span className="sidebar-normal"> Validation Forms </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/wizards">
                                        <span className="sidebar-mini-icon">W</span>
                                        <span className="sidebar-normal"> Wizard </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#tablesExamples">
                            <i className="fas fa-table "></i>
                            <p>Tables <b className="caret"></b></p>
                        </a>

                        <div className="collapse" id="tablesExamples">
                            <ul className="nav">
                                <li>
                                    <Link to="/regular-table">
                                        <span className="sidebar-mini-icon">RT</span>
                                        <span className="sidebar-normal"> Regular Tables </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/extended-table">
                                        <span className="sidebar-mini-icon">ET</span>
                                        <span className="sidebar-normal"> Extended Tables </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/data-table">
                                        <span className="sidebar-mini-icon">DT</span>
                                        <span className="sidebar-normal"> DataTables.net </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a data-toggle="collapse" href="#mapsExamples">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Maps <b className="caret"></b></p>
                        </a>

                        <div className="collapse" id="mapsExamples">
                            <ul className="nav">
                                <li>
                                    <Link to="/google-map">
                                        <span className="sidebar-mini-icon">GM</span>
                                        <span className="sidebar-normal"> Google Maps </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/full-screen-map">
                                        <span className="sidebar-mini-icon">FM</span>
                                        <span className="sidebar-normal"> Full Screen Map </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/vector-map">
                                        <span className="sidebar-mini-icon">VM</span>
                                        <span className="sidebar-normal"> Vector Map </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link to="/widgets">
                            <i className="fas fa-gem"></i>
                            <p>Widgets</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/charts">
                            <i className="fas fa-chart-pie"></i>
                            <p>Charts</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/calendar">
                            <i className="fas fa-calendar-alt"></i>
                            <p>Calendar</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Sidebar; 
