const baseUrl = "http://localhost:3001";
const baseHeader = { "Content-Type": "application/json" };

// function getAppInfo() {
//   return Promise.all([]);
// }

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getClothingItems() {
  return fetch(`${baseUrl}/items`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function addNewClothingItem(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleResponse);
}

function deleteClothingItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: baseHeader,
  }).then(handleResponse);
}

export { getClothingItems, addNewClothingItem, deleteClothingItem };
