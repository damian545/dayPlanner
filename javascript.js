var min = "nine";
var max = "seventeen";
var currHr = "";
console.log("test");
// Function for running current time at top
function dayPlanner() {
  var currentDay = $("#currentDay").text(
    moment().format("dddd, MMMM Do, h:mm A")
  );
  // For continous time

  moment().format("MMMM Do YYYY, h:mm:ss a");
  var date = new Date();
  var hours = date.getHours();

  //  JQuery to determine color of hours
  $(".time-block").each(function() {
    var elementTime = $(this).attr("data-time");
    if (hours > elementTime) {
      $(this).css("background-color", "lightseagreen");
    } else if (hours < elementTime) {
      $(this).css("background-color", "yellow");
    } else {
      $(this).css("background-color", "green");
    }
  });
}
// Function to grab current info entered into each hour
dayPlanner();
setInterval(dayPlanner, 60000);
$(".save-btn").on("click", function() {
  var elementTime = $(this)
    .parent()
    .attr("data-time");
  var currNote = $(this)
    .parent()
    .find("textarea")
    .val();
  localStorage.setItem(elementTime, currNote);
});

var x = document.getElementById("myAudio");
function playAudio() {
  x.play();
}

$(".time-block").each(function() {
  var elementTime = $(this).attr("data-time");
  var currNote = localStorage.getItem(elementTime);
  $(this)
    .find("textarea")
    .val(currNote);
});
$(document).ready(function() {
  $(window).unload(saveSettings);
  loadSettings();
});
function loadSettings();{
  $("#textarea").val(localStorage);
}
function saveSettings();{
 localStorage= $("#textarea").val();
}
$(window).on("unload", function(){
  saveSettings();
  loadSettings();
});
