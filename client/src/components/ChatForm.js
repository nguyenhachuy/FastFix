import React from 'react';

const ChatForm = props => {

    return(
    
        <form onSubmit={props.handleChatMessage} className="chatDialogue">
            <textarea name="textarea" rows="3" cols="50">Write something here</textarea>
            <input type="submit" value="Submit" />
        </form>
    )
};

export default ChatForm;