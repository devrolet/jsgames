const output = document.querySelector(".output");
const button = document.querySelector("button");
const userName = document.querySelector("input");

let showMessage = () => output.innerHTML = `<h1>Hello, Welcome ${userName.value}</h1>`;

button.addEventListener("click", showMessage);