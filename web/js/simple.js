"use strict";

$(document).ready(function() {
    var currentPanel = 0;
    var username = "";
    var password = "";

    $("#panel1").show();
    $("#panel2").hide();

    $("#button1").click(function() {
        $("#panel1").hide();
        $("#panel2").show();

        username = $("#username").val();
        password = $("#password").val();
        console.log("Details" + username + " " + password);

        $("#panel2-content").text("Username: " + username);
        $("#panel2-content").html("<br />")
        $("#panel2-content").text("Password: " + password);
    });

    $("#button2").click(function() {
        $("#panel2").hide();
        $("#panel1").show();
        currentPanel = 2;
    });

    setTimeout(function() {
        console.log("Timeout Called");
        username = "timeout name";
        password = "timeout pass";
    }, 5000);
});
