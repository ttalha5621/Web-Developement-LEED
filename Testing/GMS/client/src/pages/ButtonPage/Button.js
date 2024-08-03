import React from "react";
import TitleButton from "./Components/SocialType/TitleButton/SocialTitle";
import BehanceButton from "./Components/SocialType/BehanceButton";
import DribbleButton from "./Components/SocialType/DribbleButton";
import FacebookButton from "./Components/SocialType/FacebookButton";
import GithubButton from "./Components/SocialType/GithubButton";
import GoogleButton from "./Components/SocialType/GoogleButton";
import LinkedinButton from "./Components/SocialType/LinkedinButton";
import PinterestButton from "./Components/SocialType/PinterestButton";
import RedditButton from "./Components/SocialType/RedditButton";
import TumblrButton from "./Components/SocialType/TumblrButton";
import TwitterButton from "./Components/SocialType/TwitterButton";
import FirstRowButtons from "./Components/ButtonType/FirstRowButtons";
import SecondRowButtons from "./Components/ButtonType/SecondRowButtons";
import ThirdRowButtons from "./Components/ButtonType/ThirdRowButtons";
const Button = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="card">
                    {/*\ <Type /> */}
                    <FirstRowButtons />
                    <SecondRowButtons />
                    <ThirdRowButtons />
                    <div className="row">
                        <div className="col-sm-12">
                            <TitleButton Title="Social buttons" />
                            <div className="card-body">
                                <TwitterButton />
                                <FacebookButton />
                                <GoogleButton />
                                <LinkedinButton />
                                <PinterestButton />
                                <TumblrButton />
                                <GithubButton />
                                <BehanceButton />
                                <DribbleButton />
                                <RedditButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div> </>
    )
}
export default Button;