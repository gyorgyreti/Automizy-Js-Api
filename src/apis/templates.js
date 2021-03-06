define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Templates = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.templates
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };

    var p = Templates.prototype;

    p.copy = function (id, data, done) {
        var t = this;
        var data = data || {};
        data.copyData = data.copyData || {};
        var done = done || function(){};
        return t.getRecordById(id).done(function(getData){
            var insertData = {
                name:data.name || ((data.copyData.prefix || '') + getData.name + (data.copyData.suffix || '')),
                editorCode:data.editorCode || getData.editorCode,
                htmlCode:data.htmlCode || getData.htmlCode,
                maxWidth:data.maxWidth || getData.maxWidth
            };
            return t.insert(insertData).done(function(localData){
                done.apply(t, [localData]);
            });
        });
    };

    
    $AA.initBasicFunctions(Templates, "Templates");

});