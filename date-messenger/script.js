const button = document.querySelector("button");
const output = document.querySelector(".output");

output.setAttribute("style", "color: white; width: 200px; height: 200px; text-align: center;");

button.addEventListener("click", showOutput);

function showOutput() {
  const date = new Date();
  let cur = date.getHours();
  let message;

  if(cur > 17){
    message = "Good Evening";
    output.style.backgroundColor = "black"
  }else if(cur > 12) {
    message = "Good Afternoon";
    output.style.backgroundColor = "blue"
  }else if(cur > 0){
    message = "Good Morning";
    output.style.backgroundColor = "orange"
  }else {
    message = "Something went wrong";
    output.style.backgroundColor = "red"
  }

  output.innerHTML = `<h1>${message}</h1>`;
}