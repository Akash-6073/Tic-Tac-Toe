let ck = new Audio("click.mp3");
let go = new Audio("gameover.mp3");
let wck = new Audio("winclick.mp3");
let rst =new Audio("reset.mp3");
let count=0;
let gameo = false;
let turn = "X";
let reset = document.getElementById("reset")
console.log("hi");


const changeturn = () => {
  return turn === "X" ? "O" : "X";
};

async function checkwin ()  {
  let bxtxt = document.getElementsByClassName("bxtxt");
  let wins = [
    [0, 1, 2 , "line1"],
    [3, 4, 5 , "line2"],
    [6, 7, 8 , "line3"],
    [0, 3, 6 , "line4"],
    [1, 4, 7 , "line5"],
    [2, 5, 8 , "line6"],
    [0, 4, 8 , "line7"],
    [2, 4, 6 , "line8"],
  ];
  wins.forEach(async e => {
    if (
      (bxtxt[e[0]].innerText === bxtxt[e[1]].innerText) &&
      (bxtxt[e[1]].innerText === bxtxt[e[2]].innerText) &&
      (bxtxt[e[0]].innerText !== "")
    ) {
      document.querySelector(".turn").innerText = bxtxt[e[0]].innerText + " Won";
      gameo = true;
      ck.pause()
      wck.play();
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="256px"
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.visibility="visible"
      document.querySelector("#lines").style.width="20vw";
      // document.querySelector("#lines").style.width="40vw";  -- > for Responsive
      // let wid=document.querySelector(".wid");
      // let y=window.getComputedStyle(wid);
      // console.log(y);
      document.getElementById("lines").classList.add("wid");
      document.getElementById("lines").classList.add(e[3]);
    }
  });
};

// Volume
// let vol=document.getElementById("fa");
// vol.addEventListener('click',()=>{  
//     vol.classList.remove("fa-volume-high");
//     vol.classList.add("fa-volume-mute");
//     go.pause();
//     // vol.classList.add("fa-volume-high");
//     // vol.classList.remove("fa-volume-mute");
//     // go.pause();
// })

// go.play()
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
  let bxtxt = element.querySelector(".bxtxt");
  element.addEventListener("click", () => {
    if (bxtxt.innerText === "") {
      if (!gameo) {
      ck.play();
      bxtxt.innerText = turn;
      turn = changeturn();
      document.getElementsByClassName("turn")[0].innerText ="Turn for " + turn;
      checkwin();
      }
    }
  });
});



reset.addEventListener('click',()=>{
  rst.play();
  let bxtxt = document.querySelectorAll(".bxtxt");  // Here we are selecting all the box texts , so querySelector All
  Array.from(bxtxt).forEach(element=>{
    element.innerText="";
    gameo=false;
    turn="X"
    document.getElementsByClassName("turn")[0].innerText ="Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px"
    document.getElementById("lines").className=''
    document.querySelector("#lines").style.width="0vw"
  })
})