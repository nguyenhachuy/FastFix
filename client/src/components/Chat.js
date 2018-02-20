import React from 'react';
import ChatForm from './ChatForm';
import ChatSendForm from './ChatSendForm';

class Chat extends React.Component {

    state = {
        user: '',
        provider: ''
    }

    _handleChatMessage = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });          
    };


    render() {

        return(
            <div>
                <h5>FastFix Chat</h5>
                <p>Chatting with: INSERT DYNAMIC DATA</p>
                <hr />
                <ChatForm 
                handleChatMessage={this._handleChatMessage}
                />

            </div>
        );
    }

};

export default Chat;