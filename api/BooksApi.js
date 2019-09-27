const BASE_URL = "https://api.nytimes.com/svc/books/v3/"
const API_KEY = "rTAGRjjVJGK5lRQrjTNNsg9KassGJsez"

export function getListHardCoverFictionBestSellers(){
  const url =  BASE_URL + "lists/current/hardcover-fiction.json?api-key=" + API_KEY
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
