import React from 'react';
import { Link } from 'react-router-dom';
const SignupForm = ({
    handleChange,
    handleSubmit,
    user,
    errors,
    signupFailed
}) => {
    return (

        <form className="well form-horizontal" action="" method="post" id="signup_form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    <center>
                        <h2><b>Registration Form</b></h2>
                    </center>
                </legend><br />


                <div className="form-group">
                    <label className="col-md-4 control-label">First Name</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input name="firstName" placeholder="First Name" className="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.firstName}
                            />
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label className="col-md-4 control-label">Last Name</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input name="lastName" placeholder="Last Name" className="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.lastName}

                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label">Username</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input name="username" placeholder="Username" className="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.username}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label">Type</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <select id="attribute" className="form-control" name="attribute"
                                required
                                onChange={handleChange}
                                value={user.attribute}
                            >
                                <option>User</option>
                                <option>Contractor</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label">Password</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input name="password" placeholder="Password" className="form-control" type="password"
                                required
                                onChange={handleChange}
                                value={user.password}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label">Confirm Password</label>
                    <div className="col-md-6 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input name="confirmPassword" placeholder="Confirm Password" className="form-control" type="password"
                                required
                                onChange={handleChange}
                                value={user.confirmPassword}
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="form-group">
                    <label className="col-md-4 control-label">E-Mail</label>
                    <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                            <input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
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
                
                <div className="alert alert-success" role="alert" id="success_message">
                    Success 
                    <i className="glyphicon glyphicon-thumbs-up"></i> Success!.
                </div>
                
                } */}
                <div className="form-group">
                    <label className="col-md-4 control-label"></label>
                    <div className="col-md-4"><br />
                        <button type="submit" className="btn btn-warning">SUBMIT <span className="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>

                <div className="alert alert-warning" role="alert" id="signup_message">
                    <Link to={'/login'}>Log in</Link>
                </div>
                {signupFailed &&
                    <div className="alert alert-danger" role="alert" id="signup_message">
                        Sign Up failed!
                        
                    </div>

                }

            </fieldset>
        </form>
    )
}

export { SignupForm };