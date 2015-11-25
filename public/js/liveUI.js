
var days = [];
var numberOfDays =  days.length + 1;
var map = initialize_gmaps();
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

function redoButtons() {
  $('.day-buttons').children().remove();
  $('.day-titles').children().remove();
  for(var i = 1; i < days.length+1; i++){
    if(i == days.length){
      $('.day-buttons').append("<button class='btn btn-circle day-btn current-day'>" + (i) + "</button>");
    } else {
      $('.day-buttons').append("<button class='btn btn-circle day-btn'>" + (i) + "</button>");
    }
    $('.day-titles').append('<span id="day-title"> <span>Day ' + i +' <button class="btn btn-xs btn-danger removeDay btn-circle">x</button></span></span>');
  }

  $('.day-buttons').append("<button class='btn btn-circle addDay'>+</button>");

}

var getPlaceObject = function (typeOfPlace, nameOfPlace) {
        var placeCollection = window['all_' + typeOfPlace];

        return placeCollection.filter(function (place) {
            return place.name === nameOfPlace;
        })[0];

    };

var Day = function(selectedDay, hotel, restaurants, activities){
  days.push({hotel: hotel, restaurants: restaurants, activities: activities});

}


 $('.addHotel').on('click', function(){
  if($('.hotelList').children().length < 1){
    var hotelName = $('#hotels').find(':selected').text();
    $('.hotelList')
    .append("<div class='itinerary-item'><span class='title'>" + hotelName + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>");
    var placeObj = getPlaceObject('hotels', hotelName);
    drawLocation(map, placeObj.place[0].location);
  }

 });

 $('.addRestaurant').on('click', function(){
   if($('.restaurantList').children().length < 3){
     var restaurantName = $('#restaurants').find(':selected').text();
     $('.restaurantList')
     .append("<div class='itinerary-item'><span class='title'>" + restaurantName + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>");
     var placeObj = getPlaceObject('restaurants', restaurantName);
     drawLocation(map, placeObj.place[0].location);

   }
 });

 $('.addActivity').on('click', function(){
   if($('.activityList').children().length < 3){
     var activityName = $('#activities').find(':selected').text();
     $('.activityList')
     .append("<div class='itinerary-item'><span class='title'>" + activityName + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button></div>");
     var placeObj = getPlaceObject('activities', activityName);
     drawLocation(map, placeObj.place[0].location);

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
   Day(numberOfDays, $('.hotelList').html(), $('.restaurantList').html(), $('.activityList').html());
   $('.current-day').removeClass('current-day');
   $('.day-buttons').append("<button class='btn btn-circle day-btn current-day'>" + (numberOfDays+1) + "</button>");
   $('.addDay').remove();
   $('.day-buttons').append("<button class='btn btn-circle addDay'>+</button>");
   $('.day-titles').append('<span id="day-title"> <span>Day ' + numberOfDays +' <button class="btn btn-xs btn-danger removeDay btn-circle">x</button></span></span>');
   numberOfDays+=1;
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
  console.log(days[day])
  if(days[day]){
    days.splice(day-1, 1)
    numberOfDays-=1;
    redoButtons();
    $(this).parent().parent().remove();
  }
  console.log(days)
})
