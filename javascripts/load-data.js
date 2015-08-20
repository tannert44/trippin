define(function(require){
  var firebase = require("firebase");
  var $ = require("jquery");
  var templates = require("get-templates");

  var firebaseRef = new Firebase("https://trippin-nss-tanner.firebaseio.com/");
  firebaseRef.child("trips").on("value", function(snapshot){
    var trips = snapshot.val();
    console.log(trips);

    console.log(templates);


    var populateTemplate = templates.tripTpl(trips);
    $(".list-of-trips").html(populateTemplate);
  });
});