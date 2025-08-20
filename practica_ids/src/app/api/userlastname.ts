export default class UserLastname {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }   

    private isValid(lastname: string) {
        if (lastname.length < 1) {
            throw new Error('lastname must be at least 1 character long');
        }
    }
}   