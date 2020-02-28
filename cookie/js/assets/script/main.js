window.gLocalAssetContainer["main"] = function(g) { (function(exports, require, module, __filename, __dirname) {
"use strict";
var MainScene_1 = require("./MainScene");
function main(param) {
    //const DEBUG_MODE: boolean = true;
    var scene = new MainScene_1.MainScene({ game: g.game });
    g.game.pushScene(scene);
}
module.exports = main;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}