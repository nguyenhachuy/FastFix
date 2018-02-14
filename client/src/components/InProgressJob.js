import React from 'react';
import AvailableJob from './AvailableJob';
import ProviderInfo from './ProviderInfo';
import UserInfo from './UserInfo';
import ChatSendForm from './ChatSendForm';
import ChatRecvForm from './ChatRecvForm';
import chat from '../chat';
var fb = require('../fb');


const fakeInProgressJob = {
        _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."
    }

class InProgressJob extends React.Component{

    constructor(props){
        super(props);
        this.sendChat = this.sendChat.bind(this);
    };


    state = {
        chatInit: false,
        jobData : fakeInProgressJob,
        providerData: {},
        chatSendMsg: "",
        chatRcvMsg: ""
    };


    componentDidMount() {
    //  receive latest message from Firebase
    
        fb.ref('/').on("child_added", function(childSnapshot, prevChildKey) {

            console.log("Msg from Firebase");
            console.log(childSnapshot.val());

            if (this.state.chatInit === true)
            {
                this.processChat(childSnapshot.val().sender, childSnapshot.val().msg);
            }

        }.bind(this));
    };

    processChat(sender, msg) {
        if (sender === "client")
        {
            if (this.props.isUser === false)
            {
              console.log("Sending msg to contractor: ");
              var text = this.state.chatRecvMsg +"\n" + "\r"+ msg;
              this.setState({ chatRecvMsg: text});
            }
        }
        else 
        {
            if (this.props.isUser === true)
            {
              console.log("Sending msg to client: ");
              var text = this.state.chatRecvMsg +"\n" + "\r"+ msg;
              this.setState({ chatRecvMsg: text});
            }
        }
    } 

    sendChat(msg) {
        var sender;
        if (this.props.isUser === true)
            sender = "client";
        else
            sender = "contractor";

        this.state.chatInit = true;

        chat.post(sender, msg);
        //this.setState({ chatSendMsg: msg});
        //this.setState({ chatRecvMsg: msg});
    }

    // componentDidMount() {
    //     axios
    //         .get('/ROUTEGOESHERE')
    //         .then((data) => {
    //             this.setState({ jobData: res.data.FILL_IN_WHEN_CREATED, providerData: res.data.FILL_IN_WHEN_CREATED});

    //         })
    // }

    render() {
        const props = this.props;
        const isUserPage = props.isUser;

        return(
            <div>
                <h2>You Currently Have The Following Job In Progress</h2>
                <div className="panel panel-success" data-value={this.state.jobData._id}>   
                    <div className="panel-heading">
                        <h3 className="panel-title"><span className="glyphicon glyphicon-asterisk" aria-hidden="true"></span> {this.state.jobData._id} | {this.state.jobData.title} - {this.state.jobData.zipCode}</h3>
                    </div>
                    <div className="panel-body panel-success">
                        {this.state.jobData.description}<br />
                    </div>
                    <div className="panel-body">
                        {props.isUser ? <UserInfo /> : <ProviderInfo />}
                    </div>

                    <div>
                        <form>
                            {props.isUser ?
                                <input
                                type="text"
                                name="Received Message"
                                value={this.state.chatRecvMsg} /> :
                               <input
                                type="text"
                                name="Received Message"
                                value={this.state.chatRecvMsg} /> }
                        </form>
                    </div>
                    <div>
                        {props.isUser ?                             
                                <ChatSendForm sendChat={this.sendChat} /> :
                                <ChatSendForm sendChat={this.sendChat} /> }
                    </div>
                </div>
            </div>
        )
    }
};

export default InProgressJob;
