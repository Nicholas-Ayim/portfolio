
$(document).ready(function() {
  var word = [
    "Contact the following emails for assistance elearning@ucc.edu.gh and webmaster@ucc.edu.gh",
    "Best University in West Africa",
    "UCC is the best university in Research",
    "In the year 1990 UCC created this website"
  ];
  var i = 0;
  setInterval(function() {
    $("#words").fadeOut(function() {
      $(this).html(word[(i = (i + 1) % word.length)]).fadeIn();
    });
  }, 3000);
});
  
$(document).ready(function(){
  var reloadWords = [
    "UNIVERSITY OF COMPETITIVE CHOICE",
    " UNIVERSITY OF COME AND CRY😭😭",
    ];
    var i = 0;
    setInterval(function(){
    $("#reloadwords").fadeOut(function(){
      $(this).html(reloadWords[ (i = (i + 1) % reloadWords.length)]).fadeIn()
    });
},5000);
});

$(window).on('load',function(){
  $('.loader').fadeOut(10000);
  $('#image_size').fadeOut(10000);
  $('.header_container').fadeIn(15000)
  $('.navigation').fadeIn(15000);
});