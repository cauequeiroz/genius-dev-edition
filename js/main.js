var level = {
    current: 0,

    list: [
        ['q', 'w', 'e', 'r'],
        ['q', 'w', 'e', 'r', 't'],
    ]
}

var game = {
    allowedKeys: {
        81: 'q', 87: 'w', 69: 'e', 82: 'r',
        84: 't', 89: 'y', 85: 'u', 73: 'i',
        79: 'o', 80: 'p', 65: 'a', 83: 's',
        68: 'd', 70: 'f', 71: 'g', 72: 'h',
        74: 'j', 75: 'k', 76: 'l', 90: 'z',
        88: 'x', 67: 'c', 86: 'v', 66: 'b',
        78: 'n', 77: 'm'
    },

    position: 0,

    detectKey: function(e) {
        var key = game.allowedKeys[e.keyCode],
            rqd = level.list[level.current][game.position];

        if ( key === rqd ) {
            // console.log('acertou!');
            game.position++;            

            if ( game.position === level.list[level.current].length ) {
                // console.log('Finish level!');
                game.position = 0;
                level.current++;
            }
        } else {
            // console.log('errou!');
            game.position = 0;            
        }
    },

    init: function() {
        // Detect key press
        document.addEventListener('keydown', game.detectKey);
    }
}

game.init();