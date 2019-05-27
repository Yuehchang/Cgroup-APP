URL = window.URL || window.webkitURL;
var gumStream; //stream from getUserMedia()
var rec; //Recorder.js object
var rec2;
var input; //MediaStreamAudioSourceNode we'll be recording
var splittime = 0; //split blob
var prevTime, stopwatchInterval, elapsedTime = 0; //stopwatch
var running=0; //stopwatch
var temp1 = document.getElementById("stopwatch"); //stopwatch
var temp2 = document.getElementById("swhidden"); //stopwatch

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext; //new audio context to help us record

//loading
var loading = document.getElementById("loading");

//stop all the btn after recording
var strtbtn = document.getElementById("recordButton");
var endbtn = document.getElementById("stopButton");
var nbtn = document.getElementById("normal"); //cuttoolabel
var sbtn = document.getElementById("sparkle"); //cuttoolabel
var fbtn = document.getElementById("failure"); //cuttoolabel
var dbtn = document.getElementById("dry"); //cuttoolabel
var abtn = document.getElementById("air"); //cuttoolabel
var obtn = document.getElementById("oil"); //cuttoolabel
var libtn = document.getElementById("liq"); //cuttoolabel

strtbtn.addEventListener("click", startRecording);
endbtn.addEventListener("click", stopRecording);
endbtn.addEventListener("click", stoptimer);

//record.js
function startRecording() {
    console.log("recordButton clicked");

    var constraints = { audio: true, video:false }
 
    //Disable the record button until we get a success or fail from getUserMedia()
    strtbtn.disabled = true;
    endbtn.disabled = false;

    //We're using the standard promise based getUserMedia()
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

        udioContext = new AudioContext();

        // assign to gumStream for later use 
        gumStream = stream;
 
        // use the stream 
        input = audioContext.createMediaStreamSource(stream);
 
        //Create the Recorder object and configure to record stero sound
        rec = new Recorder(input,{numChannels:2})

        rec2 = new Recorder(input, {numChannels:2})
 
        document.getElementById("rlhidden").value = writefilename();
        
        //start the recording process
        console.log("Recording started");
        
        rec.record()

        apiaftertimer();

        recordbtnchange();

        clicknormal();
 
        processbtneable();

        dropdwondisable();

        setTimeout(function repeat(){
            splitblob();
            setTimeout(repeat, 1279915);
        }, 1279915);

 
    }).catch(function(err) {
        //enable the record button if getUserMedia() fails
        strtbtn.disabled = false;
        endbtn.disabled = true;
    });
}

function splitblob(){
    splittime++;
    console.log("split blob for every 30min");
    if((splittime % 2 == 1)){
        rec.stop();
        rec2.record();
        console.log("First recorder stopped and second recorder starts");
        rec.exportWAV(function(blob){
            if(splittime>1){
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                var filename = document.getElementById("rlhidden").value+"_"+(splittime-1).toString()+".wav";
                
                a.href = url;
                a.download = filename;
                a.style.display = "none";
    
                strtbtn.appendChild(a);
                a.click();
                strtbtn.removeChild(a);
            }else{
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                var filename = document.getElementById("rlhidden").value+"_"+(splittime-1).toString()+".wav";
            
                //link the a element to the blob
                a.href = url;
                a.id = "returnIndex";
                a.name = "returnIndex";
                a.download = filename;
                a.style.display = "none";
            
                strtbtn.appendChild(a);
                a.click();
                strtbtn.removeChild(a);
            }
        })
        rec.clear();
        console.log("First recorder is clear");
    }else{
        rec2.stop();
        rec.record();
        console.log("Second recorder stopped and first recorder starts");
        rec2.exportWAV(function(blob){
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            var filename = document.getElementById("rlhidden").value+"_"+(splittime-1).toString()+".wav";
            
            a.href = url;
            a.download = filename;
            a.style.display = "none";

            strtbtn.appendChild(a);
            a.click();
            strtbtn.removeChild(a);    
        })
        rec2.clear();
        console.log("Second recorder is clear");
    }
}

