// Interface, Namespaces, Classes, Enums, Lambdas, and more!

// Interface
interface IWhatever {
    who: string;
    what: Object;
    when: Date;
    where: string;
    how: string;
    describe(): string;
    describe2: () => string;
}

// Namespaces are created using the keyword "module".
// To make a child object/variable visible (public) within a namespace you must use the keyword "export"
module org.byutv {
    export module Urls {
        export var baseUri = 'http://byutv.org/';
    }
}

// Class
class Whenever implements IWhatever {
    who: string;
    what: Object;
    when: Date;
    where: string;
    how: string;

    describe(): string {
        return this.who;
    }

    describe2(): string {
        return '';
    }

    // A class contructor can define class members or they can be defined outside the constructor.
    // The class members who, what, when, where, how are all defined outside the constructor above.
    // Class members that do not specify public or private are automatically considered public, we can, however, define them as private class members.
    
    // Here is a contructor that sets some class members
    constructor (public why: string, private bring: Object) { } // You do not have to declair these class members before the contructor is created, they are automatically added if declaired this way.
    
    // Or we could also do this
    /*
        private subject: string;

        constructor (newSubject: string) {
            this.subject = newSubject;
        }
    */
}

// Enum
enum suit {
    CLUB,
    DIAMOND,
    HEART,
    SPACE
}

var cardSuit: suit = suit.DIAMOND;

// Lambda
var lambda = (x: number): number => x * x;