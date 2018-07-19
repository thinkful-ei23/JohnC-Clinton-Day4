'use strict';

$(function(){
  $('.thumbnail').on('click', function(event) {
    const newImg = event.currentTarget.attr('src');
    $('.hero img').attr('src', newImg);
  });
});

console.log($('.hero img').attr('src'));