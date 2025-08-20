import User from "./user";

export default class UserEmail {
    public email: User
    private fistname: string;
    private lastname: string;

    constructor(value: string) {
        this.value = value;
    }

    private isValid(email: string) {
        if (!email.includes('@')) {
            throw new Error('invalid email format');
        }
    }
}