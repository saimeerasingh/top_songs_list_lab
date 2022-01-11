import React from "react";

const Song = ({name, link}) => {
    return(
        <>
        <h4>{name}</h4>
        <h4>{link}</h4>
        </>
    )
}

export default Song;