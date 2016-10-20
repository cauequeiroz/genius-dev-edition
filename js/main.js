var level = {
    current: 0,

    list: [
        ['q', 'w', 'e', 'r'],
        ['q', 'w', 'e', 'r', 't'],
    ]
}

var game = {
    allowedKeys: {
        81: 'q',
        87: 'w',
        69: 'e',
        82: 'r',
        84: 't'
    },

    position: 0,

    detectKey: function(e) {
        var key = game.allowedKeys[e.keyCode],
            rqd = level.list[level.current][game.position];

        if ( key === rqd ) {
            game.position++;
            console.log('acertou!');

            if ( game.position === level.list[level.current].length ) {
                console.log('Finish level!');
                game.position = 0;
                level.current++;
            }
        } else {
            game.position = 0;
            console.log('errou!');
        }
    },

    init: function() {
        // Detect key press
        document.addEventListener('keydown', game.detectKey);
    }
}

game.init();