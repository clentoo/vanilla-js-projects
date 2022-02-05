//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach((eachQuestion) => {
  const btn = eachQuestion.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== eachQuestion) {
        item.classList.remove("show-text");
      }
    });

    eachQuestion.classList.toggle("show-text");
  });
});
