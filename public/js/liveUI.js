 $('.addHotel').on('click', function(){
  if($('.hotelList').children().length < 1){
    var hotelName = $('#hotels').find(':selected').text();
    $('.hotelList')
    .append("<div class='itinerary-item'><span class='title'>" + hotelName + "</span><button class='btn btn-xs btn-danger remove btn-circle hotelRemove'>x</button></div>");
  }
 });

 $('.addRestaurant').on('click', function(){
   if($('.restaurantList').children().length < 3){
     var restaurantName = $('#restaurants').find(':selected').text();
     $('.restaurantList')
     .append("<div class='itinerary-item'><span class='title'>" + restaurantName + "</span><button class='btn btn-xs btn-danger remove btn-circle restaurantRemove'>x</button></div>");
   }
 });

 $('.addActivity').on('click', function(){
   if($('.activityList').children().length < 3){
     var activityName = $('#activities').find(':selected').text();
     $('.activityList')
     .append("<div class='itinerary-item'><span class='title'>" + activityName + "</span><button class='btn btn-xs btn-danger remove btn-circle activityRemove'>x</button></div>");
   }
 });
