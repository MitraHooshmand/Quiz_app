"use strict";
const loader = document.getElementById("loader");
const container = document.getElementById("container");
let formattedData = null;
const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

const fetchData = async function () {
  const responce = await fetch(URL);
  const json = await responce.json();
  formattedData = json;
  removeLoader();
};
const removeLoader = function () {
  loader.style.display = "none";
  container.style.display = "block";
};
window.addEventListener("load", fetchData);
