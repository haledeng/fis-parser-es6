'use strice';

var ts = require('typescript');
module.exports = function(content, file, conf) {
    var _content = ts.transpileModule(new Buffer(content).toString(), {module: ts.ModuleKind.CommonJS});
    return _content.outputText;
};