define(["require", "exports"], function(require, exports) {
    var _this = this;
    // two ways to create method declarations
    // Note: in callbacks => will map _this to the creation context 'this' (lexical scoping).
    // If you do not use => then this will not be maped.
    // See TypeScript Language Specification 4.9.2 - Arrow Function Expressions
    function A() {
        return _this;
    }
    function B() {
        return this;
    }
    var C = function () {
        return this;
    };
})
//@ sourceMappingURL=IAnimal.js.map
