import React from 'react';
import AvailableJob from './AvailableJob';
import ProviderInfo from './ProviderInfo';


const fakeInProgressJob = {
        _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."
    }

class InProgressJob extends React.Component{

    constructor(props){
        super(props);
    };

    state = {
        jobData : fakeInProgressJob,
        providerData: {}
    };

    // componentDidMount() {
    //     axios
    //         .get('/ROUTEGOESHERE')
    //         .then((data) => {
    //             this.setState({ jobData: res.data.FILL_IN_WHEN_CREATED, providerData: res.data.FILL_IN_WHEN_CREATED});

    //         })
    // }

    render() {
        return(
            <div>
                <h2>You Currently Have The Following Job In Progress</h2>
                <div className="panel panel-default" data-value={this.state.jobData._id}>   
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.jobData._id} | {this.state.jobData.title} - {this.state.jobData.zipCode}</h3>
                    </div>
                    <div className="panel-body">
                        {this.state.jobData.description}<br />
                    </div>
                    <div className="panel-body">
                        <h5>You Selected The Following Service Provider:</h5>
                        <ProviderInfo />
                    </div>
                </div>
            </div>
        )
    }
};

export default InProgressJob;
