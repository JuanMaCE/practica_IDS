import userEmail from "./useremail";
import UserFirstname from "./userfirstname";
import UserLastname from "./userlastname";

export default class User {
    private email: string;
    private firstname: string;
    private lastname: string;


    constructor(email: string) {
        this.email: UserEmail;
        this.firstname: UserFirstname;
        this.lastname: UserLastname;
        
    }

    public static create(email: string, firstname: string, lastname: string): User {
        const user = new User(
            new UserEmail(email),
            new UserFirstname(firstname),
            new UserLastname(lastname)
        );
    }


}