import React from 'react'
//import  HeaderPage  from '../../HeaderPage/HeaderPage';
import HeaderNav from "../../HeaderPage/HeaderNav";
const Header = (props) => {
    return (
        <HeaderNav name={props.name} />
    )
}

export default Header;