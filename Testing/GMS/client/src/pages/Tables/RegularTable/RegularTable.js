import React from "react";
import SimpleTable from "./Components/SimpleTable";
const RegularTable = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="row">
                    <SimpleTable Name="Name" Country="Country" City="City" Salary="Salary"
                        Name1="Dakota Rice" Country1="Niger" City1="ud-Turnhout" Salary1="$36,738"
                        Name2="Minerva Hooper" Country2="Curaçao" City2="Sinaai-Waas" Salary2="$23,789"
                        Name3="Sage" Country3="Netherlands" City3="Baile" Salary3="$56,142"
                        Name4="Philip" Country4="Korea" City4="Overland" Salary4="$38,735"
                        Name5="Doris" Country5="Malawi" City5="Feldkirchen" Salary5="$63,542"
                        Name6="Mason" Country6="Chile" City6="Gloucester" Salary6="$78,615"
                        Name7="Jon Porter" Country7="Portugal" City7="Gloucester" Salary7="$98,615"
                        Card="card" Title="Simple Table" Body="card-body" />
                    <SimpleTable Name="Name" Country="Country" City="City" Salary="Salary"
                        Name1="Dakota Rice" Country1="Niger" City1="ud-Turnhout" Salary1="$36,738"
                        Name2="Minerva Hooper" Country2="Curaçao" City2="Sinaai-Waas" Salary2="$23,789"
                        Name3="Sage" Country3="Netherlands" City3="Baile" Salary3="$56,142"
                        Name4="Philip" Country4="Korea" City4="Overland" Salary4="$38,735"
                        Name5="Doris" Country5="Malawi" City5="Feldkirchen" Salary5="$63,542"
                        Name6="Mason" Country6="Chile" City6="Gloucester" Salary6="$78,615"
                        Name7="Jon Porter" Country7="Portugal" City7="Gloucester" Salary7="$98,615"
                        Card="card card-plain" Title="Table on Plain Background" Body="card-body"
                        Paragraph="Here is a subtitle for this table" />
                    <SimpleTable Name="Name" Country="Country" City="City" Salary="Salary"
                        Name1="Dakota Rice" Country1="Niger" City1="ud-Turnhout" Salary1="$36,738" Color1="table-success"
                        Name2="Minerva Hooper" Country2="Curaçao" City2="Sinaai-Waas" Salary2="$23,789"
                        Name3="Sage" Country3="Netherlands" City3="Baile" Salary3="$56,142" Color3="table-info"
                        Name4="Philip" Country4="Korea" City4="Overland" Salary4="$38,735"
                        Name5="Doris" Country5="Malawi" City5="Feldkirchen" Salary5="$63,542" Color5="table-warning"
                        Name6="Mason" Country6="Chile" City6="Gloucester" Salary6="$78,615"
                        Name7="Jon Porter" Country7="Portugal" City7="Gloucester" Salary7="$98,615" Color7="table-danger"
                        Card="card" Title="Regular Table with Colors" Body="card-body table-full-width" />
                </div>
            </div>
        </>
    );
}

export default RegularTable;