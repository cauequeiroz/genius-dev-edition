// ========================================
//  level
// ========================================

var Level = {
    score: 0,

    current: 0,

    maxLevel: 50,   

    list: [],

    getLevelKeys: function() {
        return this.list[this.current];
    },

    reset: function() {
        Level.score = Level.current;
        Level.current = 0;
        Level.generateLevelList();
    },

    generateLevelList: function() {
        Level.list = [["s", "t", "a", "r", "t"]];

        var list  = Keyboard.getKeys(),
            count = 2,
            keys  = [],       
            arr   = [];

        for ( var i in list ) {
            keys.push(list[i]);
        }

        for ( var i=0; i<=Level.maxLevel; i++ ) {
            for ( var j=0; j<count; j++ ) {
                var n = Math.floor(Math.random() * keys.length);

                arr.push(keys[n]);
            }

            Level.list.push(arr);
            arr = [];
            if ( i % 5 === 0 ) count++;
        }
    }    
};