document.getElementById("quiz-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const answers = {};
  formData.forEach((v, k) => (answers[k] = v));

  const email = document.getElementById("email").value;

  await fetch("http://localhost:3000/submit-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, answers }),
  });

  document.getElementById("quiz-form").style.display = "none";
  document.getElementById("thanks").style.display = "block";
});