import React, { Component } from 'react';

class ChatSendForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        message: 'Type your message here ...'
    };

    clickHandler = (event) => {
        event.preventDefault();
        this.props.sendChat(this.state.message);
        this.setState({ message: "" });
    }

    changeHandler = (event) => {
        const { value } = event.target;
        this.setState({ message: value });
    }

    render() {
        return <form>
	            <textarea rows="2" cols="60"
	                name="Your Message"
	                value={this.state.message}
	                onChange={this.changeHandler} /> <br />
	            	<button type="submit" onClick={this.clickHandler}>Send</button>
	        </form>
    }
}

export default ChatSendForm;