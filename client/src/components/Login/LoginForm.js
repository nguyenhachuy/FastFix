import React from 'react';
import { Link } from 'react-router-dom';
const LoginForm = ({
    handleChange,
    handleSubmit,
    user,
    loginFailed,
    errors
}) => {
    return (
        <form className="well form-horizontal" action=" " method="post" id="login_form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    <center>
                        <h2><b>Fast Fix</b></h2>
                    </center>
                </legend><br />



                <div className="form-group">
                    <label className="col-md-4 control-label">Username</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-log-in"></i></span>
                            <input name="username" placeholder="Username" className="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.username}
                            />
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label className="col-md-4 control-label">Password</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-log-in"></i></span>
                            <input name="password" placeholder="Password" className="form-control" type="password"
                                required
                                onChange={handleChange}
                                value={user.password}
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="form-group">
                    <label className="col-md-4 control-label">Type</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <select className="form-control" name="type"
                                required
                                onChange={handleChange}
                                value={user.type}
                            >
                                <option>User</option>
                                <option>Contractor</option>
                            </select>
                        </div>
                    </div>
                </div> */}

                {/* <div className="form-group">
                    <label className="col-md-4 control-label">E-Mail</label>
                    <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                            <input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label className="col-md-4 control-label">Contact No.</label>
                    <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                            <input name="contact_no" placeholder="(639)" className="form-control" type="text" />
                        </div>
                    </div>
                </div> */}

                {/* 
                {signupSuccess &&
                
                <div className="alert alert-success" role="alert" id="success_message">
                    Success 
                    <i className="glyphicon glyphicon-thumbs-up"></i> Success!.
                </div>
                
                } */}
                <div className="form-group">
                    <label className="col-md-4 control-label"></label>
                    <div className="col-md-4"><br />
                        <button type="submit" className="btn btn-warning" onClick={this.handleFormSubmit}>Log In <span className="glyphicon glyphicon-send"></span></button>

                    </div>
                </div>
                <div className="alert alert-warning" role="alert" id="signup_message">
                    <Link to={'/signup'}>Sign Up</Link>
                </div>
                {loginFailed &&
                    <div className="alert alert-danger" role="alert" id="signup_message">
                        Sign In failed. Please try again or Sign Up!
                        <br />
                        <p>{errors.toString()}</p>
                    </div>

                }

            </fieldset>
        </form>
    )
}

export { LoginForm };