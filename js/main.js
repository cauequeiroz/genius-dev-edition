// ========================================
//  level
// ========================================
var Level = {
    current: 0,

    list: [
        ["s", "t", "a", "r", "t"],
        ["c", "a", "u", "e"],
        ["q", "u", "e", "i", "r", "o", "z"]
    ]
};

// ========================================
//  Keyboard
// ========================================
var Keyboard = {
    allowedKeys: {
        81: 'q', 87: 'w', 69: 'e', 82: 'r',
        84: 't', 89: 'y', 85: 'u', 73: 'i',
        79: 'o', 80: 'p', 65: 'a', 83: 's',
        68: 'd', 70: 'f', 71: 'g', 72: 'h',
        74: 'j', 75: 'k', 76: 'l', 90: 'z',
        88: 'x', 67: 'c', 86: 'v', 66: 'b',
        78: 'n', 77: 'm', 32: 'space', 13: 'enter'
    },

    position: 0
};

// ========================================
//  Game Engine
// ========================================
var Game = {

    generateLevel: [],
    generate: function(key) {
        if ( key !== 'enter' ) {
            Game.generateLevel.push(key);
        } else {
            console.log(Game.generateLevel);
            Game.generateLevel = [];
        }
    },

    detectKey: function(e) {        
        Game.generate(Keyboard.allowedKeys[e.keyCode]);

        var level = Level.list[Level.current],
            key = Keyboard.allowedKeys[e.keyCode],
            rqd = level[Keyboard.position];

        if ( key === rqd ) {
            console.log('acertou!');
            Keyboard.position++;            

            if ( Keyboard.position === level.length ) {
                if ( !Level.current ) {
                    console.log('Start Game!');
                } else {
                    console.log('Finish Level');
                }
                Keyboard.position = 0;
                Level.current++;
            }
        } else {
            console.log('errou!');
            Keyboard.position = 0;
            
            if ( Level.current ) {
                Level.current = 1;
            }
        }
    },

    init: function() {
        document.addEventListener('keydown', Game.detectKey);
    }
}

// ========================================
//  Initializate application
// ========================================
Game.init();