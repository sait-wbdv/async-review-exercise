"use strict";

function fetchData() {
  get("https://api.disneyapi.dev/character")
    .then((response) => {
      if (/* if the response is not ok... */) {
        throw new Er("Network response was not ok.");
      }
      // return the data
    })
    // add another link to the chain where the data is logged
    .catch((error) => {
      // log errors
    });
}

fetchData();
