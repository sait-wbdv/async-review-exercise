"use strict";

async function fetchData() {
  try {
    const response = await fetch("https://api.disneyapi.dev/character");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
