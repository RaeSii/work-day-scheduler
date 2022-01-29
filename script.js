

$(".btn").on("click",function(){
  var id= $(this).attr("id")
  console.log(id)
})



// var saveButton = document.getElementsByTagName('button');
// var eventDetails = document.getElementsByTagName('textarea');
// var formattedDate = moment(new Date).format('dddd MMMM Do');
// $('#currentDay').text(formattedDate);

// var d = new Date();
// var hours = d.getHours();

// var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// for (let i = 0; i < 7; i++) {
// if(hours > businessHours[i]) {
//     document.setElementByID('textarea').disabled;
// console.log(false);
// } else {
//   document.getElementById('hour9').style.background="red";
//   console.log(true);
// }
// };

// saveButton.addEventListener('click', saveEvent)

// function saveEvent() {
//     var newEvent = JSON.parse(localStorage.getItem('')) || [];
//     var s = document.getElementsByTagName('textarea').value;
//     var newEvent = {time, Text:Text}
//     eventDetails.push(newEvent)
//     localStorage.setItem('textarea', JSON.stringify(newEvent))
//  };



// //*function checkTime() {
//   //  var d = new Date(); // current time
//     //var hours = d.getHours();
//   //  var mins = d.getMinutes();
//     // if(hours>=23 || hours <=00)
//       //{
//         //  document.body.style.background="pink";//set background color x
//       //}
//       //else
//       //{
//        //    document.body.style.background="blue";//set background color y
//       //}

// //}



