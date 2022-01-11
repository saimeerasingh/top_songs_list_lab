import React from "react";

const Song = ({name, link}) => {
    return(
        <>
        <a href={link}><li>{name}</li></a>
        </>
    )
}

export default Song;