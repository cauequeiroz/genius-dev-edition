// ========================================
//
//  Genius Dev Edition
//  Developed by Caue Queiroz
//
// ========================================
var Game = {
    allowUser: true,

    nextLevel: function() {
        Game.allowUser = false;
        Keyboard.position = 0;
        Level.current++;

        
        UI.changeText('level '+Level.current);        
        UI.type(Level.getLevelKeys(), function() {
            Game.allowUser = true;
        });
    },

    init: function() {
        document.addEventListener('keydown', Keyboard.press);
        document.addEventListener('keyup', Keyboard.release);
    }
}

Game.init();