// ========================================
//  level
// ========================================
var Level = {
    current: 0,

    list: [
        ["s", "t", "a", "r", "t"],
        ["c", "a", "u", "e"],
        ["q", "u", "e", "i", "r", "o", "z"]
    ],

    getLevelKeys: function() {
        return this.list[this.current];
    }
};