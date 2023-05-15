const body = document.body;
const toggle = document.getElementById("toggle");

toggle.onclick = () => {
  body.classList.toggle("light");
};
