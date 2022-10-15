export class Scan {
    scanId: string;
    userId: string;
    input: string;
    meaning: string;
    scanDate: Date;

    constructor(scanId: string, userId: string, input: string, meaning: string, scanDate: Date) {

        this.scanId = scanId;
        this.userId = userId;
        this.input = input;
        this.meaning = meaning;
        this.scanDate = scanDate;

    }
}
