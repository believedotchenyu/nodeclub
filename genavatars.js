var jdenticon = require("jdenticon");
var fs = require("fs");
var path = require('path');
var utility = require('utility');
var size = 200;

var AVATARS_PATH = path.join(__dirname, 'public', 'avatars');
if (!fs.existsSync(AVATARS_PATH)) fs.mkdirSync(AVATARS_PATH);

for(var i = 0; i < 100; i ++) {
    var value = utility.md5(i.toString());
    var png = jdenticon.toPng(value, size);
    fs.writeFileSync(path.join(AVATARS_PATH, i.toString() + '.png'), png);
}
