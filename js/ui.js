// ========================================
//  UI Control
// ========================================
var UI = {
    pressKey: function(key) {
        var elem = document.querySelector('[data-key="'+key+'"]');
        
        if ( elem ) elem.classList.add('pressed');
    },

    releaseKey: function(key) {
        var elem = document.querySelector('[data-key="'+key+'"]');
        
        if ( elem ) elem.classList.remove('pressed');
    },

    changeText: function(text) {
        var message = '$ ' + text;

        document.querySelector('.main-header h2').innerHTML = message;
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
                    typeNext()
                }                
            }, 500);
        }

        setTimeout(function() {
            typeNext();
        }, 1000);        
    }
};