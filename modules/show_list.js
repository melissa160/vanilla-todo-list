var ShowList = (function(Events, Interpolator){
    var _render = function(todoList){
        if(!(todoList instanceof Object)){
            throw new Error("todoList must be an Object");
            return;
        }
        if(!(todoList.list instanceof Array)) {
            throw new Error("todoList.list must be an Array");
            return;
        }

        var element = document.getElementById(todoList.elementId);

        // Delete inner nodes
        element.innerHTML = '';

        var list = todoList.list;

        var renderTodo = function(todo){
            var template = document.getElementById(todo.templateId).innerHTML;
            var html = Interpolator.replace(template, {todoText: todo.text});
            var node = document.createElement('div');
            node.innerHTML = html;
            return node;
        }

        var listNodes = list.map(renderTodo);

        listNodes.forEach(function(todoNode){
            element.appendChild(todoNode);
        })

    }

    var _init = function(){
        Events.on('todo_added', function(todoList){
            _render(todoList);
        });
    }

    return {
        init: _init
    }

})(Events, Interpolator);