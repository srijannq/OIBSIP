const input = document.querySelector("input");
const container = document.querySelector(".container");
function addTask() {
  if (input.value === "") {
    alert("Please enter the task name!");
  } else {
    const Li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = "&#x2717";
    span.innerHTML = input.value;
    Li.appendChild(span);
    Li.appendChild(button);
    document.querySelector("ul").appendChild(Li);
    input.value = "";
  }
}

container.addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "SPAN") {
      e.target.classList.toggle("completed");
    }
  },
  false
);
container.addEventListener(
  "click",
  function (e) {
    if (e.target.className == "btn") {
      e.target.parentNode.remove();
    }
  },
  false
);
function showCompleted(e) {
  setActiveButton(e.target);
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    const span = li.querySelector("span");
    if (span.classList.contains("completed")) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });
}
function showAll(e) {
  setActiveButton(e.target);
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    li.style.display = "flex";
  });
}
function showPending(e) {
  setActiveButton(e.target);
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    const span = li.querySelector("span");
    if (span.classList.contains("completed")) {
      li.style.display = "none";
    } else {
      li.style.display = "flex";
    }
  });
}
function setActiveButton(clickedButton) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  clickedButton.classList.add("active");
}
