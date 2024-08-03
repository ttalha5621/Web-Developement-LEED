import React from 'react'
import Footer from '../shared/Footer/Footer';
import ArabicHeaderNav from "../../pages/HeaderPage/ArabicHeaderNav";

const ArabicHome = (props) => {
    const { children } = props;
    console.log("Name", props.name);
    return (<>

        <div className="main-panel ps" id="main-panel">
            {/* <!-- Header Navbar --> */}
            <ArabicHeaderNav name={props.name} />
            {children}
            <Footer />
        </div>
    </>
    );
}

export default ArabicHome;