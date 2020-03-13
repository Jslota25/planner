//Current day and time
var today = moment().format("dddd, MMMM, Do YYYY, h:mm:ss a");
var time = moment().hour();

$("#today").text(today);
