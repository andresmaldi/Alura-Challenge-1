"use strict";

let btnEncrypt = document.getElementById("btn-encrypt");
let btnDecrypt = document.getElementById("btn-decrypt");
let btnCopy = document.getElementById("btn-copy");
let btnClear = document.getElementById("btn-clear");
let input = document.getElementById("input");
let output = document.getElementById("output");

let encrypt = function (e) {
  e.preventDefault();

  let inputText = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  inputText = inputText
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    .replaceAll("o", "ober");

  output.value = inputText;
};

let decrypt = function (e) {
  e.preventDefault();

  let inputText = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  inputText = inputText
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o");

  output.value = inputText;
};

let copy = function () {
  navigator.clipboard.writeText(output.value);

  // Segunda manera de hacerlo, pero considerada obsoleta:
  /* output.select();
  document.execCommand("copy"); */
};

let clear = function () {
  if (input.value != "") {
    input.value = "";
  }

  if (output.value != "") {
    output.value = "";
  }
};

btnEncrypt.addEventListener("click", encrypt);

btnDecrypt.addEventListener("click", decrypt);

btnCopy.addEventListener("click", copy);

btnClear.addEventListener("click", clear);
