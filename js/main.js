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
        if ( Level.current === Level.maxLevel ) {
            Game.win();
            return;
        }

        Game.allowUser = false;
        Keyboard.position = 0;
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
        Level.reset();
        Sound.play('wrong');
        UI.updateHUD();
    },

    win: function() {
        Game.allowUser = false;
        UI.changeColor('win');
        setTimeout(function() {
            Game.allowUser = true;
            Level.resetAll();
            UI.changeColor('win');
            UI.updateHUD();            
        }, 1000);
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