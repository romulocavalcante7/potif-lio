const navLinks = document.querySelectorAll("nav a");

for (const link of navLinks) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 100,
    behavior: "smooth"
  });
}

