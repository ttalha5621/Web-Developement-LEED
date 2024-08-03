import React from "react";
import Form from "./InputVariants/Form";
import Title from "../../Title/Title";
const InputVariants = (props) => {
    return (
        <>
            <div class="card ">
            <Title Title="Input Variants" />
                <div class="card-body ">
                    <Form />
                </div>
            </div>
        </>
    );
}

export default InputVariants;