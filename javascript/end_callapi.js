$(function (){
    $("#cncform button").click(function( event ){
        event.preventDefault();
        
        //call stoprecord api is in record_recordapp.js

        if($(this).attr("value")=="stoprecord"){
            
            console.log("stoprecording api is using");
            
            var fname = $("input[name='filename']").val();;
            var cncid = $("select[name='n4cnc']").val();
            var timer = $("input[name='stopwatch']").val();

            var sendInfo = "filename="+fname+"&n4cnc="+cncid+"&time="+timer
            
            $.ajax({
                url: "http://127.0.0.1/api/stopRecording",
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
        if($(this).attr("name")=="hbtn"){
            
            console.log("setStatus api is using");
            
            var fname = $("input[name='filename']").val();;
            var cncid = $("select[name='n4cnc']").val();
            var timer = $("input[name='stopwatch']").val();
            var stts = $(this).attr("value");

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
        if($(this).attr("name")=="pbtn"){
            
            console.log("setProcessType api is using");
            
            var fname = $("input[name='filename']").val();;
            var cncid = $("select[name='n4cnc']").val();
            var timer = $("input[name='stopwatch']").val();
            var pt = $(this).attr("value");

            var sendInfo = "filename="+fname+"&n4cnc="+cncid+"&time="+timer+"&processType="+pt;
            
            $.ajax({
                url: "http://127.0.0.1/api/setProcessType",
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
        if($(this).attr("name")=="misbtn"){
            
            console.log("setMislead api is using");
            
            var fname = $("input[name='filename']").val();;
            var cncid = $("select[name='n4cnc']").val();
            var timer = $("input[name='stopwatch']").val();
            var mislead = $("input[name='mislead']").val();

            var sendInfo = "filename="+fname+"&n4cnc="+cncid+"&time="+timer+"&misleadReason="+mislead;
            
            $.ajax({
                url: "http://127.0.0.1/api/setMislead",
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
    });
})
