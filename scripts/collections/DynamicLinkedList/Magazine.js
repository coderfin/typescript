define(["require", "exports"], function(require, exports) {
    var Magazine = (function () {
        function Magazine(title) {
            this.title = title;
        }
        Magazine.prototype.toString = function () {
            return this.title;
        };
        return Magazine;
    })();
    exports.Magazine = Magazine;    
})
//@ sourceMappingURL=Magazine.js.map
