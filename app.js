const btn = document.querySelector("button");
const fullName = document.querySelector("#full-name");
const password = document.querySelectorAll("input");

btn.addEventListener("click", () => {
  console.log(fullName.value);
  console.log(password.value);
});

console.log("🚀 ~ file: app.js ~ line 4 ~ btn", btn);
// const h1 = document.querySelector("h1");
// const h1s = document.querySelectorAll("h1");

// const p = document.querySelector(".lorem");
// const h2 = document.querySelector("#header-2");

// const box = document.querySelector("#box");

// box.addEventListener("click", (event) => {
//   //   h1.innerText = "i am now a box";
//   event.target.style.fontSize = "55px";
// });

// console.log("🚀 ~ file: app.js ~ line 10 ~ box", box);
