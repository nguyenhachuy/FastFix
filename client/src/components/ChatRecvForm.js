import React, { Component } from 'react';

class ChatRecvForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        message: this.props.newMessage
    };

    changeHandler = (event) => {
        const { value } = this.state.message + "\n" + this.props.newMessage;
        this.setState({ message: value });
    }

    render() {
        return <form>
                <input
                    type="text"
                    name="Received Message"
                    value={this.state.message}
                    onChange={this.changeHandler} />
            </form>
    }
}

export default ChatRecvForm;
