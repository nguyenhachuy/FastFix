import React from 'react';
import {Link} from 'react-router-dom';
const LoginForm = ({handleChange, handleSignup, handleSubmit, username, password}) => {
    return (
        <form class="form-signin" onSubmit={handleSubmit}>
            <h2 class="form-signin-heading">Please sign in</h2>
            <label for="username" class="sr-only">Email address</label>
            <input type="text" name="username" class="form-control" placeholder="Email address" required="" autofocus=""
            value={username}
            onChange={handleChange}
            />
            <label for="password" class="sr-only">Password</label>
            <input type="password" name="password" class="form-control" placeholder="Password" required=""
            value={password}
            onChange={handleChange}
            />
            <div class="checkbox">
            <label>
                <input type="checkbox" value="remember-me"
                onChange={handleChange}
                /> 
                Remember me
            </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="Submit">Sign in</button>

            <div class="alert alert-warning" role="alert" id="signup_message">
                    <Link to={'/signup'}>Sign Up</Link>
            </div>   
        </form>    
    )
}

export {LoginForm};