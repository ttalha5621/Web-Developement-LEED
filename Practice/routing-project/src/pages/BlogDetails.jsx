import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../common/Header";
import { blogs } from "../Data/Blogs";

export default function BlogDetails() {
    let uselocation = useLocation();
    let currentid = uselocation.pathname.split('/')[2]
    let currentData = blogs.filter((v) => v.id == currentid)[0]
    console.log(currentData)
    return (
        <>
        <Header />
        <h1>{currentData.title}</h1>
        </>
)
}
