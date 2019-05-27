$(document).ready(function () {
    $("#n4ct").change(function () {
        ctval = $("#n4ct").val();
        cncval = $("#n4cnc").val();
        mtlval = $("#n4material").val();
        rtRval = $("#n4extendR").val();
        if((ctval == 0) || (cncval == 0) ||(rtRval == 0) || (mtlval == 0)){
            $("#recordButton").prop("disabled", true);
            $("#recordButton").css("background", "#ccc");
        }else{
            $("#recordButton").prop("disabled", false);
            $("#recordButton").css("background", "green");
        }
    })
    $("#n4cnc").change(function() {
        ctval = $("#n4ct").val();
        cncval = $("#n4cnc").val();
        mtlval = $("#n4material").val();
        rtRval = $("#n4extendR").val();
        if((ctval == 0) || (cncval == 0) ||(rtRval == 0) || (mtlval == 0)){
            $("#recordButton").prop("disabled", true);
            $("#recordButton").css("background", "#ccc");
        }else{
            $("#recordButton").prop("disabled", false);
            $("#recordButton").css("background", "green");
        }
    })
    $("#n4extendR").change(function() {
        ctval = $("#n4ct").val();
        cncval = $("#n4cnc").val();
        mtlval = $("#n4material").val();
        rtRval = $("#n4extendR").val();
        if((ctval == 0) || (cncval == 0) ||(rtRval == 0) || (mtlval == 0)){
            $("#recordButton").prop("disabled", true);
            $("#recordButton").css("background", "#ccc");
        }else{
            $("#recordButton").prop("disabled", false);
            $("#recordButton").css("background", "green");
        }
    })
    $("#n4material").change(function() {
        ctval = $("#n4ct").val();
        cncval = $("#n4cnc").val();
        mtlval = $("#n4material").val();
        rtRval = $("#n4extendR").val();
        if((ctval == 0) || (cncval == 0) ||　(rtRval == 0) || (mtlval == 0)){
            $("#recordButton").prop("disabled", true);
            $("#recordButton").css("background", "#ccc");
        }else{
            $("#recordButton").prop("disabled", false);
            $("#recordButton").css("background", "green");
        }
    })
});