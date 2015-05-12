"use strict";

$(document).ready(function() {
    var currentPanel = 0;

    $("#panel1").hide();
    $("#panel2").hide();

    $("#button1").click(function() {
        $("#panel2").hide();
        $("#panel1").show();
        currentPanel = 1;
    });

    $("#button2").click(function() {
        $("#panel1").hide();
        $("#panel2").show();
        currentPanel = 2;
    });
});
