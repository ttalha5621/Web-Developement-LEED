import React from 'react'
// import Header from '../../../pages/Teacher/shared/Header';
// import Footer from '../../../pages/shared/Footer/Footer';

const Teacher = (props) => {
    const { children } = props;
    return (
        <>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </>
    );
}

export default Teacher;