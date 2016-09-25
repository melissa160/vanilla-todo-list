var App = (function(ShowList, Add){

    var initialize = [
        ShowList,
        Add,
        TodoList('todo-list')
    ]

    initialize.forEach(function(module){
        module.init();
    });

})(ShowList, Add);