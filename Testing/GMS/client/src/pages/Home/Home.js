import React from 'react'
import Footer from '../shared/Footer/Footer';
import HeaderPage from "../../pages/HeaderPage/HeaderPage";

const Home = (props) => {
    const { children } = props;
    console.log("Name", props.name);
    return (<>

        <div className="main-panel ps" id="main-panel">
            {/* <!-- Header Navbar --> */}
            <HeaderPage name={props.name} />
            {children}
            <Footer />
        </div>
    </>
    );
}

export default Home;