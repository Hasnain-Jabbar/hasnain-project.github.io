function navbar() {
  let nav = document.getElementById("nav-3");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
  console.log(nav);
}

function theme() {
  let actColor=document.getElementById('chk').value
  document.getElementById('top').style.backgroundColor=actColor
  document.getElementById('logo').style.color=actColor
  for (i = 1; i <= 12; i++) {
    let bg = document.getElementsByClassName("bgChange")[i]
    bg.style.backgroundColor= actColor
    console.log(bg)
  }
  for (j = 1; j <= 15; j++) {
    let clr = document.getElementsByClassName("clrChange")[j]
    clr.style.color = actColor
    console.log(clr)
  }
}
