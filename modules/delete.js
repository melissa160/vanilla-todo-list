var Delete = (function(Events){
    var _deleteElementId = 'delete';//ancla que al darle click delete un todo

    var _deleteListener = function(){
        var deleteElement = document.getElementById(_deleteElementId);
        deleteElement.addEventListener('click', function(){//al darle click en delete llama al event.emit y le informa a todos los modulos o cb 
            alert("elimine");
            Events.emit('todo_eliminated', textElement.value);//que esten escuchando que se debe crear un todo y le pasa el valor del input text
        })//
    }

    var _init = function(){
        _deleteListener();
        //Events.on('todo_added', function(arg){
          //  console.log('se le escucha fuerte y claro desde Delete oye', arg)
        //})

    }

    return {
        init: _init
    }

})(Events);