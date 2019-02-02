const userToken = localStorage.getItem('userToken');
if (!userToken) window.location.replace('../pages/login.html');

async function getRedFlags() {
  try {
    const res = await fetch('https://ireporter234.herokuapp.com/api/v1/red-flags', {
      method: "GET",
      headers: {
        "x-access-token": userToken,
      },
    })
    const result = await res.json();
    const { status, data } = result;
    if (status === 200 && data.length > 0) {
      return data
    } else {
      return 'This is empty';
    }
  } catch(error) {
    return error;
  }
}

window.onload = (getRedFlags);
