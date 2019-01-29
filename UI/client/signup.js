async function submitSignupForm(e, d) {
    e.preventDefault()
    const signupInfo = {
      firstname: document.getElementById('firstName').value,
      lastname: document.getElementById('lastName').value,
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }
  
   await fetch('https://ireporter234.herokuapp.com/api/v1/auth/signup', {
      method: "POST",
      body: JSON.stringify(signupInfo),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function(response) {
        return response.json();
      })
    .then((res) => {
      const { status } = res
      if (status === 201) {
        const { token } = res.data[0];
        localStorage.setItem('userToken', JSON.stringify(token));
        location.href = '../pages/red-flag.html';
      }
    })
    .catch(error => {
      return error;
    })
  }
  
  document.getElementById("signupBtn").addEventListener("click", submitSignupForm);