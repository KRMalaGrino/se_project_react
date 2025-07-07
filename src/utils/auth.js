import { handleResponse } from "./apiUtils.js";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.KRMalaGrino.theoceanforest.com"
    : "http://localhost:3001";
const baseHeader = { "Content-Type": "application/json" };

function getToken() {
  return localStorage.getItem("jwt");
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

export { getToken, signup, signin, checkTokenValidity, editProfile };
