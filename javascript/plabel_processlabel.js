var dbtn = document.getElementById("dry");
var abtn = document.getElementById("air");
var obtn = document.getElementById("oil");
var libtn = document.getElementById("liq");
var pcnd = document.getElementById("processingcond");                                       
        
dbtn.addEventListener("click", clickdry, {passive: true});
abtn.addEventListener("click", clickair, {passive: true});
obtn.addEventListener("click", clickoil, {passive: true});
libtn.addEventListener("click", clickliq, {passive: true});
        
function clickdry(){
    dbtn.disabled = true;
    abtn.disabled = false;
    obtn.disabled = false;                        
    libtn.disabled = false;                        
    pcnd.innerHTML = "干式切削"; 
    dcolorchange();              
}
                    
function clickair(){
    dbtn.disabled = false;
    abtn.disabled = true;
    obtn.disabled = false;                        
    libtn.disabled = false;                        
    pcnd.innerHTML = "吹气切削"; 
    acolorchange();              
}

function clickoil(){
    dbtn.disabled = false;
    abtn.disabled = false;
    obtn.disabled = true;                        
    libtn.disabled = false;                        
    pcnd.innerHTML = "油性切削液切削"; 
    ocolorchange();              
}                

function clickliq(){
    dbtn.disabled = false;
    abtn.disabled = false;
    obtn.disabled = false;                        
    libtn.disabled = true;                        
    pcnd.innerHTML = "水性切削液切削"; 
    licolorchange();              
}

function dcolorchange(){
    dbtn.style.background = "#ccc";
    abtn.style.background = "#00aa6c";
    obtn.style.background = "#00aa6c";
    libtn.style.background = "#00aa6c";
}
function acolorchange(){
    dbtn.style.background = "#00aa6c";
    abtn.style.background = "#ccc";
    obtn.style.background = "#00aa6c";
    libtn.style.background = "#00aa6c";
}
function ocolorchange(){
    dbtn.style.background = "#00aa6c";
    abtn.style.background = "#00aa6c";
    obtn.style.background = "#ccc";
    libtn.style.background = "#00aa6c";
}  

function licolorchange(){
    dbtn.style.background = "#00aa6c";
    abtn.style.background = "#00aa6c";
    obtn.style.background = "#00aa6c";
    libtn.style.background = "#ccc";
}