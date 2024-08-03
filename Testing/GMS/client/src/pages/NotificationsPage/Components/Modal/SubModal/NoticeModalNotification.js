import React from "react";
const NoticeModalNotification = (props) => {
    return (
        <div className="modal-dialog modal-notice">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal"
                        aria-hidden="true">
                        <i className={props.Icon}></i>
                    </button>
                    <h5 className="modal-title" id="myModalLabel">{props.Text}</h5>
                </div>
                <div className="modal-body">
                    <div className="instruction">
                        <div className="row">
                            <div className="col-md-8">
                                <strong>{props.Heading}</strong>
                                <p className="description">{props.Description}<a
                                        href="https://www.capregsoft.com/">{props.Link} </a>.
                                        {props.Para}</p>
                            </div>
                            <div className="col-md-4">
                                <div className="picture">
                                    <img src="../../assets/img/bg1.jpg"
                                        alt="Thumbnail Image"
                                        className="rounded img-raised" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="instruction">
                        <div className="row">
                            <div className="col-md-8">
                                <strong>2. Apply</strong>
                                <p className="description">The first step is to create
                an account at <a
                                        href="https://www.capregsoft.com/">CapregSoft                                                                            </a>. You can choose a social network or
                go for the classNameic version, whatever works best
                for you.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="picture">
                                    <img src="../../assets/img/bg3.jpg"
                                        alt="Thumbnail Image"
                                        className="rounded img-raised" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <p>If you have more questions, don't hesitate to contact us or
    send us a tweet @creativetim. We're here to help!</p>
                </div>
                <div className="modal-footer justify-content-center">
                    <button type="button" className="btn btn-info btn-round"
                        data-dismiss="modal">Sounds good!</button>
                </div>
            </div>
        </div>
    )
}
export default NoticeModalNotification;
