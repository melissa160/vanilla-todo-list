var Add = (function(Events){
    var _addElementId = 'add';
    var _textElementId = 'todo-text';

    var _addListener = function(){
        var textElement = document.getElementById(_textElementId);
        var addElement = document.getElementById(_addElementId);
        addElement.addEventListener('click', function(){
            Events.emit('todo_created', textElement.value);
        })
    }

    var _init = function(){
        _addListener();
    }

    return {
        init: _init
    }

})(Events);