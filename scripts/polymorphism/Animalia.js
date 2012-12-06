var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'polymorphism/Animal'], function(require, exports, __MAnimal__) {
    var MAnimal = __MAnimal__;

    (function (Types) {
        // namespace example
        var Dog = (function (_super) {
            __extends(Dog, _super);
            function Dog(says) {
                        _super.call(this);
                this.commonName = 'dog';
                this.species = 'canis lupus';
                this.imageUri = '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/260px-YellowLabradorLooking_new.jpg';
                this.says = says || 'bow-wow';
            }
            return Dog;
        })(MAnimal.Animal);
        Types.Dog = Dog;        
        var Cat = (function (_super) {
            __extends(Cat, _super);
            function Cat() {
                _super.apply(this, arguments);

                this.commonName = 'cat';
                this.species = 'felis catus';
                this.says = 'meow';
                this.imageUri = '//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg';
            }
            return Cat;
        })(MAnimal.Animal);
        Types.Cat = Cat;        
        var Lion = (function (_super) {
            __extends(Lion, _super);
            function Lion() {
                _super.apply(this, arguments);

                this.commonName = 'lion';
                this.species = 'panthera leo';
                this.says = 'roar';
                this.imageUri = '//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/250px-Lion_waiting_in_Namibia.jpg';
            }
            return Lion;
        })(Cat);
        Types.Lion = Lion;        
        var Penguin = (function (_super) {
            __extends(Penguin, _super);
            function Penguin() {
                _super.apply(this, arguments);

                this.commonName = 'panguin';
                this.species = 'terrified chipmunk';
                this.says = 'I am Tux';
                this.imageUri = '//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png';
            }
            return Penguin;
        })(MAnimal.Animal);
        Types.Penguin = Penguin;        
    })(exports.Types || (exports.Types = {}));
    var Types = exports.Types;
})
//@ sourceMappingURL=Animalia.js.map
