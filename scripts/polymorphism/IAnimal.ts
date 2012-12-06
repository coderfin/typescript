export interface IAnimal {
    species: string;
    commonName: string;
    imageUri: string;
    says: string;

    // two ways to create method declarations
    talk(): string;
    toString: () => string;
}

// Note: in callbacks => will map _this to the creation context 'this' (lexical scoping).
// If you do not use => then this will not be maped.
// See TypeScript Language Specification 4.9.2 - Arrow Function Expressions
function A() => {
	return this;
}

function B() {
	return this;
}

var C = function() {
	return this;
}