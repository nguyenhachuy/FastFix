import Cookies from 'js-cookie';

const Auth = {
    data: [
        'edobb', 'gusnguyen', 'HughHiwatashi', 'MajidShojaee'
    ],
    isAuthenticated:  ()=> {
        console.log(Cookies.get('id') + " wtf");
        return Cookies.get('id') !== undefined ? true : false;
    },
    setCookie(username, type){
        Cookies.set('id', username);
        Cookies.set('type', type.toString().toLowerCase());
        this.isAuthenticated = true;
        console.log('id ' + username);
        console.log('type' +  type.toString().toLowerCase());
        console.log(Cookies.get('id'));
    },

    authenticate(user, success, failure) {
        console.log(user);
        if (this.data.indexOf(user.username) !== -1) {
            this.isAuthenticated = true;
            Cookies.set('id', user.username);
            // Cookies.set('type', user.type.toLowerCase());
            setTimeout(success, 100); // fake async            
        }
        else {
            this.isAuthenticated = false;
            Cookies.remove('id');
            Cookies.remove('type');
            setTimeout(failure('failed'), 100);
        }
    },
    signout(cb) {
        this.isAuthenticated = false;
        Cookies.remove('id');
        Cookies.remove('type');
        setTimeout(cb, 100);
    },
    signup(user, success, failure) {
        if (this.data.indexOf(user.username) === -1) {
            this.isAuthenticated = true;
            this.data.push(user.username);
            Cookies.set('id', user.username);
            Cookies.set('type', user.type);
            setTimeout(success, 100); // fake async            

        }
        else {
            this.isAuthenticated = false;
            Cookies.remove('id');
            Cookies.remove('type');
            setTimeout(failure(['username already exists']), 100); // fake async             
        }
    }
};


export default Auth;