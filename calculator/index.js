let string = "";
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string).toString();
      document.querySelector("#display").innerHTML = string;
    } else if (e.target.innerHTML === "clear") {
      string = "";
      document.querySelector("#display").innerHTML = "0";
    } else if (e.target.innerHTML === "←") {
      string = string.slice(0, -1);
      document.querySelector("#display").innerHTML = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector("#display").innerHTML = string;
    }
  });
});
