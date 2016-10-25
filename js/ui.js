// ========================================
//  UI Control
// ========================================

var UI = {
    updateHUD: function() {
        var elem = document.querySelector('.keyboard .hud');

        elem.querySelector('.current').innerHTML = Level.current;
        elem.querySelector('.max').innerHTML = Level.maxLevel;
        elem.querySelector('.best strong').innerHTML = Level.score;
    },

    changeColor: function(type) {
        document.querySelector('.keyboard').classList.toggle(type);
    },

    pressKey: function(key) {
        var elem = document.querySelector('[data-key="'+key+'"]');
        
        if ( elem ) {
            elem.classList.add('pressed');
            Sound.play('key');
        }        
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

                if ( count === keys.length-1 ) {
                    callback () ;    
                } else {
                    count++;
                    setTimeout(function() { typeNext() }, 500);
                }                
            }, 200);
        }

        setTimeout(function() { typeNext() }, 1000);
    }
};