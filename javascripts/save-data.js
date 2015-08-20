define(function(require){
  var $ = require("jquery");

  
//  $("#visited").click(function() {
//    newLocation.visited = true;
//  });
//
//  $("#wish-list").click(function() {
//    newLocation.visited = false;
//  });

  $(document).on("click", "#send-my-shit", function(){
    console.log('clicked my shit');
    
    var newLocation = {
      location: $('.location-name').val(),
      location_type: $('.location-type').val(),
      to_do: $('.to-do').val()
    };



    $.ajax({
      url: "https://trippin-nss-tanner.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    }).done(function(newData){
      console.log(newData);
    })
    .fail(function(xhr, status, error){
      console.log(error);
    });
  });
});