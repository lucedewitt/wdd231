const baseUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=";
async function getJson() {
  // replace this with your actual key
  const apiKey = "616f22d1";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + apiKey;
  // set the options. The important one here is the X-Api-Key
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Api-Key": apiKey
//       }
//   }
  // make the request
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data;
}

let data = getJson();
console.log(data);