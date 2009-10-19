var FILE = require("file"),
    assert = require("test/assert"),
    Mustache = require("mustache");

FILE.glob("examples/*.html").forEach(function(templatePath) {
    var testname = templatePath.match(/([^\/]+)\.html/)[1];
    exports["test_"+testname] = function() { runTest(testname); }
});

function runTest(testname) {
    var viewCode = FILE.read("examples/"+testname+".js");
    eval(viewCode);
    var view = eval("("+testname+")")
    
    var template = FILE.read("examples/"+testname+".html");
    var expect = FILE.read("examples/"+testname+".txt").trim();

    //print(require("util").repr(template))
    //print(require("util").repr(view))
    
    var result = Mustache.to_html(template, view).trim();
    
    assert.isEqual(expect, result);
}

if (require.main === module.id)
    require("test/runner").run(exports);
