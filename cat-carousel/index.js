'use strict';

$(function(){
  $('.thumbnail').on('click', function(event) {
    const newImg = $(event.target).attr('src');
    const newAlt = $(event.target).attr('alt');
    console.log(newImg);
    $('.hero img').attr('src', newImg);
    $('.hero img').attr('alt', newAlt);
  });
});

console.log($('.hero img').attr('src'));
