document.getElementById('login-submit').addEventListener('click', function () {
    const useEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password')
    const eror = document.getElementById('eror');

    if (useEmail.value == '' || userPassword.value == '') {
        eror.style.display = 'block'
    }
    else if (useEmail.value != 'sontan@baap.com' || userPassword.value != 'password') {
        eror.style.display = 'block'

    }

    else {
        eror.style.display = 'none'
        window.location.href = 'banking.html'
    }
})