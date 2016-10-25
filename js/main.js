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
        Level.current++;
        
        UI.changeColor('wait');
        UI.updateHUD(Level.current, Level.maxLevel);
        
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
        UI.updateHUD(Level.current, Level.maxLevel);
    },

    init: function() {
        Sound.load();
        Level.generateLevelList();

        document.addEventListener('keydown', Keyboard.press);
        document.addEventListener('keyup', Keyboard.release);
    }
}

Game.init();