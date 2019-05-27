$(document).ready(function(){
    $("#misleadbtn").click(function(){
        $("#misleadmodal").modal({
            backdrop:'static',
            keyboard: false
        });
        $("#misleadyes").prop("disabled", true);
    })
    $("#mischoice1").change(function () {
        misc1 = $("#mischoice1").val();
        misc2 = $("#mischoice2").val();
        if((misc1 == "byaccident")||(misc2 == "mislead")){
            $("#misleadyes").prop("disabled", false);
        }
    })
    $("#mischoice2").change(function () {
        misc1 = $("#mischoice1").val();
        misc2 = $("#mischoice2").val();
        if((misc1 == "byaccident")||(misc2 == "mislead")){
            $("#misleadyes").prop("disabled", false);
        }
    })
    $("#misleadmodal").on("hidden.bs.modal", function(){
        $(this).find("input[type=radio]").prop("checked", "").end();
    })
});