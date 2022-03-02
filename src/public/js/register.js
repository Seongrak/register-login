"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const name = document.querySelector("#name");
const pwdConfirm = document.querySelector("#pwd-confirm");
const submit = document.querySelector("#button");

function register() {
  if (!id.value) {
    return alert("Please enter the ID");
  }
  if (pwd.value !== pwdConfirm.value) {
    return alert("password doens't match");
  }

  const req = {
    id: id.value,
    pwd: pwd.value,
    name: name.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }) //
    .then((res) => res.json()) //
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    }) //
    .catch((err) => {
      console.error(new Error("Error!! - sign up"));
    });
}

submit.addEventListener("click", register);
