// ========================================
//  Keyboard
// ========================================

var Keyboard = {
    position: 0,

    allowedKeys: {
        81: 'q', 87: 'w', 69: 'e', 82: 'r',
        84: 't', 89: 'y', 85: 'u', 73: 'i',
        79: 'o', 80: 'p', 65: 'a', 83: 's',
        68: 'd', 70: 'f', 71: 'g', 72: 'h',
        74: 'j', 75: 'k', 76: 'l', 90: 'z',
        88: 'x', 67: 'c', 86: 'v', 66: 'b',
        78: 'n', 77: 'm', 32: 'space'
    },

    getKeys: function() {
        return Keyboard.allowedKeys;
    },

    press: function(e) {
        e.preventDefault();
        if ( Game.allowUser ) {
            var level = Level.getLevelKeys(),
                key = Keyboard.allowedKeys[e.keyCode],
                rqd = level[Keyboard.position];

            UI.pressKey(key);

            if ( key === rqd ) {
                Keyboard.position++;

                if ( Keyboard.position === level.length ) Game.correctType();
            } else {
                Keyboard.position = 0;

                if ( Level.current ) Game.failType();
            }
        }
    },

    release: function(e) {
        UI.releaseKey(Keyboard.allowedKeys[e.keyCode]);
    }
};
