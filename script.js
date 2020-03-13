//Current day and time
var today = moment().format("dddd, MMMM, Do YYYY, h:mm:ss a");
var time = moment().hour();

//Display date and time on page
$("#today").text(today);

var slots = $("#slots");
var hours = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5,];
var storage = JSON.parse(localStorage.getItem("times"));

//Put time slots on page
function timeSlots () {
    for(var i = 0; i < hours.length; i++){
    $("#slots").append(hours[i]);
    }
}

