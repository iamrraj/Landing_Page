import $ from "jquery";

$(document).ready(function() {
  $(".landing_button").click(function(e) {
    e.stopPropagation();
    //e.preventDefault();
    // Coding

    $("#contactt").hide(function() {
      window.top.close();
    });
  });
});
