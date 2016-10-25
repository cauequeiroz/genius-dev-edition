// ========================================
//  Sounds
// ========================================

var Sound = {    
    files: {
        'key': 'snd/type.wav',
        'right': 'snd/right.wav',
        'wrong': 'snd/wrong.wav'
    },

    load: function() {
        for ( var i in this.files ) {
            var effect = new Audio();
                effect.src = this.files[i];
                effect.volume = 1;
                effect.load();

            this.files[i] = effect;
        }
    },

    play: function(sound) {
        this.files[sound].currentTime = 0.0;
        this.files[sound].play();
    }
};



