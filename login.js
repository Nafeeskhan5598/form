function validated() {
    var email = document.getElementById('emails').value;
    var pass = document.getElementById('password').value;

    if (email == "") {
        document.getElementById('emailids').innerHTML = " ** Please fill the Email";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = " ** @ Invalid Position";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " ** . Invalid Position";
        return false;
    }

    if (pass == "") {
        document.getElementById('pass_error').innerHTML = " ** Please fill the password";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('pass_error').innerHTML = " ** user password length must be between 5 and 20";
        return false;
    }
}
