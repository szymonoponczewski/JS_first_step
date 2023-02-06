let nameEl = document.getElementById("username");
let emailEl = document.getElementById("email");
let buttonEl = document.getElementById("button");
let messageEl = document.getElementById("welcome");

buttonEl.addEventListener("click", function () {
  let name = nameEl.value;
  let mail = emailEl.value;

  messageEl.textContent = `You are ${name} and your e-mail addres is ${mail}.`;
});
