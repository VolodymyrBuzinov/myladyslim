jQuery("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});