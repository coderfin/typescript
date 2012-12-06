// Namespaces are created using the keyword "module".
// To make a child object/variable visible (public) within a namespace you must use the keyword "export"
var org;
(function (org) {
    (function (byutv) {
        (function (Urls) {
            Urls.baseUri = 'http://byutv.org/';
        })(byutv.Urls || (byutv.Urls = {}));
        var Urls = byutv.Urls;
    })(org.byutv || (org.byutv = {}));
    var byutv = org.byutv;
})(org || (org = {}));
// Class
var Whenever = (function () {
    function Whenever(why, bring) {
        this.why = why;
        this.bring = bring;
    }
    // You do not have to declair these class members before the contructor is created, they are automatically added if declaired this way.
    // Or we could also do this
    /*
    private subject: string;
    
    constructor (newSubject: string) {
    this.subject = newSubject;
    }
    */
        Whenever.prototype.describe = function () {
        return this.who;
    };
    Whenever.prototype.describe2 = function () {
        return '';
    }// A class contructor can define class members or they can be defined outside the constructor.
    // The class members who, what, when, where, how are all defined outside the constructor above.
    // Class members that do not specify public or private are automatically considered public, we can, however, define them as private class members.
    // Here is a contructor that sets some class members
    ;
    return Whenever;
})();
// Enum
var suit;
(function (suit) {
    suit._map = [];
    suit._map[0] = "CLUB";
    suit.CLUB = 0;
    suit._map[1] = "DIAMOND";
    suit.DIAMOND = 1;
    suit._map[2] = "HEART";
    suit.HEART = 2;
    suit._map[3] = "SPACE";
    suit.SPACE = 3;
})(suit || (suit = {}));
var cardSuit = suit.DIAMOND;
// Lambda
var lambda = function (x) {
    return x * x;
};
//@ sourceMappingURL=Structures.js.map
