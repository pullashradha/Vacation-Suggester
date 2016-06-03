$(function() {
  $("form#content").submit(function(event) {
    // $(#japan, #peru, #south-africa, #switzerland, #stay-home).hide();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var season = $("select#season").val();
    var dates = $("select#dates").val();
    var budget = $("select#budget").val();
    var environment = $("select#environment").val();
    var activities = $("select#activities").val();
    var food = $("select#food").val();
    var disability = $("select#disability").val();

    if (firstName && lastName && season && dates && budget && environment && activities && food && disability) {

      if (season === "summer" && dates === "5days" || dates === "1week" && budget === "500" || budget === "1000" && environment === "rural" && activities === "nature") {
        $("#peru").show();
        $("#content").hide();
      } else if (season === "winter" && dates === "5days" || dates === "1week" && budget === "1000" || budget === "2000" && environment === "city" || environment === "both" && activities === "nature" || activities === "shopping") {
        $("#switzerland").show();
        $("#content").hide();
      } else if (season === "spring" || season === "fall" && dates === "2weeks" || dates === "3weeks" && budget === "2000" || budget === "3000" && environment === "city" && activities === "museum" || activities === "shopping") {
        $("#japan").show();
        $("#content").hide();
      } else if (season === "spring" || season === "fall" && dates === "2weeks" || dates === "3weeks" && budget === "2000" || budget === "3000" && environment === "both" && activities === "museum" || activities === "nature" || activities === "shopping") {
        $("#south-africa").show();
        $("#content").hide();
      } else {
        $("#stay-home").show();
        $("#content").hide();
      };

    } else {
      alert("Fill out every section!");
    };

    var destinationGreeting = $("input#first-name").val();

    $(".first-name").append(destinationGreeting);
    $("#destinations").show();

  event.preventDefault();
  });
});



// (season === "spring" || season === "summer" || season === "fall" || season === "winter" && dates === "5days" || dates === "1week" || dates === "2weeks" || dates === "3weeks" && budget === "500" || budget === "1000" || budget === "2000" || budget === "3000" && environment === "city" || environment === "both" || environment === "rural" && activities === "museum" || activities === "nature" || activities === "shopping") {
