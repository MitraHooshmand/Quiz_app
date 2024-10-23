"use strict";
import reformingTheData from "./helper.js";
const loader = document.getElementById("loader");
const container = document.getElementById("container");
let formattedData = null;
const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

/////

const fetchData = async function () {
  const responce = await fetch(URL);
  const json = await responce.json();
  reformingTheData(json.results);
  formattedData = reformingTheData(json.results);
  console.log(formattedData);
  removeLoader();
};
const removeLoader = function () {
  loader.style.display = "none";
  container.style.display = "block";
};
window.addEventListener("load", fetchData);
