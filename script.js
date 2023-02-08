var jhanda = 0;
var sqr = document.querySelector("#sqr");
sqr.addEventListener("click", function(){
    if(jhanda === 0){
    document.querySelector("#menu").style.left = "0%"
    jhanda = 1;}
    else{
        document.querySelector("#menu").style.left = "-100%"
        jhanda = 0
    }
});

