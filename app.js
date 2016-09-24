
$( ".add" ).click(function() {
  var textTodo = $(".add-text").val();
  $(".show-todo").append(textTodo);
  //addTodo(textTodo);

});

var addTodo = function(textTodo){
	$(".show-todo").append(textTodo);
}

