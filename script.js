//? savebtn on click -> $(this).siblings(".userInput").val()
//? $(this).parent().attr("id")
//? localStorage.setIOtem(time, value)




function changingColor(){
  var currentHour = moment().hours()
  console.log (currentHour)
  $(".timeBlock").each(function () {
    var time = $(this).attr("id")
    time = time.substring(4)
    time = parseInt(time)
    console.log(time)

    if(currentHour > time){ //? PAST
      $(this).addClass("past")
    } else if(currentHour === time){ //? PRESENT
      $(this).removeClass("past")
      $(this).addClass("present")
    } else { //? FUTURE
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")


    }


  })



}
changingColor()



//$(#hour9).children(".userInput").val(localStorage.getItem("hour9"))