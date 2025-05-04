function showForm(formId) {
  document.getElementById('login-form').classList.remove('active');
  document.getElementById('register-form').classList.remove('active');
  document.getElementById(formId + '-form').classList.add('active');
  document.getElementById('message').innerText = '';
}

function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  if (username && password) {
    localStorage.setItem(username, password);
    document.getElementById('message').innerText = 'Registration successful! You can login now.';
  } else {
    document.getElementById('message').innerText = 'Please fill all fields.';
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    document.getElementById('message').innerText = 'Login successful!';
    setTimeout(() => {
      window.location.href = 'homepage.html'; // redirect to homepage
    }, 1000);
  } else {
    document.getElementById('message').innerText = 'Invalid username or password.';
  }
}

  