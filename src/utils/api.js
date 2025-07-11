import { handleResponse } from "./apiUtils.js";
import { baseUrl } from "../utils/constants.js";

const baseHeader = { "Content-Type": "application/json" };

function getClothingItems() {
  return fetch(`${baseUrl}/items`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function addNewClothingItem(name, imageUrl, weather, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleResponse);
}

function deleteClothingItem(_id, token) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: { ...baseHeader, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

export {
  getClothingItems,
  addNewClothingItem,
  deleteClothingItem,
  addCardLike,
  removeCardLike,
};
