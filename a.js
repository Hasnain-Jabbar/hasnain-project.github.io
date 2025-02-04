function navbar() {
  let nav = document.getElementById("nav-3");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
  console.log(nav);
}
document.getElementById('box1').addEventListener('click',()=>{
  document.getElementById('top').style.backgroundColor = "red"
  document.getElementById('logo').style.color = "red"
  for (i = 1; i <= 12; i++) {
    let bg = document.getElementsByClassName("bgChange")[i]
    bg.style.backgroundColor = "red"
    // console.log(bg)
  }
  for (j = 1; j <= 15; j++) {
    let clr = document.getElementsByClassName("clrChange")[j]
    clr.style.color = "red"
    // console.log(clr)
  }
})
document.getElementById('box2').addEventListener('click',()=>{
  document.getElementById('top').style.backgroundColor = "blue"
  document.getElementById('logo').style.color = "blue"
  for (i = 1; i <= 12; i++) {
    let bg = document.getElementsByClassName("bgChange")[i]
    bg.style.backgroundColor = "blue"
    console.log(bg)
  }
  for (j = 1; j <= 15; j++) {
    let clr = document.getElementsByClassName("clrChange")[j]
    clr.style.color = "blue"
    console.log(clr)
  }
})
document.getElementById('box3').addEventListener('click',()=>{
  document.getElementById('top').style.backgroundColor = "yellow"
  document.getElementById('logo').style.color = "yellow"
  for (i = 1; i <= 12; i++) {
    let bg = document.getElementsByClassName("bgChange")[i]
    bg.style.backgroundColor = "yellow"
    console.log(bg)
  }
  for (j = 1; j <= 15; j++) {
    let clr = document.getElementsByClassName("clrChange")[j]
    clr.style.color = "yellow"
    console.log(clr)
  }
})
document.getElementById('box4').addEventListener('click',()=>{
  document.getElementById('top').style.backgroundColor = "limegreen"
  document.getElementById('logo').style.color = "limegreen"
  for (i = 1; i <= 12; i++) {
    let bg = document.getElementsByClassName("bgChange")[i]
    bg.style.backgroundColor = "limegreen"
    console.log(bg)
  }
  for (j = 1; j <= 15; j++) {
    let clr = document.getElementsByClassName("clrChange")[j]
    clr.style.color = "limegreen"
    console.log(clr)
  }
})
// function theme() {
//   // let actColor=document.getElementById('chk').value
  
//   let clr2 = document.getElementById('box2').style.backgroundColor
//   let clr3 = document.getElementById('box3').style.backgroundColor
//   let clr4 = document.getElementById('box4').style.backgroundColor
//   document.getElementById('top').style.backgroundColor = actColor
//   document.getElementById('logo').style.color = actColor
//   for (i = 1; i <= 12; i++) {
//     let bg = document.getElementsByClassName("bgChange")[i]
//     bg.style.backgroundColor = actColor
//     console.log(bg)
//   }
//   for (j = 1; j <= 15; j++) {
//     let clr = document.getElementsByClassName("clrChange")[j]
//     clr.style.color = actColor
//     console.log(clr)
//   }
// }
document.getElementsByClassName('circle-box')[0].addEventListener('click', () => {
  let eye = document.getElementById('eye-icon').name
  // if(eye === 'eye'){
  //   eye = "eye-off"
  // }
  // else{
  //   eye = 'eye'
  // }
  eye.name = "eye-off"
  console.log(eye)
  let a = document.getElementById('box')
  if (a.style.display === 'flex') {
    a.style.display = 'none'
  }
  else {
    a.style.display = 'flex'
  }
})