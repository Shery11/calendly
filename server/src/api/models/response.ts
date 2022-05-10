export class Response {


    constructor(success: Boolean, data: any) {
        this.success = success;
        this.data = success ? data : null;
        this.error = success ? null : data;
    }

    success: Boolean
    data: any
    error: any

}