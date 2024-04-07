let rollingdice=new Audio("C:/Users/anura/OneDrive/Desktop/rpg-dice-rolling-95182.mp3");
let tog=1;
const box=document.querySelectorAll(".box");
let player1=document.querySelector("#cont1");
player1.classList.add("tog12");
let score=[1,1];
box.forEach((element,i) => {
    if(i%2===0)
    {
        element.classList.add("color_1");
    }
    else{
        element.classList.add("color_2");
    }
    i++;
});
let p1=document.querySelectorAll("#p1");
let body =document.querySelector("#body");
function rolldice()
{
    rollingdice.play();
let img=document.querySelector("#dice_1");
let num=Math.floor(Math.random()*6)+1;
console.log(`dice number is ${num}`);
let imagesrc="C:/Users/anura/OneDrive/Desktop/dice_"+num+".png";
img.src=imagesrc;
return num;
}
function activeplayer()
{
    tog=tog===1?2:1;
}
 function token(player,psum,num,playerscore)
{
    // let playerElement = document.querySelector("#"+player);
    console.log("previous psum is"+psum);
    psum=+psum+num;
    if(psum>100)
    {
      psum=psum-num;
    }
    console.log("p sum is"+psum);
   psum= snakeladder(psum);
   if(psum>100)
    {
      psum=psum-num;
    }
    if(psum<100)
    {
      console.log("new psum is"+psum);
      score[playerscore]=psum;
      let targetElement = document.querySelector(".box"+psum);
    let p=document.querySelector("."+player);
      targetElement.appendChild(p);
    }
   if(psum==100)
   {
      alert(`Congratulations! ${player} wins the game`);
      restart();
   }
  //  console.log("new psum is"+psum);
  //   score[playerscore]=psum;
  //   let targetElement = document.querySelector(".box"+psum);
  // let p=document.querySelector("."+player);
  //   targetElement.appendChild(p);
}
function snakeladder(psum)
{
  if(psum==100)
  {
    return 100;
  }
  if(psum==12)
  {
    psum=31;
  }
  if(psum==77)
  {
    psum=96;
  }
  if(psum==59)
  {
    psum=2;
  }
  if(psum==98)
  {
    psum=18;
  }
  if(psum==75)
  {
    psum=46;
  }
  if(psum==48)
  {
    psum=14;
  }
return psum;
}
function restart()
{
  score=[1,1];
  tog=1;
  let div=document.querySelector(".box1");
  let red=document.querySelector(".p1");
  let blue=document.querySelector(".p2");
  div.appendChild(red);
  div.appendChild(blue);
  let img=document.querySelector("#dice_1");
  img.src="C:/Users/anura/OneDrive/Desktop/dice_1.png";
  let player2=document.querySelector("#cont1");
player2.classList.add("tog12");
console.log("class has been added");

}
dice.addEventListener("click",()=>{
  let num=rolldice();
  console.log(`dice number is again ${num}`);
  if(tog===1)
  {
    console.log(` score of p1 is ${score[0]}`);
    token("p1",`${score[0]}`,num,0);
  }
  else{
    token("p2",`${score[1]}`,num,1);
  }
  activeplayer(); 
  document.querySelector("#cont1").classList.remove("tog12");         
  document.querySelector("#cont2").classList.remove("tog12");  
  if (tog === 1) {
    document.querySelector("#cont1").classList.add("tog12");
} else {
    document.querySelector("#cont2").classList.add("tog12");
}
})








