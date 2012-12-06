// Strange case where I had to export my import in typescript 0.8.1.1
//https://typescript.codeplex.com/discussions/405800
export import MMagazine = module('collections/DynamicLinkedList/Magazine');

// Helper class
export class MagazineNode {
    public next: MagazineNode;
    
    constructor(public magazine: MMagazine.Magazine) {
        this.next = null;
    }
}

// Dynamic Linked Listed
export class MagazineList {
    public head: MagazineNode;

    constructor() {
        this.head = null;
    }

    public add(magazine: MMagazine.Magazine): void {
        var node: MagazineNode = new MagazineNode(magazine);
        var current: MagazineNode;
        
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        }
    }

    public remove(magazine: MMagazine.Magazine): void {
        // Objects are compared by reference not value.  This will work for our advantage in deleting the node.
        // Strings, numbers, booleans, null, and undefined are compared by value.
        // NaN is never equal to itself.
        var current: MagazineNode = this.head;
        var toDelete: MagazineNode;

        // Check to see if it is the head we are deleting.
        if (current.magazine === magazine) {
            this.head = current.next;
        } else if (current.next !== null) { // Find the node to delete and re-link, if current.next is null then there will be no match (therefore the magazine is not in the list).
            while (current.next.magazine !== magazine) {
                current = current.next;
            }

            toDelete = current.next;

            current.next = current.next.next || null;

            toDelete.next = null;
        }
    }

    public removeAt(index: number): void {
        throw 'not implemented yet';
    }

    // Other methods we could create
    //  InsertAt(index), InsertRange(index, list), RemoveRange(startIndex, endIndex), RemoveAll, Remove(list)

    public toString(): string {
        var result: string = '';
        var current: MagazineNode = this.head;

        while (current !== null) {
            result += current.magazine.toString() + '\n';
            current = current.next;
        }

        return result;
    }
}

