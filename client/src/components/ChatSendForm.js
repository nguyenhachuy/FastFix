import React, { Component } from 'react';

class ChatSendForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        message: ''
    };

    clickHandler = (event) => {
        event.preventDefault();
        this.props.sendChat(this.state.message);
    }

    changeHandler = (event) => {
        const { value } = event.target;
        this.setState({ message: value });
    }

    render() {
        return <form>
	            <input
	                type="text"
	                name="Your Message"
	                value={this.state.message}
	                onChange={this.changeHandler} />
	            	<button onClick={this.clickHandler}> Submit </button>
	        </form>
    }
}

export default ChatSendForm;