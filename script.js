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
      $("#hour-" + i).addClass("bg-secondary")
    } else if( i == currentTime) {
      $("#hour-" + i).addClass("bg-light")
    }else{
      $("#hour-" + i).addClass("bg-info")
    }
  };