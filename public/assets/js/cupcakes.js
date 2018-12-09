$(function() {

    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
    
        var newDevouredState = {
          devoured: newDevoured
        };
    
        // Send the PUT request.
        $.ajax("/api/cupcakes/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newCupcake = {
          cupcake_name: $("#cupcake_name").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/cupcakes", {
          type: "POST",
          data: newCupcake
        }).then(
          function() {
            console.log("created new cupcake");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})