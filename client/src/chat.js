var fb = require('./fb');

//====================================================================
//  chat.post()
//====================================================================
function post(sender, msg) {
    console.log(sender + " posting: " + msg);
    fb.ref('/').push({
        sender: sender,
        msg: msg
  });
}

export default {
    post: post
}

