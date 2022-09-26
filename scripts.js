
const validateUser = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: new URLSearchParams({
            'username': username,
            'password': password
        })
    })
    .then(res => {
        if (res.status === 200) {
            window.location.href = 'home.html';
        }
        else {
            alert('Usuario o contrasena incorrecta');
        }
    })
    .catch(err => console.log(err));
}