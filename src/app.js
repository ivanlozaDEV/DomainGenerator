/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".org", ".edu"];

let generatedDomain = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        generatedDomain = pronoun[i] + adj[j] + noun[k] + extension[l];
        console.log(generatedDomain);
      }
    }
  }
}

window.onload = function() {
  const domain = document.getElementById("domainTarget");
  domain.innerHTML = generatedDomain;
};
