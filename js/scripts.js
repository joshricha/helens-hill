$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
  $(".menu-text").toggleClass("menu-text-collapsed ");
});

$("a#buy-btn").click(function(e) {
  e.preventDefault();
  $(".cart").toggleClass("cart-display");
});
