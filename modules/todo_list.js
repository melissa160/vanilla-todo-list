var TodoList = (function(Events, Todo){
    var _list = [];
    var _elementId = '';
    var _todoList = {};

    var _add = function(todoText){

        todo = Todo(todoText)

        _list.push(todo);
        // Le informo a toda la comunidad interesada que se inscribio a el evento todo_added
        Events.emit('todo_added', _todoList);
        // que justamente paso
    };

    

    var _onTodoCreated = function(){
        Events.on('todo_created', _add);//no retorna nada, crea el canal todo_created y adiciona en el array _channels la funcion _add, llama a la funcion add
    }

    _init = function(){
        _onTodoCreated();
        //ejemplo de otra funcion adicionada en al array _channels: Events.on('todo_added', function(arg){
          //  console.log('se le escucha fuerte y claro desde TodoList oye', arg)
        //})
    }

    return function(elementId){
        _elementId = elementId;

        _todoList = {
            elementId:_elementId,
            list:_list,
            add: _add,
            init: _init
        }

        return _todoList;
    }
})(Events, Todo)