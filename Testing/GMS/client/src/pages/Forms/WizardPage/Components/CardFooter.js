import React from "react";

const CardFooter = (props) => {
    return (
        <div className="card-footer">
            <div className="pull-right">
                <input type='button' className='btn btn-next btn-fill btn-rose btn-wd' name='next'
                    value='Next' />
                <input type='button' className='btn btn-finish btn-fill btn-rose btn-wd'
                    name='finish' value='Finish' />
            </div>

            <div className="pull-left">
                <input type='button' className='btn btn-previous btn-fill btn-default btn-wd'
                    name='previous' value='Previous' />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default CardFooter;