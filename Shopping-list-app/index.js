'use strict';

function addItem(){
    

    $('#js-shopping-list-form').submit(function(event){
        const newItem = $(event.currentTarget).find('.input').val()
        event.preventDefault()
       $('ul').append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    })

}

function checkItem() {
  $('.shopping-item-toggle').click(function(event) {
    // $(event.target).closest($('.shopping-item')).toggleClass('shopping-item__checked');
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    // console.log($(event.target).closest($('.shopping-item')));
  });
}

addItem()
checkItem()