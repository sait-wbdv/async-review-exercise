"use strict";

// Make this an asynchronous function
function fetchData() {
  try {
    // fetch data asynchronously
    const response = fetch("https://api.disneyapi.dev/character");
    // parse the data as .json()
    console.log(response);
    // add error handling
  } catch () {
  }
}

// Execute the function
