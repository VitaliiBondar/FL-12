const LOGIN_LENGTH_MIN = 5, PASSWORD_LENGTH_MIN = 6;
let login = prompt('Login:', '');

if (login === null || login === '') {
    alert('Canceled');
} else if (login.length < LOGIN_LENGTH_MIN) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (login === 'user@gmail.com' || login === 'admin@gmail.com'){
    let password = prompt('Password: ' ,'');
    if (password === null || password === '') {
        alert('Canceled');
    } else if (login === 'user@gmail.com' && password === 'UserPass' ||
        login === 'admin@gmail.com' && password === 'AdminPass') {
        let changePassword = confirm('Do you want to change your password?');
        if (changePassword) {
            let checkPassword = prompt('Password: ' ,'');
            if (checkPassword === null || checkPassword === '') {
                alert('Canceled');
            } else if (checkPassword === password) {
                let newPassword = prompt('New password: ','');
                if (!newPassword) {
                    alert('Canceled');
                } else if (newPassword.length < PASSWORD_LENGTH_MIN) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let checkNewPassword = prompt('New password again:' ,'');
                    if (newPassword === checkNewPassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}