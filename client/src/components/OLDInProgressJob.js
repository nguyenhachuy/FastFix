import React from 'react';
import AvailableJob from './AvailableJob';
import ProviderInfo from './ProviderInfo';
import UserInfo from './UserInfo';


const fakeInProgressJob = {
        _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."
    }

class InProgressJob extends React.Component{

    constructor(props){
        super(props);
    };

    state = {
        jobData : fakeInProgressJob,
        providerData: {},
        chatDisplay: false
    };

    _openUserChat = event => {
        alert('User Chat Open');
        this.setState({chatDisplay: true});
    };

    _openProviderChat = event => {
        alert('Provider Chat Open');
    };

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
                        
        {props.isUser ? <UserInfo onClick={this._openUserChat} toggleChat={this._openUserChat.bind(this)}/> : <ProviderInfo onClick={this._openProviderChat}  />}
           
                        

                    </div>
                </div>
            </div>
        )
    }
};

export default InProgressJob;

