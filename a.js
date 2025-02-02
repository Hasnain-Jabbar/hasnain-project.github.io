function navbar() {
  let nav = document.getElementById("nav-3");
  if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
    console.log(nav);
}
