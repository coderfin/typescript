export class Hanoi {
    private totalDisks: number;

    constructor (disks: number) {
        this.totalDisks = disks;
    }

    public solve(): void {
        this.moveTower(this.totalDisks, 1, 3, 2);
    }

    private moveTower(numDisks: number, start: number, end: number, temp: number): void {
        if (numDisks === 1) {
            this.moveOneDisk(start, end);
        } else {
            this.moveTower(numDisks - 1, start, temp, end);
            this.moveOneDisk(start, end);
            this.moveTower(numDisks - 1, temp, end, start);
        }
    }

    private moveOneDisk(start: number, end: number): void {
        console.log('Move one disk from ' + start + ' to ' + end);
    }
}