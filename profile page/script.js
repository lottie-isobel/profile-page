function answer() {
  let correctAnswer = document.querySelector("#princess-fiona");
  let nameInput = document.querySelector("#nameInput").value;

  if (correctAnswer.checked) {
    alert(`Congratulations, ${nameInput}! You are correct 👸🏼`);
  } else {
    alert(`Good guess, ${nameInput}! But not quite right 😔`);
  }
}

let submit = document.querySelector("button.truth");
submit.addEventListener("click", answer);
