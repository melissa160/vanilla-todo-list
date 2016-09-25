var Todo = (function(){

    // Private
    var _text = '';
    var _templateId = 'todo-template';
    var _textClass = 'todo-label';

    // Public
    return function(text){
        _text = text;
        return {
            text: _text,
            textClass: _textClass,
            templateId: _templateId
        };
    }

})();