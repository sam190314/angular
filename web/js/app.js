"use strict";

var myNamespace = {};

var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

myNamespace.john = new Person("John", "Doe");

myNamespace.displayPersonValues = function() {
    console.log(myNamespace.john.firstName);
    console.log(myNamespace.john.lastName);
};

//myNamespace.displayPersonValues();

console.log($("#simple-h1").attr("myAttribute"));


var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if ((httpRequest.readyState == 4) && (httpRequest.status == 200)) {
        var responseObject = JSON.parse(httpRequest.responseText);
        console.log("Response:" + responseObject.login);
    }
};

httpRequest.open("GET", "https://api.github.com/users/octocat", true);
httpRequest.send();