function stopRecording() {
    console.log("stopButton clicked");

    //tell the recorder to stop the recording
    if((splittime % 2 == 1)){
        rec2.stop();
        
        console.log("Second recorder finished");
        
        //stop microphone access
        gumStream.getAudioTracks()[0].stop();
        
        rec2.exportWAV(function(blob){
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            var filename = document.getElementById("rlhidden").value+"_"+splittime.toString()+".wav";
            
            a.href = url;
            a.download = filename;
            a.style.display = "none";

            strtbtn.appendChild(a);
            a.click();
            strtbtn.removeChild(a);
            
            //return back to index page one second after file downloaded
            setTimeout(function(){
                window.location.href = "index.html";
            }, 1000);    
        })     
    }else{
        rec.stop();
        
        console.log("First recorder finished");
        
        gumStream.getAudioTracks()[0].stop();

        rec.exportWAV(function(blob){
            if(splittime>0){
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                var filename = document.getElementById("rlhidden").value+"_"+splittime.toString()+".wav";
                
                a.href = url;
                a.download = filename;
                a.style.display = "none";
    
                strtbtn.appendChild(a);
                a.click();
                strtbtn.removeChild(a);
                
                //return back to index page one second after file downloaded
                setTimeout(function(){
                    window.location.href = "index.html";
                }, 1000);
            }else{
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                var filename = document.getElementById("rlhidden").value+"_"+splittime.toString()+".wav";
            
                //link the a element to the blob
                a.href = url;
                a.id = "returnIndex";
                a.name = "returnIndex";
                a.download = filename;
                a.style.display = "none";
            
                strtbtn.appendChild(a);
                a.click();
                strtbtn.removeChild(a);
                
                //return back to index page one second after file downloaded
                setTimeout(function(){
                    window.location.href = "index.html";
                }, 1000);
            }
        })
    }
}

function writefilename(){
    
    var d = new Date();
    
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    
    var fyear = d.getFullYear();
    var fmonth = addZero(d.getMonth()+1);
    var fday = addZero(d.getDate());
    var fhour = addZero(d.getHours());
    var fmins = addZero(d.getMinutes());
    var fsecs = addZero(d.getSeconds());
    
    var cncid = document.getElementById("n4cnc");
    var cnctxt = cncid.options[cncid.selectedIndex].text;

    var filename = cnctxt + "_" + fyear + fmonth + fday + "_" + fhour + fmins +fsecs; 

    return filename;
}

//delay function using timeout
function apiaftertimer(){
    starttimer();
    setTimeout(callStartrecordapi, 50);
    setTimeout(callStatusapi, 50);
}

//stopwatch.js
var updateTime = function () {
    var tempTime = elapsedTime;
    var milliseconds = tempTime % 1000;
    tempTime = Math.floor(tempTime / 1000);
    var secs = tempTime % 60;
    tempTime = Math.floor(tempTime / 60);
    var mins = tempTime % 60;
    tempTime = Math.floor(tempTime / 60);
    var hours = tempTime % 60;

    if (mins < 10){
        mins = "0" + mins;
    }
    if (secs < 10){
        secs = "0" + secs;
    }
    if (hours < 10){
        hours = "0" + hours;
    }
    
    var stopwatch = hours + ":" + mins + ":" + secs + ":" + milliseconds;
    
    temp1.innerHTML = stopwatch;
    temp2.value = stopwatch;
};

function starttimer(){
    console.log("start timer");
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(function timeout() {
            if (!prevTime) {
                prevTime = Date.now();
            }
            elapsedTime += Date.now() - prevTime;
            prevTime = Date.now();
            updateTime();
        }, 50);
    };
};

