//canal de comunicacion
var Events = (function(){

    var _channels = {};
    /*
    {
        todo_added: [
            function1,
            function2,
            function3
        ],
        todo_deleted: [
            function4,
            function5
        ],
        todo_edited: [
            function6
            function7
            function8
            function9
        ]
    }
    */
    //escuchar eventos o subscribirse a eventos y llamar un cb
    // crea o adiciona callbacks a el attributo channel del obeto _channels
    var _on = function(channel, cb){
        if( typeof cb !== 'function'){
            throw new Error('Events on callback must be a function');
            return;
        }
        //insertar cb a cada canal
        _channels[channel] = _channels[channel] || [];
        _channels[channel].push(cb);
    }

    //emitir un evento sobre el canal, para informar a los cb que esten escuchando el canal
    //arg -->valor a pasar por el canal
    //channell-->todo_deleted, todo_edited...
    var _emit = function(channel, arg){
        if(typeof _channels[channel] === 'undefined'){
            throw new Error("Channel doesn't exists");
            return;
        }
        //recorrer lo que esta suscrito al canal y llamarlo
        _channels[channel].forEach(function(cb){
            cb(arg)
        });
    }

    return {
        on: _on,
        emit: _emit
    }

})();