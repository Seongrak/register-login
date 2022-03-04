"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const submit = document.querySelector("#button");

function login() {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("Error!! - login"));
    });
}

submit.addEventListener("click", login);
