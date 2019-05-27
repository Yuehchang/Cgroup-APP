var nbtn = document.getElementById("normal");
var sbtn = document.getElementById("sparkle");
var fbtn = document.getElementById("failure");
var fybtn = document.getElementById("failureyes");
var ctcnd = document.getElementById("cuttoolcond");
var misybtn = document.getElementById("misleadyes");     

nbtn.addEventListener("click", clicknormal, {passive: true});
sbtn.addEventListener("click", clicksparkle, {passive: true});
fybtn.addEventListener("click", clickfailure, {passive: true});
misybtn.addEventListener("click", clickmisyes, {passive: true});
        
function clicknormal(){
    nbtn.disabled = true;
    sbtn.disabled = false;
    fbtn.disabled = false;                        
    ctcnd.innerHTML = "正常"; 
    ncolorchange();              
}
                    
function clicksparkle(){
    nbtn.disabled = false;
    sbtn.disabled = true;
    fbtn.disabled = false;                        
    ctcnd.innerHTML = "刀具耗损"; 
    scolorchange();              
}

function clickfailure(){
    nbtn.disabled = true;
    sbtn.disabled = true;
    fbtn.disabled = true;                        
    ctcnd.innerHTML = "刀具报废"; 
    fcolorchange();
    displaymislead();

} 

function　clickmisyes(){
    nbtn.disabled = false;
    sbtn.disabled = false;
    fbtn.disabled = true;

    ctcnd.innerHTML = ""

    nbtn.style.background = "#00a5ff"
    sbtn.style.background = "#ffbc00"
    fbtn.style.background = "#ccc"

    hidemislead();
}

function ncolorchange(){
    nbtn.style.background = "#ccc";
    sbtn.style.background = "#ffbc00";
    fbtn.style.background = "#ff5357";
}
function scolorchange(){
    nbtn.style.background = "#00a5ff";
    sbtn.style.background = "#ccc";
    fbtn.style.background = "#ff5357";
}
function fcolorchange(){
    nbtn.style.background = "#ccc";
    sbtn.style.background = "#ccc";
    fbtn.style.background = "#ccc";
}          

function displaymislead(){
    misleaddiv.style.display = ""
}

function hidemislead(){
    misleaddiv.style.display = "none"
}
                    
