import React from "react";

const Song = ({name, link}) => {
    return(
        <>
        <a href={link}><h3>{name}</h3></a>
        </>
    )
}

export default Song;