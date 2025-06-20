const baseUrl = "http://localhost:3001";
const baseHeader = { "Content-Type": "application/json" };

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

// signup
function signup(name, avatar, email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleResponse);
}

// signin
function signin(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}

// check token validity
function checkTokenValidity(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

export { handleResponse, signup, signin, checkTokenValidity };
