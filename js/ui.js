// ========================================
//  UI Control
// ========================================
var UI = {
    pressKey: function(key) {
        var elem = document.querySelector('[data-key="'+key+'"]');
        
        if ( elem ) elem.classList.add('pressed');
    },

    releaseKey: function(e) {
        var key  = Keyboard.allowedKeys[e.keyCode],
            elem = document.querySelector('[data-key="'+key+'"]');
        
        if ( elem ) elem.classList.remove('pressed');
    },

    changeText: function(text) {
        var message = '$ ' + text;

        document.querySelector('.main-header h2').innerHTML = message;
    }
};