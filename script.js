// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
  // this syntax will keep the function alert for any clicks that occur
  $('.saveBtn').on('click', function () {
    // once a specific saveBtn is clicked it will look for the sibling and parent related to that saveBtn to help produce the following variables of time and value
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(value)
    console.log(time)
    localStorage.setItem(time, value)


  });

});



const dayJsObject = dayjs();
console.log(dayJsObject.format("D/M/YYYY h:mm A"));
$('#currentDay').append(document.createTextNode(dayJsObject));





//  didn't work
// function fun1() {
//   console.log(data.value)
// }
// not even close
// save.forEach.addEventListener('click', fun1 );
// 
// save.forEach(function () {
//   save.addEventListener('click', function() {
//     console.log(data.value);
//   } )
// })




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

