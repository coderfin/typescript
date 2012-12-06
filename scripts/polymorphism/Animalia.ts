export import MAnimal = module('polymorphism/Animal');

export module Types { // namespace example
    export class Dog extends MAnimal.Animal {
        public commonName: string = 'dog';
        public species: string = 'canis lupus';
        private says: string;
        public imageUri: string = '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/260px-YellowLabradorLooking_new.jpg';

        constructor (says?: string) {
            super();

            this.says = says || 'bow-wow';
        }
    }

    export class Cat extends MAnimal.Animal {
        public commonName: string = 'cat';
        public species: string = 'felis catus';
        public says: string = 'meow';
        public imageUri: string = '//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg';
    }

    export class Lion extends Cat {
        public commonName: string = 'lion';
        public species: string = 'panthera leo';
        public says: string = 'roar';
        public imageUri: string = '//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/250px-Lion_waiting_in_Namibia.jpg';
    }

    export class Penguin extends MAnimal.Animal {
        public commonName: string = 'panguin';
        public species: string = 'terrified chipmunk';
        public says: string = 'I am Tux';
        public imageUri: string = '//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png';
    }
}