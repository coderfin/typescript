// You can then do what you will with it.
// If you want to extend a native object or a property exists already on a native object from another file use "(<T>variable)"
(window).test = true;
// -- or --
(window)._gaq = (window)._gaq || [];
(window)._gaq.push([
    '_setAccount', 
    'UA-1234567-89'
]);
(window)._gaq.push([
    '_trackPageview'
]);
'test'.add('!')// test!
;
String.prototype.format = function () {
    var i, regexp, formatted = this;
    for(i = 0; i < arguments.length; ++i) {
        regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
// There are several ways to import the intellisense, etc from other files and way(s) to import if the module is declared in the same file.
// 1) When not using require.js
/*
/// <reference path='Moo.ts'/>

class Bar extends Moo.Foo {
}
*/
// 2) when using require.js
/*
// Moo.ts
export class Foo {
test: number;
}

// app.ts
import MMoo = module('Moo');
class Bar extends Moo.Foo {
test2: number;
}
*/
//http://stackoverflow.com/questions/12699940/how-can-i-import-an-external-file-with-typescript
/*
declare module "./data" {
function getData(): number;
}

import data = module("./data");

var myData = data.getData();
*/
//@ sourceMappingURL=InterfaceExtend.js.map
