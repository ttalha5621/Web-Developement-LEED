import React, { useState, useEffect } from "react";

const FixedPlugIn = (props) => {

    const [checked, setChecked] = useState(false);
    const [dropdown, setDropdown] = useState("dropdown show-dropdown")
    useEffect(() => {
        if (checked) {
            props.handelSidebar("sidebar-mini")
        } else {
            props.handelSidebar("")
        }
    }, [checked]);


    let handleClick = () => {
        if (dropdown === "dropdown") {
            setDropdown("dropdown show-dropdown show");
        } else {
            setDropdown("dropdown");
        }
    }

    return (
        <div className="fixed-plugin">
            <div className={dropdown}>
                <div onClick={handleClick}>
                    <i className="fa fa-cog fa-2x"> </i>
                </div>
                <ul className="dropdown-menu show">
                    <li className="header-title">Sidebar Background</li>
                    <li className="adjustments-line">
                        <div className="badge-colors text-center">
                            <span className={
                                props.bgColor === "yellow"
                                    ? "badge filter badge-yellow active"
                                    : "badge filter badge-yellow"
                            }
                                data-color="yellow"
                                onClick={() => {
                                    return props.handelColor("yellow");
                                }}>
                            </span>

                            <span className={
                                props.bgColor === "blue"
                                    ? "badge filter badge-blue active"
                                    : "badge filter badge-blue"
                            }
                                data-color="blue"
                                onClick={() => {
                                    return props.handelColor("blue");
                                }}>
                            </span>

                            <span className={
                                props.bgColor === "green"
                                    ? "badge filter badge-green active"
                                    : "badge filter badge-green"
                            }
                                data-color="green"
                                onClick={() => {
                                    return props.handelColor("green");
                                }}>
                            </span>

                            <span className={
                                props.bgColor === "orange"
                                    ? "badge filter badge-orange active"
                                    : "badge filter badge-orange"
                            }
                                data-color="orange"
                                onClick={() => {
                                    return props.handelColor("orange");
                                }}>
                            </span>

                            <span className={
                                props.bgColor === "red"
                                    ? "badge filter badge-red active"
                                    : "badge filter badge-red"
                            }
                                data-color="red"
                                onClick={() => {
                                    return props.handelColor("red");
                                }}>
                            </span>
                        </div>

                    </li>

                    <li className="header-title">Sidebar Mini</li>
                    <li className="adjustments-line">
                        <div className="togglebutton switch-sidebar-mini">
                            <span className="label-switch">OFF</span>
                            <div className={"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate " + (checked ? "bootstrap-switch-on" : "bootstrap-switch-off bootstrap-switch-focused")}>
                                <div className="bootstrap-switch-container" onClick={() => {
                                    setChecked((prevState) => {
                                        return !prevState
                                    })
                                }}>
                                    <span className="bootstrap-switch-handle-on bootstrap-switch-primary"></span>
                                    <span className="bootstrap-switch-label" ></span>
                                    <span className="bootstrap-switch-handle-off bootstrap-switch-default" ></span>

                                </div>
                            </div>
                            <span className="label-switch label-right">ON</span>
                        </div>
                    </li>

                    <li className="button-container">
                        <a href="#product/now-ui-dashboard-pro" target="_blank" className="btn btn-primary btn-block btn-round">Buy Now</a>
                        <a href="#" target="_blank" className="btn btn-default btn-block btn-round">
                            <i className="now-ui-icons files_single-copy-04"></i>
                            Documentation</a>

                        <a href="#product/now-ui-dashboard" target="_blank" className="btn btn-info btn-block btn-round">
                            <i className="now-ui-icons files_single-copy-04"></i>
                            Get Free Demo!</a>
                    </li>

                    <li className="header-title">Thank you for 95 shares!</li>

                    <li className="button-container text-center">
                        <button id="twitter" className="btn btn-round btn-info">
                            <i className="fab fa-twitter"></i> &middot; 45
                        </button>
                        <button id="facebook" className="btn btn-round btn-info">
                            <i className="fab fa-facebook-f"></i> &middot; 50
                        </button>
                        <br />
                        <br />
                        <a className="github-button" href="https://github.com/CapregSoft" data-icon="octicon-star" data-size="large"
                            data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FixedPlugIn;