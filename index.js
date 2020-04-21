addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})
/**
 * Directs the user to a random url
 * among the given two url's
 * @param {Request} request
 */
async function handleRequest(request) {

  //the url where the json data comes from
  const url = "https://cfw-takehome.developers.workers.dev/api/variants";

  //fetches the data from the url
  const data = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(response => {
      return response.variants;
    });

  return Response.redirect(data[Math.floor(Math.random() * 2)]);
}
