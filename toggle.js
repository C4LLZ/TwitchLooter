$(document).ready(function() {
    if (window.localStorage.getItem("price-box") != null) {
      var pb = window.localStorage.getItem("price-box");
      if (pb == "true") {
        $(".price-box").hide();
      }
    }
  
    $("button").click(function() {
      var v = $(".price-box").is(":visible")
      $(".price-box").fadeToggle(500, "swing");
      window.localStorage.setItem("price-box", v)
    });
  });