import MDefinitions = module('definitions');
import MMagazineList = module('collections/DynamicLinkedList/MagazineList');
import MMagazine = module('collections/DynamicLinkedList/Magazine');

export module MagazineRack {
    export function main(): void {
        TestCases.TestOne.run();
        TestCases.TestTwo.run();
        TestCases.TestThree.run();
        TestCases.TestFour.run();
        TestCases.TestFive.run();
    }
}

module TestCases {
    export class TestOne {
        public static run(): void {
            var rack: MMagazineList.MagazineList = new MMagazineList.MagazineList();

            var wood: MMagazine.Magazine = new MMagazine.Magazine('Woodworking Today');
            var house: MMagazine.Magazine = new MMagazine.Magazine('House and Garden');

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
    }

    export class TestTwo {
        public static run(): void {
            var rack: MMagazineList.MagazineList = new MMagazineList.MagazineList();

            var time: MMagazine.Magazine = new MMagazine.Magazine("Time");

            rack.add(time);
    
            rack.remove(time);

            // x
            console.log('Test Case Two: should have none \n', rack.toString());
        }
    }

    export class TestThree {
        public static run(): void {
            var rack: MMagazineList.MagazineList = new MMagazineList.MagazineList();

            var wood: MMagazine.Magazine = new MMagazine.Magazine('Woodworking Today');

            rack.add(new MMagazine.Magazine('Time'));
            rack.add(new MMagazine.Magazine('Communications of the ACM'));
            rack.add(wood);
    
            rack.remove(wood);
    
            // 00x
            console.log('Test Case One: should have Time and Communications of the ACM \n', rack.toString());
        }
    }

    export class TestFour {
        public static run(): void {
            var rack: MMagazineList.MagazineList = new MMagazineList.MagazineList();

            var comm: MMagazine.Magazine = new MMagazine.Magazine('Communications of the ACM');

            rack.add(new MMagazine.Magazine('Time'));
            rack.add(comm);
    
            rack.remove(comm);

            // 0x
            console.log('Test Case One: should have Time \n', rack.toString());
        }
    }

    export class TestFive {
        public static run(): void {
            var rack: MMagazineList.MagazineList = new MMagazineList.MagazineList();

            var wood: MMagazine.Magazine = new MMagazine.Magazine('Woodworking Today');
            var time: MMagazine.Magazine = new MMagazine.Magazine('Time');

            rack.add(time);
    
            //rack.removeAt(3);
            rack.remove(wood);
    
            console.log('Test Case One: should have Time \n', rack.toString());
        }
    }
}