

const save = document.querySelectorAll('.saveBtn');
$(function () {
  const save = document.querySelectorAll('.saveBtn');
  const data = document.getElementById('description');



  save.forEach(function (button) {
    button.addEventListener('click', function() {
      console.log("clicked");
    });
  });
});

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(value)
    console.log(time)
    localStorage.setItem(time, value)

  });

});



var dayJsObject = dayjs();
console.log(dayJsObject.format("D/M/YYYY h:mm A"));
$('#currentDay').append(document.createTextNode(dayJsObject));
var hour = dayJsObject.format('HH');
console.log(hour);

var time = $(this).parent().attr('id');
if ( time < hour ) {
  $(this).addClass("past");
  $(this).removeClass("present");
  $(this).removeClass("future");
}
else if ( time === hour ) {
  $(this).removeClass("past");
  $(this).addClass("present");
  $(this).removeClass("future");
}                
else {
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");

}






