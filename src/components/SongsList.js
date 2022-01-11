import React from "react";
import Song from './Song';

const SongsList = ({songs}) => {

    const songNodes = songs.map(
        song => {
            return(
                <Song name ={song.name} key ={song.id} link = {song.link}></Song>
            )
        }
    )

    return(
        <>
        <div>
       {songNodes}
       </div>
       </>
    )
}

export default SongsList;