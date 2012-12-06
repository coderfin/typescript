define(["require", "exports"], function(require, exports) {
    
    // Helper class
    var MagazineNode = (function () {
        function MagazineNode(magazine) {
            this.magazine = magazine;
            this.next = null;
        }
        return MagazineNode;
    })();
    exports.MagazineNode = MagazineNode;    
    // Dynamic Linked Listed
    var MagazineList = (function () {
        function MagazineList() {
            this.head = null;
        }
        MagazineList.prototype.add = function (magazine) {
            var node = new MagazineNode(magazine);
            var current;
            if(this.head === null) {
                this.head = node;
            } else {
                current = this.head;
                while(current.next !== null) {
                    current = current.next;
                }
                current.next = node;
            }
        };
        MagazineList.prototype.remove = function (magazine) {
            // Objects are compared by reference not value.  This will work for our advantage in deleting the node.
            // Strings, numbers, booleans, null, and undefined are compared by value.
            // NaN is never equal to itself.
            var current = this.head;
            var toDelete;
            // Check to see if it is the head we are deleting.
            if(current.magazine === magazine) {
                this.head = current.next;
            } else {
                if(current.next !== null) {
                    // Find the node to delete and re-link, if current.next is null then there will be no match (therefore the magazine is not in the list).
                    while(current.next.magazine !== magazine) {
                        current = current.next;
                    }
                    toDelete = current.next;
                    current.next = current.next.next || null;
                    toDelete.next = null;
                }
            }
        };
        MagazineList.prototype.removeAt = function (index) {
            throw 'not implemented yet';
        }// Other methods we could create
        //  InsertAt(index), InsertRange(index, list), RemoveRange(startIndex, endIndex), RemoveAll, Remove(list)
        ;
        MagazineList.prototype.toString = function () {
            var result = '';
            var current = this.head;
            while(current !== null) {
                result += current.magazine.toString() + '\n';
                current = current.next;
            }
            return result;
        };
        return MagazineList;
    })();
    exports.MagazineList = MagazineList;    
})
//@ sourceMappingURL=MagazineList.js.map
