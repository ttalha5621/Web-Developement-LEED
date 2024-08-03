import React, { useState, useEffect } from "react";
import Account from "./Components/Account";
import Address from "./Components/Address";
import CardFooter from "./Components/CardFooter";
import CardHeader from "./Components/CardHeader";
import Content from "./Components/Content";

const Wizard = (props) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(true)
    }, [])
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="col-md-10 mr-auto ml-auto">
                    <div className="wizard-container">
                        <div className={"card card-wizard " + (active ? "active" : "")} data-color="primary" id="wizardProfile">
                            <form action="#" method="">
                                <CardHeader />
                                <div className="card-body">
                                    <div className="tab-content">
                                        <Content />
                                        <Account />
                                        <Address />
                                    </div>
                                </div>
                                <CardFooter />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Wizard;