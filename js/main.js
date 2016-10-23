// ========================================
//
//  Genius Dev Edition
//  Developed by Caue Queiroz
//
// ========================================
var Game = {
    allowUser: true,

    init: function() {
        document.addEventListener('keydown', Keyboard.detectKey);
        document.addEventListener('keyup', UI.releaseKey);
    }
}

Game.init();