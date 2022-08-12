"use strict";

var reply = document.querySelectorAll(".reply");
var replybtn = document.querySelector("#replybtn");
var replyAnswer = document.querySelector(".reply-answer");
var cancel = document.querySelector("#cancel");
replybtn.addEventListener("click", function () {
  reply.forEach(function (i) {
    return i.classList.toggle("d-none");
  });
  replyAnswer.classList.toggle("d-none");
});
cancel.addEventListener("click", function () {
  replyAnswer.classList.toggle("d-none");
  reply.forEach(function (i) {
    return i.classList.toggle("d-none");
  });
});
//# sourceMappingURL=all.js.map
