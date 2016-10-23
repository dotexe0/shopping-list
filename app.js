$(document).ready(function(event){
  // callFunction(xxxxxx);

  var state = {
    items: []
  };

  //add items to a hash with array items
  function addItem(state, item){
    state.items.push(item);
  };

  //publish new item in DOM
  function renderList(state, element){
    var itemsHTML = state.items.map(function(item){
      return "<li>" + item + "</li>";
    });
    element.append(itemsHTML);
  };

  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $(".shopping-list"));
  });
});

//strike through shopping item. cant untoggle.
$('.shopping-item-toggle').click(function(event){
  $(this).closest("li").css("text-decoration", "line-through");
});

//delete shopping item. WORKS
$('.shopping-item-delete').click(function(event){
  $(this).closest("li").remove();
});
