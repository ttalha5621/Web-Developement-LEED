import React from "react";
import SubcategoriesButtons from "./PageSubcategories/SubcategoriesButtons";
import SubcategoriesContents from "./PageSubcategories/SubcategoriesContents";
import Title from "./Title/Title";
const PageSubcategories = (props) => {
    return (
        <div className="col-md-8 ml-auto mr-auto">

            <div className="card card-plain card-subcategories">
                <Title Title="Page Subcategories" Card="card-title text-center" />
                <div className="card-body ">
                    <SubcategoriesButtons />
                    <SubcategoriesContents />
                </div>
            </div>
        </div>
    )
}
export default PageSubcategories;
