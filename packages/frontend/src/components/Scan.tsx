export class Scan {
    scanId: string;
    userId: string;
    input: string;
    convoBool: boolean;
    meaning: string;
    scanDate: Date;

    constructor(scanId: string, userId: string, input: string, meaning: string, scanDate: Date, convoBool:boolean) {

        this.scanId = scanId;
        this.userId = userId;
        this.input = input;
        this.meaning = meaning;
        this.scanDate = scanDate;
        this.convoBool=convoBool;

    }
}
