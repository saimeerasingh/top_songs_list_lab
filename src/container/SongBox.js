import React, {useState} from "react";
import SongsList from "../components/SongsList";

const SongBox = () => {

    const [songs, setSongs] = useState (
        [
            {
                id: 1,
                name: "Olivia Rodrigo - deja vu",
                url: "https://www.youtube.com/watch?v=j2VbR4W_wg4"
            },
            {
                id: 2,
                name: "Ed Sheeran - Bad Habits",
                url: "https://www.youtube.com/watch?v=orJSJGHjBLI"
            },
            {
                id: 3,
                name: "Adele - To Be Loved",
                url: "https://www.youtube.com/watch?v=_dlExeOyFh4"
            },
        ]
    )

    return(
        <>
        <h1>Top Songs 2021!</h1>
        <SongsList songs = {songs}/>

        </>
        
    )
}

export default SongBox;