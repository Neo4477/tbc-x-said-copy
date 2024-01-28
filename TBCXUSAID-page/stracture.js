//slider
let currentSlide = 0;
let slides = document.getElementsByClassName("slider");
    
function changeSlide(change="next"){
    slides[currentSlide].style.display="none"
    if(change=="next"){
        currentSlide=(currentSlide+1)%3
    }else{
        currentSlide=(currentSlide+2)%3
    }
    slides[currentSlide].style.display="flex"
}
    
let slideinterval=setInterval(changeSlide,2000)


let leftButton= document.getElementById("button2")
let rightButton=document.getElementById("button1")


leftButton.addEventListener("click",()=>{changeSlide("next")})
rightButton.addEventListener("click",()=>{changeSlide("prev")})


document.querySelector('.partinior-section').addEventListener('mouseenter', () => {
    clearInterval(slideinterval);
  });
  
  document.querySelector('.partinior-section').addEventListener('mouseleave', () => {
    slideinterval = setInterval(changeSlide, 2000);
  });


//dropdown faqs
let answers=document.getElementsByClassName("answer")
let downicons=document.getElementsByClassName("down-icon")
let upicons=document.getElementsByClassName("up-icon")



Array.from(downicons).forEach((element,index) => {
    element.addEventListener("click",()=>iconclicks(element,index,"down"))
}); 

Array.from(upicons).forEach((element,index)=>{
    element.addEventListener("click",()=>iconclicks(element,index,"up"))
        }
    )

function iconclicks(elem,index,side){
    Array.from(answers).forEach(element=>{
        element.classList.remove('visible-answer')
    })
    Array.from(upicons).forEach(element=>{
        element.classList.add('nonvisible-icon')
    })
    Array.from(downicons).forEach(element=>{
        element.classList.remove('nonvisible-icon')
    })

    if(side=="down"){
        answers[index].classList.toggle("visible-answer")
        upicons[index].classList.toggle("nonvisible-icon")
        elem.classList.toggle("nonvisible-icon")
    }
}

/*toggle-icon*/
let toggleicon=document.getElementById("toogle-icon")
let topbar=document.getElementById("topbar")
let middlebar=document.getElementById("middlebar")
let bottombar=document.getElementById("bottombar")
let links=document.getElementById("links")


toggleicon.addEventListener("click",()=>{
    topbar.classList.toggle("topbarAnimation")
    middlebar.classList.toggle("middlebarAnimation")
    bottombar.classList.toggle("bottombaranimation")
    links.classList.toggle("show-navbar")

})