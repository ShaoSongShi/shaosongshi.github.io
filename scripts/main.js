let myImage = document.querySelector("FadeParachute");

myImage.onscroll = function(){
    let myClass = myImage.getAttribute("class");
    if (myClass === "card"){
        myImage.setAttribute("class","animationBox")
    }
}
