export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    email: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.email = obj ? obj.email : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';

    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            email: this.email,
            zipCode: this.zipCode,
            city: this.city,

        };
    }
}