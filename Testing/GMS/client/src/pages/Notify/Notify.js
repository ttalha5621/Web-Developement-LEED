import React, { useState, useEffect } from 'react';
import {
    useSpring, useTransition, animated, config,
} from 'react-spring';
import './Notify.scss'

const Notify = (props) => {


    const showProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 500, duration: 1000 }
    });

    const hideProps = useSpring({
        from: { opacity: 1 },
        to: { opacity: 0 },
        config: { delay: 500 }
    });
    const [styleprops, setStyleProps] = useState(hideProps);

    useEffect(() => {
        if (props.sidebar != "") {

            setStyleProps(showProps);
        } else {
            setStyleProps(hideProps);
        }
    }, [props.sidebar])



    return (
        <>
            <animated.div style={styleprops} data-notify="container" class="col-lg-4 col-12 col-sm-7 col-md-6 alert alert-info alert-with-icon animated_div" role="alert">
                <button type="button" aria-hidden="true" class="close" data-notify="dismiss">
                    <i class="fas fa-times"></i>
                </button>
                <span data-notify="icon" class="now-ui-icons ui-1_bell-53"></span>
                <span data-notify="title"> </span>
                <span data-notify="message">Sidebar mini deactivated...</span>

                <a href="{3}" target="{4}" data-notify="url"></a>
            </animated.div>

        </>

    );
}

export default Notify;