
var days = {}

function clearList(){
  $('.hotelList').children().remove();
  $('.restaurantList').children().remove();
  $('.activityList').children().remove();
}

function populateLists(dayNumber){
  $('.hotelList').html(days[dayNumber].hotel);
  $('.restaurantList').html(days[dayNumber].restaurants);
  $('.activityList').html(days[dayNumber].activities);
}

var Day = function(selectedDay, hotel, restaurants, activities){
  days[selectedDay] = {hotel: hotel, restaurants: restaurants, activities: activities};
}


 $('.addHotel').on('click', function(){
  if($('.hotelList').children().length < 1){
    var hotelName = $('#hotels').find(':selected').text();
    $('.hotelList')
    .append("<div class='itinerary-item'><span class='title'>" + hotelName + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>");
  }
 });

 $('.addRestaurant').on('click', function(){
   if($('.restaurantList').children().length < 3){
     var restaurantName = $('#restaurants').find(':selected').text();
     $('.restaurantList')
     .append("<div class='itinerary-item'><span class='title'>" + restaurantName + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>");
   }
 });

 $('.addActivity').on('click', function(){
   if($('.activityList').children().length < 3){
     var activityName = $('#activities').find(':selected').text();
     $('.activityList')
     .append("<div class='itinerary-item'><span class='title'>" + activityName + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>");
   }
 });

 $('.hotelList').on('click', '.btn', function(){
   $(this).parent().remove();
 })

 $('.restaurantList').on('click', '.btn', function(){
   $(this).parent().remove();
 })

 $('.activityList').on('click', '.btn', function(){
   $(this).parent().remove();
 })

 $('.day-buttons').on('click', '.addDay', function(){
   var numberOfDays = $('.day-buttons').children().length;
   var currentDay = new Day(numberOfDays-1, $('.hotelList').html(), $('.restaurantList').html(), $('.activityList').html());
   $('.current-day').removeClass('current-day');
   $('.day-buttons').append("<button class='btn btn-circle day-btn current-day'>" + numberOfDays + "</button>");
   $('.addDay').remove();
   $('.day-buttons').append("<button class='btn btn-circle addDay'>+</button>")
   $('.day-titles').append('<span id="day-title"> <span>Day ' + (numberOfDays - 1) +' <button class="btn btn-xs btn-danger removeDay btn-circle">x</button></span></span>')

   clearList();
 })

$('.day-buttons').on('click', '.day-btn', function(){
  clearList();
  $('.current-day').removeClass('current-day');
  $(this).addClass('current-day');
  if(days[$(this).text()]){
    populateLists($(this).text());
  }
})

$('.day-titles').on('click', '.removeDay', function(){
  var day = $(this).parent().text().split(" ")[1];

  if(days[day]){
    delete days[day];
    $(this).parent().parent().remove();
  }

})

