$(document).ready(function(){
  //Hides the main content, leaving only the intro session displayed
  $('.content').hide();

  $('#main-nav li').on('click', function (event){
    $(event.currentTarget).css({'text-decoration': 'underline'}).siblings()
    .css({'text-decoration':'none'});
  });

  //Intro button 'click' event listener
  $('#intro-btn').on('click', function(){
    $('.container').slideDown(200);
    $('.content').hide();
    $('.about').show();
  });

  //About button 'click' event listener
  $('#about-btn').on('click', function(){
    $('.container').slideUp(200);
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
