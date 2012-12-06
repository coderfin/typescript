define(["require", "exports", 'collections/DynamicLinkedList/MagazineList', 'collections/DynamicLinkedList/Magazine'], function(require, exports, __MMagazineList__, __MMagazine__) {
    
    var MMagazineList = __MMagazineList__;

    var MMagazine = __MMagazine__;

    (function (MagazineRack) {
        function main() {
            TestCases.TestOne.run();
            TestCases.TestTwo.run();
            TestCases.TestThree.run();
            TestCases.TestFour.run();
            TestCases.TestFive.run();
        }
        MagazineRack.main = main;
    })(exports.MagazineRack || (exports.MagazineRack = {}));
    var MagazineRack = exports.MagazineRack;
    var TestCases;
    (function (TestCases) {
        var TestOne = (function () {
            function TestOne() { }
            TestOne.run = function run() {
                var rack = new MMagazineList.MagazineList();
                var wood = new MMagazine.Magazine('Woodworking Today');
                var house = new MMagazine.Magazine('House and Garden');
                rack.add(new MMagazine.Magazine('Time'));
                rack.add(new MMagazine.Magazine('Communications of the ACM'));
                rack.add(wood);
                rack.add(house);
                rack.add(new MMagazine.Magazine('GQ'));
                rack.remove(house);
                rack.remove(wood);
                // rack.insert(index, item); // will insert at the specified index, the new item will be item at index
                // 00xx0
                console.log('Test Case One: should have Time, Communications of the ACM and GQ \n', rack.toString());
            }
            return TestOne;
        })();
        TestCases.TestOne = TestOne;        
        var TestTwo = (function () {
            function TestTwo() { }
            TestTwo.run = function run() {
                var rack = new MMagazineList.MagazineList();
                var time = new MMagazine.Magazine("Time");
                rack.add(time);
                rack.remove(time);
                // x
                console.log('Test Case Two: should have none \n', rack.toString());
            }
            return TestTwo;
        })();
        TestCases.TestTwo = TestTwo;        
        var TestThree = (function () {
            function TestThree() { }
            TestThree.run = function run() {
                var rack = new MMagazineList.MagazineList();
                var wood = new MMagazine.Magazine('Woodworking Today');
                rack.add(new MMagazine.Magazine('Time'));
                rack.add(new MMagazine.Magazine('Communications of the ACM'));
                rack.add(wood);
                rack.remove(wood);
                // 00x
                console.log('Test Case One: should have Time and Communications of the ACM \n', rack.toString());
            }
            return TestThree;
        })();
        TestCases.TestThree = TestThree;        
        var TestFour = (function () {
            function TestFour() { }
            TestFour.run = function run() {
                var rack = new MMagazineList.MagazineList();
                var comm = new MMagazine.Magazine('Communications of the ACM');
                rack.add(new MMagazine.Magazine('Time'));
                rack.add(comm);
                rack.remove(comm);
                // 0x
                console.log('Test Case One: should have Time \n', rack.toString());
            }
            return TestFour;
        })();
        TestCases.TestFour = TestFour;        
        var TestFive = (function () {
            function TestFive() { }
            TestFive.run = function run() {
                var rack = new MMagazineList.MagazineList();
                var wood = new MMagazine.Magazine('Woodworking Today');
                var time = new MMagazine.Magazine('Time');
                rack.add(time);
                //rack.removeAt(3);
                rack.remove(wood);
                console.log('Test Case One: should have Time \n', rack.toString());
            }
            return TestFive;
        })();
        TestCases.TestFive = TestFive;        
    })(TestCases || (TestCases = {}));
})
//@ sourceMappingURL=MagazineRack.js.map
