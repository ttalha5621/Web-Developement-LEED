import React from 'react'

function Header({ headerInfo, cname, children }) {
    // console.log(props.headerInfo)
    return (
        <div>
            <h3>Hello |</h3>
            <div>{children}</div>
            <h1>{headerInfo.phone} | {cname}</h1>
            <div>{children}</div>
        </div>
    )
}

export { Header };