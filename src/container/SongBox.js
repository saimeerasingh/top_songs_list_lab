import React, {useState} from "react";
import SongFeedbackForm from "../components/SongFeedbackForm";
import SongsList from "../components/SongsList";

const SongBox = () => {

    const [songs, setSongs] = useState (
        [
            {
                id: 1,
                name: "Olivia Rodrigo - deja vu",
                link: "https://www.youtube.com/watch?v=j2VbR4W_wg4"
            },
            {
                id: 2,
                name: "Ed Sheeran - Bad Habits",
                link: "https://www.youtube.com/watch?v=orJSJGHjBLI"
            },
            {
                id: 3,
                name: "Adele - To Be Loved",
                link: "https://www.youtube.com/watch?v=_dlExeOyFh4"
            },
        ]
    )

    return(
        <>
        <h1>Top Songs 2021!</h1>
        <SongsList songs = {songs}/>
        <SongFeedbackForm/>

        </>
        
    )
}

export default SongBox;