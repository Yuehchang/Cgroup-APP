function inti(){
    var strtbtn = document.getElementById("recordButton");
    var endbtn = document.getElementById("stopButton");
    var nbtn = document.getElementById("normal");
    var sbtn = document.getElementById("sparkle");
    var fbtn = document.getElementById("failure");
    var dbtn = document.getElementById("dry");
    var abtn = document.getElementById("air");
    var obtn = document.getElementById("oil");
    var libtn = document.getElementById("liq");
    var misdiv = document.getElementById("misleaddiv")

    endbtn.disabled = true;
    nbtn.disabled = true;
    sbtn.disabled = true;
    fbtn.disabled = true;
    dbtn.disabled = true;
    abtn.disabled = true;
    obtn.disabled = true;
    libtn.disabled = true;

    strtbtn.style.background = "#ccc";
    endbtn.style.background = "#ccc";
    nbtn.style.background = "#ccc";
    sbtn.style.background = "#ccc";
    fbtn.style.background = "#ccc";
    dbtn.style.background = "#ccc";
    abtn.style.background = "#ccc";
    obtn.style.background = "#ccc";
    libtn.style.background = "#ccc";   

    misdiv.style.display = "none";
}


 
