var Add = (function(Events){
    var _addElementId = 'add';//ancla que al darle click add un todo
    var _textElementId = 'todo-text';//input text donde se escribe el todo

    var _addListener = function(){
        var textElement = document.getElementById(_textElementId);//obtiene el todo escrito en el input text
        var addElement = document.getElementById(_addElementId);
        addElement.addEventListener('click', function(){//al darle click en add llama al event.emit y le informa a todos los modulos o cb 
            Events.emit('todo_created', textElement.value);//que esten escuchando que se debe crear un todo y le pasa el valor del input text
        })//
    }

    var _init = function(){
        _addListener();
    }

    return {
        init: _init
    }

})(Events);