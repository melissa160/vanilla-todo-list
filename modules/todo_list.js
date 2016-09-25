var TodoList = (function(Events, Todo){
    var _list = [];
    var _elementId = '';
    var _publicApi = {};

    var _add = function(todoText){

        todo = Todo(todoText)

        _list.push(todo);
        Events.emit('todo_added', _publicApi);
    };

    var _onTodoCreated = function(){
        Events.on('todo_created', _add);
    }

    _init = function(){
        _onTodoCreated();
    }

    return function(elementId){
        _elementId = elementId;

        _publicApi = {
            elementId:_elementId,
            list:_list,
            add: _add,
            init: _init
        }

        return _publicApi;
    }
})(Events, Todo)