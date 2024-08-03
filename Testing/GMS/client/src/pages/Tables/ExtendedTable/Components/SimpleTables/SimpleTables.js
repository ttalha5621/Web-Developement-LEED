import React from "react";
import Icons from "./Icons";
const SimpleTables = (props) => {
    return (<tr>
        <td className="text-center">{props.Serial}</td>
        <td>{props.Name}</td>
        <td>{props.Position}</td>
        <td className="text-center">{props.Date}</td>
        <td className="text-right">{props.Salary}</td>
        <Icons Button={props.Button} Icon={props.Icon}
            Button2={props.Button2} Icon2={props.Icon2}
            Button3={props.Button3} Icon3={props.Icon3}
        />
    </tr>
    );
}
export default SimpleTables;
