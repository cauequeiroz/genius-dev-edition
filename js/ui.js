// ========================================
//  UI Control
// ========================================
var UI = {
    changeText: function(text) {
        document.querySelector('.main-header h2').innerHTML = '$ ' + text;
    },

    changeColor: function(type, remove) {
        document.querySelector('.keyboard').classList.toggle(type);
    },

    pressKey: function(key) {
        var elem = document.querySelector('[data-key="'+key+'"]');
        
        if ( elem ) elem.classList.add('pressed');
    },

    releaseKey: function(key) {
        var elem = document.querySelector('[data-key="'+key+'"]');
        
        if ( elem ) elem.classList.remove('pressed');
    },

    type: function(keys, callback) {
        var count = 0;

        var typeNext = function() {
            UI.pressKey(keys[count]);

            setTimeout(function() {
                UI.releaseKey(keys[count]);

                if ( count === keys.length ) {
                    callback () ;    
                } else {
                    count++;
                    typeNext();
                }                
            }, 500);
        }

        setTimeout(function() { typeNext() }, 1500);
    }
};