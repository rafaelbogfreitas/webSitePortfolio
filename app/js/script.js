$(document).ready(function(){
  //Hides the main content, leaving only the intro session displayed
  $('.content').hide();

  //creates an underline on the nav item when pages is selected
  $('#main-nav li').on('click', function (event){
    $(event.currentTarget).css({'text-decoration': 'underline', 'color':'orange'}).siblings()
    .css({'text-decoration':'none', 'color':'black'});
  });

  //Intro button 'click' event listener
  $('#intro-btn').on('click', function(){
    $('.container').show();
    $('.content').hide();
    $('.about').show();
  });

  //About button 'click' event listener
  $('#about-btn').on('click', function(){
    $('.container').hide();
    $('.content').show();
    $('.about').show();
    $('.projects').hide();
  });

  //About button 'projects' event listener
  $('#projects-btn').on('click', function(){
    $('.content').show();
    $('.container').slideUp(200);
    $('.about').hide();
    $('.projects').show();
    window.scrollTo(0, 0);
  });

  //Show more section
  $('.more').hide();
  $('.show-more').on('click', function(event){
    $(event.currentTarget).next().toggle();
    if($(event.currentTarget).html() == 'Show More +'){
      $(event.currentTarget).html('Show Less -');
    } else {
      $(event.currentTarget).html('Show More +');
    };
  }).on('mouseover', function(event){
    $(event.currentTarget).addClass('highlight');
  }).on('mouseleave', function(event){
    $(event.currentTarget).removeClass('highlight');
  });

});
