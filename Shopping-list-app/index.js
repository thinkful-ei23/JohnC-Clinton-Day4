'use strict';

function addItem(){
    

    $('#js-shopping-list-form').submit(function(event){
        const newItem = $(event.target).find('.js-shopping-list-entry').val()
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
  $('ul').on('click','.shopping-item-toggle',function(event) {
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function deleteItem(){
    $('ul').on('click','.shopping-item-delete', function(event){
        $(event.target).closest('li').remove()
    })
}

addItem()
checkItem()
deleteItem()