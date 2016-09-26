var App = (function(ShowList, Add, Delete){

    var initialize = [
        ShowList,
        Add,
        TodoList('todo-list'),
        Delete
    ]

    initialize.forEach(function(module){
        module.init();
    });

})(ShowList, Add, Delete);