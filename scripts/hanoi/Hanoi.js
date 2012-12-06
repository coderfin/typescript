define(["require", "exports"], function(require, exports) {
    var Hanoi = (function () {
        function Hanoi(disks) {
            this.totalDisks = disks;
        }
        Hanoi.prototype.solve = function () {
            this.moveTower(this.totalDisks, 1, 3, 2);
        };
        Hanoi.prototype.moveTower = function (numDisks, start, end, temp) {
            if(numDisks === 1) {
                this.moveOneDisk(start, end);
            } else {
                this.moveTower(numDisks - 1, start, temp, end);
                this.moveOneDisk(start, end);
                this.moveTower(numDisks - 1, temp, end, start);
            }
        };
        Hanoi.prototype.moveOneDisk = function (start, end) {
            console.log('Move one disk from ' + start + ' to ' + end);
        };
        return Hanoi;
    })();
    exports.Hanoi = Hanoi;    
})
//@ sourceMappingURL=Hanoi.js.map
