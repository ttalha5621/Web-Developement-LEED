import React from "react";
import Grids from "./AllGrids/Grids";
import MixedGrid from "./AllGrids/MixedGrid";
import OffSetGrid from "./AllGrids/OffSetGrid";
const AllGrids = (props) => {
    return (
        <>
            <Grids GridTitle="XS Grid" GridSize="col-4" Gridtitle=" Always Horizontal" GridText="col-4" />
            <Grids GridTitle="SM Grid" GridSize="col-sm-4" Gridtitle=" Collapsed at 576px" GridText="col-sm-4" />
            <Grids GridTitle="MD Grid" GridSize="col-md-4" Gridtitle=" Collapsed at 768px" GridText="col-md-4" />
            <Grids GridTitle="LG Grid" GridSize="col-lg-4" Gridtitle=" Collapsed at 992px" GridText="col-lg-4" />
            <Grids GridTitle="XL Grid" GridSize="col-xl-4" Gridtitle=" Collapsed at 1200px" GridText="col-xl-4" />
            <MixedGrid GridTitle="Mixed Grid" GridSize="col-sm-6 col-lg-3" Gridtitle=" Showing different sizes on different screens" GridText="col-sm-6 col-lg-3" />
            <OffSetGrid />
        </>
    )
}
export default AllGrids;