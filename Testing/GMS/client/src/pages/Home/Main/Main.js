import React, { useState, useEffect } from 'react'
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import Images from "../../../assets/index";

const Main = (props) => {
    const { children } = props;
    const [bgImage, setBgImage] = useState(null);
    const [cssClass, setCssClass] = useState(null);
    const gradientColor = ['rgba(255, 178, 54, 0.6)', 'rgba(24, 206, 15, 0.6)', 'rgba(44, 168, 255, 0.6)', 'rgba(255, 54, 54, 0.6)']
    useEffect(() => {
        if (props.name === "pricing") {
            setBgImage("url(" + Images.Background15 + ")");
            setCssClass("pricing-page");
        }
        else if (props.name === "lock") {
            setBgImage("url(" + Images.Background13 + ") no-repeat");
            setCssClass("lock-page");
        }
        else if (props.name === "invoice") {
            setBgImage("url(" + Images.Background13 + ") no-repeat");
            setCssClass("invoice-page");
        }
        else if (props.name === "login") {
            setBgImage("url(" + Images.Background14 + ") no-repeat");
            setCssClass("login-page");
        }
        else if (props.name === "registration") {
            setBgImage("url(" + Images.Background16 + ") no-repeat");
            setCssClass("register-page");
        }
        console.log("rendered ...", props.name, bgImage, `linear-gradient( 0deg, rgba(44, 44, 44, 0.2), ${gradientColor[Math.floor(Math.random() * 3)]})`)
    }, [props.name]);
    return (
        <>
            <Header name={props.name} />
            <div className="wrapper wrapper-full-page ">
                <div className={"full-page " + cssClass + " section-image"} style={{
                    backgroundColor: `linear-gradient( 0deg, rgba(44, 44, 44, 0.2), ${gradientColor[Math.floor(Math.random() * 3)]})`,
                    backgroundImage: bgImage,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    overflow: 'hidden',

                }} alt="">
                    {children}
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Main;