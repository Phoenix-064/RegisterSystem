function storage() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = {
        email: email,
        password: password
    };
    localStorage.setItem('data.json', JSON.stringify(data));
    alert("It should be storage")
}