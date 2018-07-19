function addItem(){
    

    $('#js-shopping-list-form').submit(function(event){
        const newItem = $(event.currentTarget).find('.input').val()
        console.log(newItem)
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

addItem()
console.log('hello');