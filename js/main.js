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
        
        UI.changeText('level <strong>'+Level.current+'</strong> / 50');
        UI.changeColor('wait');
        
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
        Level.current = 0;
        Level.generateLevelList();
        Sound.play('wrong');
        Game.nextLevel();
    },

    init: function() {
        Sound.load();
        Level.generateLevelList();

        document.addEventListener('keydown', Keyboard.press);
        document.addEventListener('keyup', Keyboard.release);
    }
}

Game.init();