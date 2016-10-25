/* ========================================

    Genius Dev Edition
    Developed by Caue Queiroz

    js/ui.js: Control the view
    js/level: Generate and storage levels
    js/keyboard.js: Control keyboard input
    js/sound.js: Controll all game sounds

============================================ */

var Game = {
    allowUser: true,

    nextLevel: function() {
        Game.allowUser = false;
        Keyboard.position = 0;

        if ( Level.current === Level.maxLevel ) {
            Game.win();
            return;
        }
        
        Level.current++;
        
        UI.changeColor('wait');
        UI.updateHUD();
        
        UI.type(Level.getLevelKeys(), function() {
            UI.changeColor('wait');
            Game.allowUser = true;
        });
    },

    correctType: function() {
        Sound.play('right');
        Game.nextLevel();
    },

    failType: function() {
        Sound.play('wrong');
        Level.reset();        
        UI.updateHUD();
    },

    win: function() {
        UI.changeColor('win');

        setTimeout(function() {
            Game.allowUser = true;
            
            Level.reset();
            UI.changeColor('win');
            UI.updateHUD();            
        }, 5000);
    },

    init: function() {
        Sound.load();
        Level.generateLevelList();
        UI.updateHUD();

        document.addEventListener('keydown', Keyboard.press);
        document.addEventListener('keyup', Keyboard.release);
    }
}

Game.init();