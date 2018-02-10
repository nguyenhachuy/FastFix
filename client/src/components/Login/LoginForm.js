import React from 'react';
import {Link} from 'react-router-dom';
const LoginForm = ({
    handleChange, 
    handleSignup, 
    user
}) => {
    return (
        <form class="well form-horizontal" action=" " method="post" id="login_form">
            <fieldset>
                <legend>
                    <center>
                        <h2><b>Fast Fix</b></h2>
                    </center>
                </legend><br />



                <div class="form-group">
                    <label class="col-md-4 control-label">Username</label>
                    <div class="col-md-6 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-log-in"></i></span>
                            <input name="username" placeholder="Username" class="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.username}
                            />
                        </div>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-4 control-label">Password</label>
                    <div class="col-md-6 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-log-in"></i></span>
                            <input name="password" placeholder="Password" class="form-control" type="password"
                                required
                                onChange={handleChange}
                                value={user.password}
                            />
                        </div>
                    </div>
                </div>

                {/* <div class="form-group">
                    <label class="col-md-4 control-label">E-Mail</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input name="email" placeholder="E-Mail Address" class="form-control" type="text" />
                        </div>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-4 control-label">Contact No.</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                            <input name="contact_no" placeholder="(639)" class="form-control" type="text" />
                        </div>
                    </div>
                </div> */}

{/* 
                {signupSuccess &&
                
                <div class="alert alert-success" role="alert" id="success_message">
                    Success 
                    <i class="glyphicon glyphicon-thumbs-up"></i> Success!.
                </div>
                
                } */}
                <div class="form-group">
                    <label class="col-md-4 control-label"></label>
                    <div class="col-md-4"><br />
                        <button type="submit" class="btn btn-warning">Log In <span class="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>
                <div class="alert alert-warning" role="alert" id="signup_message">
                    <Link to={'/signup'}>Sign Up</Link>
                </div>   

            </fieldset>
        </form>
    )
}

export {LoginForm};