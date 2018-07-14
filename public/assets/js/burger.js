// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#new_burger").val().trim(),
            devoured: false
        }
  
      // Send the PUT request.
      $.ajax("/api/", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          console.log(newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".devour-button").on("click", function(event) {
        event.preventDefault();
       var id = $(this).attr("id-data");
        console.log("bjdwkh");
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function(data) {
        console.log("after");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});


