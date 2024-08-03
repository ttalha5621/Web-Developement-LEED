import React from "react";
import FifthParagraph from "./FifthParagraph";
import FirstParagraph from "./FirstParagraph";
import FourthParagraph from "./FourthParagraph";
import SecondParagraph from "./SecondParagraph";
import SeventhParagraph from "./SeventhParagraph";
import SixthParagraph from "./SixthParagraph";
import ThirdParagraph from "./ThirdParagraph";
const AllParagraphs = (props) => {
    return (
        <>
            <div class="row">
                <FirstParagraph/>
                <SecondParagraph/>
            </div>
            <br />
            <div class="row">
                <ThirdParagraph/>
                <FourthParagraph/>
                <FifthParagraph/>
            </div>
            <br />
            <div class="row">
              <SixthParagraph/>
              <SeventhParagraph/> 
            </div>
        </>
    )
}
export default AllParagraphs;