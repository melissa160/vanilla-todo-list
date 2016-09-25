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
    var _on = function(channel, cb){
        if( typeof cb !== 'function'){
            throw new Error('Events on callback must be a function');
            return;
        }
        _channels[channel] = _channels[channel] || [];
        _channels[channel].push(cb);
    }

    var _emit = function(channel, arg){
        if(typeof _channels[channel] === 'undefined'){
            throw new Error("Channel doesn't exists");
            return;
        }
        _channels[channel].forEach(function(cb){
            cb(arg)
        });
    }

    return {
        on: _on,
        emit: _emit
    }

})();