function stoptimer(){
    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    }
    prevTime = null;

    //disable the stop button, enable the record too allow for new recordings
    strtbtn.disabled = true;
    endbtn.disabled = true;

    nbtn.disabled = true;
    sbtn.disabled = true;
    fbtn.disabled = true;
    dbtn.disabled = true;
    abtn.disabled = true;
    obtn.disabled = true;
    libtn.disabled = true;

    endbtn.style.background = "#ccc";
    nbtn.style.background = "#ccc";
    sbtn.style.background = "#ccc";
    fbtn.style.background = "#ccc";
    dbtn.style.background = "#ccc";
    abtn.style.background = "#ccc";
    obtn.style.background = "#ccc";
    libtn.style.background = "#ccc"; 

    misleaddiv.style.display = "none"
    
    loading.style.display = "block";
};

//recordbtn color change
function recordbtnchange(){
    strtbtn.disabled = true;
    endbtn.disabled = false;
    strtbtn.style.background　= "#ccc";
    endbtn.style.background = "red";
}

//cuttoollabel
function clicknormal(){
    nbtn.disabled = true;
    sbtn.disabled = false;
    fbtn.disabled = false;                        
    ctcnd.innerHTML = "正常"; 
    ncolorchange();     
}

function ncolorchange(){
    nbtn.style.background = "#ccc";
    sbtn.style.background = "#ffbc00";
    fbtn.style.background = "#ff5357";
}

//dropdown menu disable
function dropdwondisable(){
    var cncid = document.getElementById("n4cnc");
    var ctradius = document.getElementById("n4ct");
    var material = document.getElementById("n4material");
    var extendR = document.getElementById("n4extendR");

    cncid.disabled = true;
    ctradius.disabled = true;
    material.disabled = true;
    extendR.disabled = true;

    cncid.style.background = "#ccc"
    ctradius.style.background = "#ccc"
    material.style.background = "#ccc"
    extendR.style.background = "#ccc"
}

//processlabel enable
function processbtneable(){
    dbtn.disabled = false;
    abtn.disabled = false;
    obtn.disabled = false;
    libtn.disabled = false;
    dbtn.style.background = "#00aa6c";
    abtn.style.background = "#00aa6c";
    obtn.style.background = "#00aa6c";
    libtn.style.background = "#00aa6c";
}

//call api after auto click
function callStartrecordapi() {

    console.log("startrecording api is using");
    
    var fname = $("input[name='filename']").val();;
    var cncid = $("select[name='n4cnc']").val();
    var r = $("select[name='n4ct']").val();
    var material = $("select[name='n4material']").val();
    var extendR = $("select[name='n4extendR']").val();
    var timer = $("input[name='stopwatch']").val();
            
    var sendInfo = "filename="+fname+"&n4cnc="+cncid+"&radius="+r+"&others="+extendR+"_"+material+"&time="+timer;
    
    $.ajax({
        url: "http://127.0.0.1/api/startRecording",
        type: "POST",
        data: sendInfo,
        datatype: "text",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function(data) {
            console.log(data)
        },
        error: function(textStatus){
            if(textStatus==="timeout"){
                alert("API连线逾时")
            }else{
                alert("API无法使用")
            }
        },
        timeout: 3000   
    });        
    $("#cncform").submit();   
}

function callStatusapi() {

    console.log("setStatus api is using");
    
    var fname = $("input[name='filename']").val();;
    var cncid = $("select[name='n4cnc']").val();
    var timer = $("input[name='stopwatch']").val();
    var stts = $("#normal").attr("value");

    var sendInfo = "filename="+fname+"&n4cnc="+cncid+"&time="+timer+"&status="+stts;
    
    $.ajax({
        url: "http://127.0.0.1/api/setStatus",
        type: "POST",
        data: sendInfo,
        datatype: "text",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function(data) {
            console.log(data)
        },
        error: function(textStatus){
            if(textStatus==="timeout"){
                alert("API连线逾时")
            }else{
                alert("API无法使用")
            }
        },
        timeout: 3000   
    });        
    $("#cncform").submit();   
}
