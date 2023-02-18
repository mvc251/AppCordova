$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");
    });

    $("#flip2").click(function () {
        $("#panel2").slideDown(5000);
    });
    $("#stop").click(function () {
        $("#panel2").stop();
    });

    $("#btnAlert").click(function () {
        $("p").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});