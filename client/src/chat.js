var fb = require('./fb');

//====================================================================
//  chat.post()
//====================================================================
function post(sender, msg) {
    console.log(sender + " posting: " + msg);

    let folder = getRef();
    fb.ref(folder).push({
        sender: sender,
        msg: msg
  });
}

function getRef() {
	let ref = '/' + "tempuser" + "tempcontractor";
	return ref;
}


export default {
    post: post,
    getRef: getRef
}

