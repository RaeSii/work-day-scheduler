var formattedDate = moment(new Date).format('dddd MMMM Do');
$('#currentDay').text(formattedDate);

$(".btn").on("click", function () {
  var id = $(this).attr("id")

  var currentTime = id.split('-')[1]
  var eventDetails = $('#hour-' + currentTime).val()
  console.log(id, currentTime, eventDetails)
  localStorage.setItem(currentTime, eventDetails);
})

var currentTime = moment().hour()
  for (let i = 9; i <= 17; i++) {
    var userplan = localStorage.getItem(i)
    $("#hour-" + i).val(userplan)
    if(i<currentTime) {
      $("#hour-" + i).addClass("bg-primary")
    } else if( i == currentTime) {
      $("#hour-" + i).addClass("bg-secondary")
    }else{
      $("#hour-" + i).addClass("bg-warning")
    }
  }
// var saveButton = document.getElementsByTagName('button');
// var eventDetails = document.getElementsByTagName('textarea');
// 


// var d = new Date();
// var hours = d.getHours();

// var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//

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
