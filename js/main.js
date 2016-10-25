// ========================================
//
//  Genius Dev Edition
//  Developed by Caue Queiroz
//
// ========================================
var Game = {
    allowUser: true,

    nextLevel: function() {
        Keyboard.position = 0;
        Level.current++;

        UI.changeText('level '+Level.current);
        
    },

    init: function() {
        document.addEventListener('keydown', Keyboard.detectKey);
        document.addEventListener('keyup', UI.releaseKey);
    }
}

Game.init();