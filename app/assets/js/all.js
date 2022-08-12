const reply = document.querySelectorAll(".reply");
const replybtn = document.querySelector("#replybtn")
const replyAnswer = document.querySelector(".reply-answer");
const cancel  = document.querySelector("#cancel")

replybtn.addEventListener("click", () => {
  reply.forEach((i) => i.classList.toggle("d-none"))
  replyAnswer.classList.toggle("d-none");
})
 
cancel.addEventListener("click", () => { 
  replyAnswer.classList.toggle("d-none");
  reply.forEach((i) => i.classList.toggle("d-none"));
})