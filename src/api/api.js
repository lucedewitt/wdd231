// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "YlJ1EfBGUDlCy2zT04q0ydfkfew9QMzqVsUwtHWN";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

async function renderClimbingList(){
    const endpoint = "activities/parks?q=climbing";
    const list = document.querySelector("#outputList");
    let data = await getJson(endpoint);
    let parks = data.data[0].parks;
    console.log(parks);
    let listHTML = parks.map(listTemplate).join("");
    list.innerHTML = listHTML;
}

function listTemplate(item){
    return html = `<li><a href=${item.url}>${item.fullName}</a> ${item.states}</li>`
}

renderClimbingList();