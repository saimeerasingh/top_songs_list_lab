import React,{useState} from "react";

const SongFeedbackForm = ({onCommentSubmit}) => {

    const [text, setText]  = useState("")

    const handleTextChange = (event) => {
        setText(event.taeget.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const textToSubmit = text.trim()
        if(!textToSubmit){
            return
        }

        onCommentSubmit(
            {
                text:textToSubmit
            }
        )
        setText("");
    }


    return(
        <form className = "comment-form" onSubmit={handleFormSubmit}>
            <input
            type = "text"
            placeholder = "Leave your comment"
            value={text}
            onChange= {handleTextChange}
            />
            <input
            type = "submit"
            value = "Post"/>
        </form>
    )
}

export default SongFeedbackForm;