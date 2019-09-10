$(document).ready(function(){
  //Hides the main content, leaving only the intro session displayed
  $('.content').hide();

  //highlights the current page in the NAV
  $('#main-nav li').on('click', function(event){
    if($(event.currentTarget).prop('id') != 'down-arrow'){
      $(event.currentTarget).addClass('selected').siblings().removeClass('selected');
    } else if ($(event.currentTarget).prop('id') == 'down-arrow'){
      $(event.currentTarget).siblings().removeClass('selected');
    }

  })

  //Intro button 'click' event listener
  $('#intro-btn').on('click', function(){
    $('.container').show();
    $('.content').hide();
  });

  //About button 'click' event listener
  $('#about-btn').on('click', function(){
    $('.container').hide();
    $('.content').show().find('.about').show().siblings().hide();
    $('.skills-box').show();
  });

  //Projects button 'click' event listener
  $('#projects-btn').on('click', function(){
    $('.container').hide();
    $('.content').show().find('.projects').show().siblings().hide();
    window.scrollTo(0, 0);
  });

  //Contact button 'click' event listener
  $('#contact-btn').on('click', function(){
    $('.container').hide();
    $('.content').show().find('.contact').show().siblings().hide();
  });

  //Show more section
  $('.more').hide();
  $('.show-more').on('click', function(event){
    $(event.currentTarget).parent().parent().next().slideToggle(100);
    if($(event.currentTarget).html() == 'Show More +'){
      $(event.currentTarget).html('Show Less -');
    } else {
      $(event.currentTarget).html('Show More +');
    };
  }).on('mouseover', function(event){
    $(event.currentTarget).addClass('highlight').css({'color':'white'});
  }).on('mouseleave', function(event){
    $(event.currentTarget).removeClass('highlight').css({'color':'orange'});
  }).on('touchend', function(){
    $(event.currentTarget).removeClass('highlight').css({'color':'orange'});
  });

  //controls dropdown effect for the NAV in mobile version
  $('#down-arrow').on('click', function(){
    $('.dropdown-icon').toggleClass('dropdown-icon-closed');
    $('#down-arrow').siblings().slideToggle(100);
  });

  //displays the NAV if the window is rezised after using it in mobile version
  $(window).on('resize', function(){
    if(window.innerWidth > 500){
      $('#down-arrow').siblings().show();
    }
  });

  //skills box accordion effect
  $('.skills-title').on('click', function(event){
    if($(event.currentTarget).next().hasClass('hidden')){
      $('.skills-box').find('.skills-content').addClass('hidden');
      $(event.currentTarget).next().removeClass('hidden');
    } else {
      $(event.currentTarget).next().addClass('hidden');
    };
  });
  //opens/closes all sections of the skills box if double clicked
  $('.skills-box').on('dblclick', function(){
    if($('.skills-content').hasClass('hidden') == true){
      $('.skills-box').find('.skills-section').children().removeClass('hidden');
    } else {
      $('.skills-box').find('.skills-section').children('.skills-content').addClass('hidden');
    }
  });

});
