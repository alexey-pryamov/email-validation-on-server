var API_URL = 'https://perfect-inc.com/tools/email-checker/api/';

var email_validation = function(email, callback, error_cb) {
    $.getJSON(API_URL, { email: email }, function(json) {
	if (json.error === null) {
	    if (json.exists === null) {
		error_cb({ email: email,  error: 'server for ' + email + ' not responding' });
	    } else {
		callback({ email: email, exists: json.exists });
	    }
	} else {
	    error_cb({ error: json.error, email:email });
	}
    });
}

