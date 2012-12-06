import MDefinitions = module('definitions'); // includes jquery, backbone and underscore/lodash
import MAnimal = module('polymorphism/Animal');
import MAnimalia = module('polymorphism/Animalia');
import MHanoi = module('hanoi/Hanoi');
import MMagazineRack = module('collections/dynamiclinkedlist/MagazineRack');

export function main(): void {
    /* polymorphism example */
    console.log('\n\nSTART POLYMORPHISM EXAMPLE');
    var animals: MAnimal.Animal[] = [];

    animals.push(new MAnimalia.Types.Dog());

    var japaneseDog: MAnimalia.Types.Dog = new MAnimalia.Types.Dog('wan-wan');
    japaneseDog.commonName = 'Japanese dog';
    japaneseDog.imageUri = '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Akita_inu.jpeg/220px-Akita_inu.jpeg';
    animals.push(japaneseDog);

    animals.push(new MAnimalia.Types.Cat());
    animals.push(new MAnimalia.Types.Lion());
    animals.push(new MAnimalia.Types.Penguin());

    animals.forEach((animal) => {
        var section = document.createElement('section');

        section.innerHTML = '<img src="' + animal.imageUri + '" alt="' + animal.species + '" />' +
                            '<p>' + animal.talk() + '</p>';

        document.getElementById('animals').appendChild(section);
    });
    console.log('END POLYMORPHISM EXAMPLE');

    /* class example */
    console.log('\n\nSTART HANOI EXAMPLE');
    var towers: MHanoi.Hanoi = new MHanoi.Hanoi(4);
    towers.solve();
    console.log('END HANOI EXAMPLE');

    /* dynamic linked list example */
    console.log('\n\nSTART DYNAMIC LINKED LIST EXAMPLE');
    MMagazineRack.MagazineRack.main();
    console.log('END DYNAMIC LINKED LIST EXAMPLE');

    /* definitions example */
    console.log('\n\nSTART DEFINITIONS EXAMPLE');
    _.each([3, 2, 3, 5, 6, 7], function (i) {
        console.log('Definition Example: ', i);
    });
    console.log('END DEFINITIONS EXAMPLE');
}