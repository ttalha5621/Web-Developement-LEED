import React from "react";

const MessageCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="statistics">
                <div className="info">
                    <div className="icon icon-primary">
                        <i className="fas fa-comment"></i>
                    </div>
                    <h3 className="info-title">859</h3>
                    <h6 className="stats-title">Messages</h6>
                </div>
            </div>
        </div>
    );
}

export default MessageCard;