let users = JSON.parse(localStorage.getItem('users')) || [];

function checkUser(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }
    return false;
}

const loginForm = document.querySelector("form");

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {};
  const formData = new FormData(loginForm);
  for (const [key, value] of formData) {
    body[key] = value;
  }

  const username = body.username;
  const password = body.password;

  if (checkUser(username, password)) {
    alert("Login Successfully");
    window.location.href = './Todo/index.html';
  } else {
    alert('Invalid username or password!');
  }

  loginForm.reset();
});