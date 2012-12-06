// when not using require.js
/// <reference path="Animal.ts" />

// -- OR --

// when using require.js
export import MIAnimal = module('polymorphism/IAnimal');

// Abstract Class
export class Animal implements MIAnimal.IAnimal { // This can also be written "export class Animal: mod.IAnimal {}"
    private says: string;
    public commonName: string;
    public species: string;
    public imageUri: string;

    public talk(): string {
        return 'The ' + this.commonName + ' (' + this.species + ') says, "' + this.says + '!"';
    }

    public toString (): string {
        return JSON.stringify(this);
    }
}