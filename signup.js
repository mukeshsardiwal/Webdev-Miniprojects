let users = [];

function addUser(username, password) {
    const user = {
        username: username,
        password: password
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

const signinForm = document.querySelector("form");

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {};
  const formData = new FormData(signinForm);
  for (const [key, value] of formData) {
    body[key] = value;
  }

  const username = body.username;
  const password = body.password;

  addUser(username, password);

  signinForm.reset();

  alert('Sign in successful!');
});