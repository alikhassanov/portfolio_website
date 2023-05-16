const body = document.body;
const toggle = document.getElementById("toggle");

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

const toggleButton = () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
};

toggle.onclick = toggleButton;
