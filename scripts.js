
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
    .then(res => res.json())
    .then(window.location.href = 'home.html')
    .catch(err => console.log('el error es', err));
}