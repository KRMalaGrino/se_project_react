const baseUrl = "http://localhost:3001";
const baseHeader = "Content-Type: application/json";

  getAppInfo() {
    return Promise.all([])
  }

  handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  const getClothingItems() {
    return fetch(`${baseUrl}/items`, {
        headers: baseHeader,
    }).then(handleResponse)
  }

  const addNewClothingItem() {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: baseHeader,
        body: JSON.stringify({name, imageUrl, weather}),
    }).then(handleResponse)
  }

  const deleteClothingItem() {
    return fetch(`${baseUrl}/items/${}`, {
        method: "DELETE",
        headers: baseHeader,
    }).then(handleResponse)
  }

  export {getClothingItems, addNewClothingItem, deleteClothingItem};