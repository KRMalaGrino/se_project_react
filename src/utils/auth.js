const baseUrl = "http://localhost:3001";
const baseHeader = { "Content-Type": "application/json" };

function getToken() {
  return localStorage.getItem("jwt");
}

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => {
    const error = {
      status: res.status,
      message: data.message || "Something went wrong",
    };
    return Promise.reject(error);
  });
}

// signup
function signup(email, password, name, avatar) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ email, password, name, avatar }),
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
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

// edit profile
function editProfile(token, name, avatar) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleResponse);
}

export {
  getToken,
  handleResponse,
  signup,
  signin,
  checkTokenValidity,
  editProfile,
};
