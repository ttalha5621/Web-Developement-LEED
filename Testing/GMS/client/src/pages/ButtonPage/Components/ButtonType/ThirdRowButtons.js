import React from "react";
import Pagination from "./AllButtons/Pagination";
import Button from "./AllButtons/Button";
import Title from "./AllButtons/Title";
const ThirdRowButtons = () => {
    return (
        < div className="row" >
            <div className="col-md-6">
                <Title Title="Pagination" />
                <div className="card-body">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-primary">
                            <Pagination Item="page-item active" Link="page-link" Hash="#" Text="1" />
                            <Pagination Item="page-item" Link="page-link" Hash="#link" Text="2" />
                            <Pagination Item="page-item" Link="page-link" Hash="#link" Text="3" />
                            <Pagination Item="page-item" Link="page-link" Hash="#link" Text="4" />
                            <Pagination Item="page-item" Link="page-link" Hash="#link" Text="5" />
                        </ul>
                        <ul className="pagination">
                            <Pagination Item="page-item" Link="page-link" Hash="#link" Aria="true"
                                Icon="fa fa-angle-double-left" Label="Previous" />
                            <Pagination Item="page-item" Link="page-link" Hash="#" Text="1" />
                            <Pagination Item="page-item active" Link="page-link" Hash="#link" Text="2" />
                            <Pagination Item="page-item" Link="page-link" Hash="#link" Text="3" />
                            <Pagination Item="page-item" Link="page-link" Hash="#link" Aria="true"
                                Icon="fa fa-angle-double-right" Label="Next" />
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="col-md-6">
                <Title Title="Button Group" />
                <div className="card-body">
                    <div className="btn-group">
                        <Button Text="Left" cssClass="btn btn-info" />
                        <Button Text="Middle" cssClass="btn btn-info" />
                        <Button Text="Right" cssClass="btn btn-info" />
                    </div>
                    <br />
                    <br />

                    <div className="btn-group" data-toggle="buttons">
                        <Button Text="1" cssClass="btn btn-round btn-info" />
                        <Button Text="2" cssClass="btn btn-round btn-info" />
                        <Button Text="3" cssClass="btn btn-round btn-info" />
                        <Button Text="4" cssClass="btn btn-round btn-info" />
                    </div>

                    <div className="btn-group">
                        <Button Text="5" cssClass="btn btn-round btn-info" />
                        <Button Text="6" cssClass="btn btn-round btn-info" />
                        <Button Text="7" cssClass="btn btn-round btn-info" />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ThirdRowButtons;