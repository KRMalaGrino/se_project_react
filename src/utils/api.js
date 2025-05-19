const baseUrl = "http://localhost:3001";

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
    return fetch(`${baseUrl}/items` ,{
        headers: ,
        body: JSON.stringify({}),
    }).then(handleResponse)
  }

  export {};