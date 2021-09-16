import * as d3 from "d3";

// const promise = fetch("data/ColorsMDN.csv");
// promise.then((response) => {
//   response.text().then((text) => console.log(text));
// });

let url = "data/ColorsMDN.csv";
const fetchText = async () => {
  const response = await fetch(url);
  const text = await response.text();
  d3.select("body").append("div").attr();
};
fetchText();
