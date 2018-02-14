const Auth = {
    isAuthenticated: false,
    authenticate({user, cb}) {
        Cookie.get('id');
        Cookie.get('token');
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


export default Auth;