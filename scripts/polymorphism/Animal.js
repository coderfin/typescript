define(["require", "exports", 'polymorphism/IAnimal'], function(require, exports, __MIAnimal__) {
    // when not using require.js
    /// <reference path="Animal.ts" />
    // -- OR --
    // when using require.js
    var MIAnimal = __MIAnimal__;

    // Abstract Class
    var Animal = (function () {
        function Animal() { }
        Animal.prototype.talk = function () {
            return 'The ' + this.commonName + ' (' + this.species + ') says, "' + this.says + '!"';
        };
        Animal.prototype.toString = function () {
            return JSON.stringify(this);
        };
        return Animal;
    })();
    exports.Animal = Animal;    
})
//@ sourceMappingURL=Animal.js.map
