import React from "react";

const StaticControl = (props) => {
    return (
        <>
            <div class="row">
                <label class="col-sm-2 col-form-label">{props.Title}</label>
                <div class="col-sm-10">
                    <div class="form-group">
                        <p class="form-control-static"><a
                            href="#cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="8ae2efe6e6e5cae9f8efebfee3fcefa7fee3e7a4e9e5e7">[email&#160;protected]</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StaticControl;