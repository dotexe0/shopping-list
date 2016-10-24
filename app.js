$(document).ready(function(event){

  var state = {
    items: []
  };

  function deleteItem(state, item){
    for (var i = 0; i < state.items.length; i++){
      if (state.items[i] == item){
        state.items.splice(i, 1);
      };
    };
  };
  //add items to a hash with array items
  function addItem(state, item){
    state.items.push(item);
  };

  //publish new item in DOM
  function renderList(state, element){
    var itemsHTML = state.items.map(function(item){
    return '<li><span class="shopping-item">' + item +
           '</span><div class="shopping-item-controls">' +
           '<button class="shopping-item-toggle">' +
           '<span class="button-label">check</span>' +
          '</button> ' +
          '<button class="shopping-item-delete">'+
          '<span class="button-label">delete</span>'+
          '</button>'+
          '</div>' +
          '</li>'
    });
    element.append(itemsHTML);
  };

  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $(".shopping-list"));
  });

  //strike through shopping item. cant untoggle.
  $(document).on('click','.shopping-item-toggle', function(event){
    $(this).closest("li").find('.shopping-item').toggleClass('shopping-item__checked');
  });

  //delete shopping item. WORKS
  $(document).on('click','.shopping-item-delete', function(event){
    var itemName = $(this).closest("li").find('shopping-item').val();
    console.log(itemName);
    deleteItem(state, itemName);
    $(this).closest("li").remove();
  });
});
