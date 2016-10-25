// ========================================
//  level
// ========================================
var Level = {
    current: 0,

    list: [["s", "t", "a", "r", "t"]],

    getLevelKeys: function() {
        return this.list[this.current];
    },

    generateLevelList: function() {
        var list  = Keyboard.getKeys(),
            count = 2,
            keys  = [],       
            arr   = [];

        for ( var i in list ) {
            keys.push(list[i]);
        }

        for ( var i=0; i<50; i++ ) {
            for ( var j=0; j<count; j++ ) {
                var n = Math.floor(Math.random() * keys.length);

                arr.push(keys[n]);
            }

            Level.list.push(arr);
            arr = [];
            if ( i % 5 === 0 ) count++;
        }

        console.log(Level.list);
    }
};