var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes();
var time = moment().format("dddd, MMMM Do")
$("#currentDay").text(time);


function changingColor() {
  var currentHour = moment().hours();
  console.log(currentHour);
  $(".timeBlock").each(function () {
    var time = $(this).attr("id");
    time = time.substring(4);
    time = parseInt(time);
    console.log(time);

    if (currentHour > time) {
      //? PAST
      $(this).addClass("past");
    } else if (currentHour === time) {
      //? PRESENT
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      //? FUTURE
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
$(".saveBtn").on("click", function () {
  var toDoText = $(this).siblings(".userInput").val();
  var toDoId = $(this).parent().attr("id");
  localStorage.setItem(toDoId, toDoText);
});

changingColor();

$("#hour9").children(".userInput").val(localStorage.getItem("hour9"));
$("#hour10").children(".userInput").val(localStorage.getItem("hour10"));
$("#hour11").children(".userInput").val(localStorage.getItem("hour11"));
$("#hour12").children(".userInput").val(localStorage.getItem("hour12"));
$("#hour13").children(".userInput").val(localStorage.getItem("hour13"));
$("#hour14").children(".userInput").val(localStorage.getItem("hour14"));
$("#hour15").children(".userInput").val(localStorage.getItem("hour15"));
$("#hour16").children(".userInput").val(localStorage.getItem("hour16"));
$("#hour17").children(".userInput").val(localStorage.getItem("hour17"));
