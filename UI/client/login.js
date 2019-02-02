async function submitLoginForm(e, d) {
  e.preventDefault()
  const loginInfo = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }

 await fetch('https://ireporter234.herokuapp.com/api/v1/auth/login', {
    method: "POST",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then((res) => {
    const { status } = res
    if (status === 200) {
      const { token } = res.data[0];
      localStorage.setItem('userToken', token);
      location.href = '../pages/red-flag.html';
    }
  })
  .catch(error => {
    return error;
  })
}

document.getElementById("submitBtn").addEventListener("click", submitLoginForm);