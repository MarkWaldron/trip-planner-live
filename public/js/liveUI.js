
var days = {}

var Day = function(selectedDay, hotel, restaurants, activities){
  this.selectedDay = selectedDay;
  this.hotel = hotel;
  this.restaurants = restaurants;
  this.activities = activities;
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
   var currentDay = new Day(numOfDays, $('.hotelList').html(), $('.restaurantList').html(), $('.activityList').html());


   $('.current-day').removeClass('current-day');
   $('.day-buttons').append("<button class='btn btn-circle day-btn current-day'>" + numberOfDays + "</button>");
   $('.addDay').remove();
   $('.day-buttons').append("<button class='btn btn-circle day-btn addDay'>+</button>")
 })
