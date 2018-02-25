$(document).ready(function() {

// If a user clicks "Read More" on the primary column:
// have the text in the <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
// hide the "Read More" link using $.hide()

$('.readmore').click(function() {
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
  event.preventDefault();
});

// If a user clicks "Read Less" on the primary column:
// have the <p> slide up and hide the "Read Less" link using $.slideUp() and $.hide()
// show the "Read More" link using $.show()

$('.readless').click(function(){
  $('.readless').hide();
  $('.hide').slideUp();
  $('.readmore').show();
  event.preventDefault();
});

// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the <span> inside that <p> slide down and hide the "Learn More" link using $.slideDown() and $.hide()



$('.learnmore').click(function() {
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
  event.preventDefault();
});







  
});