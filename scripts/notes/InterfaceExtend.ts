// If a variable is defined in another file use "declare".
declare var jquery;
// You can then do what you will with it.

// If you want to extend a native object or a property exists already on a native object from another file use "(<T>variable)" 
(<any>window).test = true;

// -- or --

(<any>window)._gaq = (<any>window)._gaq || [];
(<any>window)._gaq.push(['_setAccount', 'UA-1234567-89']);
(<any>window)._gaq.push(['_trackPageview']);

// Another way to extend an object is by adding to the interface.
// The  only problem is that currently (10-26-12) the compiler doesn't like to add to objects in lib.ts (window, etc)
/*
interface Window {
    anotherBool: bool;
}

window.anotherBool = true;
*/

// But it works here!
interface String {
    add(...args: string[]): string;
}

'test'.add('!'); // test!

// -- or --

/*
* Extend the String object to handle formatting
* Inspired by http://stackoverflow.com/questions/610406/javascript-printf-string-format
* Example:
*      'Today I went to {0} at {1}.'.format("the park", "noon"); //output - Today I went to the park at noon.
*/

interface String
{
    format(...args: any[]): string;
}

String.prototype.format = function () {
    var i, regexp,
        formatted = this;

    for (i = 0; i < arguments.length; ++i) {
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