import React from "react";

const RegisterLoginForm = (props) => {
    return (

        <form id={props.Id} action={props.Action} method="">
            <div className="card ">
                <div className="card-header ">
                    <h4 className="card-title">{props.Title}</h4>
                </div>
                <div className="card-body ">
                    <div className="form-group has-label">
                        <label>
                            {props.Label}
                        </label>
                        <input className="form-control" name={props.Name} type={props.Type} required="true" email={props.Email} />
                    </div>
                    <div className="form-group has-label">
                        <label>
                            {props.Label2}
                        </label>
                        <input className="form-control" name={props.Name2} id={props.Id2}
                            type={props.Type2} required="true" email={props.Email2} />
                    </div>
                    <div className="form-group has-label">
                        <label>
                            {props.Label3}
                        </label>
                        <input className="form-control" name={props.Name3}
                            id={props.Id3} type={props.Type3} required="true"
                            equalTo={props.Equal} />
                    </div>
                    <div className="category form-category">{props.Required}</div>
                </div>
                <div className="card-footer text-right">
                    <div className="form-check pull-left">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="optionCheckboxes"
                                required />
                            <span className="form-check-sign"></span>
                                    Subscribe to newsletter
                                </label>
                    </div>
                    <button type="submit" className="btn btn-primary">{props.Button}</button>
                </div>
            </div>
        </form>
    );
}
export default RegisterLoginForm;