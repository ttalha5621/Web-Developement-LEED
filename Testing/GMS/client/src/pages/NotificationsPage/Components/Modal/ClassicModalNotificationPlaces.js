import React from "react";
import ClassicModalNotification from "./SubModal/ClassicModalNotification";
import Button from "../../../ButtonPage/Components/ButtonType/AllButtons/Button";
const ClassicModalNotificationPlaces = (props) => {
    return (
        <>
            <Button Color={props.Button} Modal={props.Modal} Data={props.Data} Text={props.Text} />

            <div className={props.Alert} id={props.Id} tabindex="-1" role="dialog"
                aria-labelledby="myModalLabel" aria-hidden="true">
                <ClassicModalNotification Title="MODAL TITLE"
                    Paragraph="Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth."
                    Button="Nice Button" CloseButton="Close" Alert="btn btn-default"
                    DangerAlert="btn btn-danger" Icon="fas fa-times" />
            </div>   </>
    )
}
export default ClassicModalNotificationPlaces;





