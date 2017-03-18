 $(document).ready(function() {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if

  });

  $(".navbar a").on('click', function(event) {

    $('.navbar-toggle').toggleClass('highlight');
    $('.collapse').collapse('hide');
 /**Add This**/

  });

  $('.navbar-toggle').click(function() {
      $(this).toggleClass('highlight');
  });


  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

  function imageresize() {
    if ($(window).width() < 480){
      $("#pic1").attr('src','images/house-back_mobile.jpg');
      $("#pic2").attr('src','images/pine2_mobile.jpg');
      $("#pic3").attr('src','images/house3_mobile.jpg');
      $("#serpic").attr('src','images/pine-shoes-mobile.jpg');
      $("#locpic").attr('src','images/dock_mobile.jpg');

    } 


    if ($(window).width() > 480 && $(window).width() < 769){
      $("#pic1").attr('src','images/house-back_ipad.jpg');
      $("#pic2").attr('src','images/pine2_ipad.jpg');
      $("#pic3").attr('src','images/house3_ipad.jpg');
    } 

    if ($(window).width() > 768){
      $("#pic1").attr('src','images/house-back.jpg');
      $("#pic2").attr('src','images/pine2.jpg');
      $("#pic3").attr('src','images/house3.jpg');

    } 

    if ($(window).width() > 480 && $(window).width() < 1025){
      $("#serpic").attr('src','images/pine-shoes-mobile.jpg');
      $("#locpic").attr('src','images/dock_mobile.jpg');
    } 

  };

  imageresize();//Activates when document first loads    

   $(window).bind("resize", function(){
        imageresize();
   });

});


  function CloseNav() {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("in");
            if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                 $('.navbar-toggle').toggleClass('highlight');
                 $(".navbar-collapse").collapse('hide');

            }
        }


$(document).on('click',function(){
      CloseNav();
      });

