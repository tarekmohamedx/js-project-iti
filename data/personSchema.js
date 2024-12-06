class Person {
    static lastID = localStorage.getItem("lastIDPerson") ? +(localStorage.getItem("lastIDPerson")) : 0;//should be removed
    #id; #personName; #personEmail; #personPassword; #personAddress; #personPhone; #personRole;
    
    constructor(id, personName, personEmail, personPassword, personAddress, personPhone, personRole) {
        // debugger;
        this.id = id;
        localStorage.setItem("lastIDPerson", Person.lastID); //should be removed
        this.personName = personName;
        this.personEmail = personEmail;
        this.personPassword = personPassword;
        this.personAddress = personAddress;
        this.personPhone = personPhone;
        this.personRole = personRole;
    }

    set id(_id) {
        this.#id = _id;
    }

    set personName(_personName) {
        if (_personName.trim() == "") {
            this.#personName = "No name";
        } else {
            this.#personName = _personName.trim();
        }
    }

    set personEmail(_personEmail) {
        if (_personEmail.trim() == "") {
            this.#personEmail = "No email";
        } else {
            this.#personEmail = _personEmail.trim();
        }
    }

    set personPassword(_personPassword) {
        if (_personPassword == "") {
            this.#personPassword = "No Password";
        } else {
            this.#personPassword = _personPassword;
        }
    }

    set personAddress(personAddress) {
        if (personAddress.trim() == "") {
            this.#personAddress = "No address";
        } else {
            this.#personAddress = personAddress.trim();
        }
    }

    set personPhone(personPhone) {
        if (personPhone.trim() == "") {
            this.#personPhone = "No phone";
        } else {
            this.#personPhone = personPhone.trim();
        }
    }

    set personRole(_personRole) {
        const validRoles = ["Admin", "Customer", "Seller", "Guest"];
        if (!validRoles.includes(_personRole.trim())) {
            this.#personRole = "Guest";
        } else {
            this.#personRole = _personRole;
        }
    }

    get id() {
        return this.#id;
    }

    get personName() {
        return this.#personName;
    }

    get personEmail() {
        return this.#personEmail;
    }

    get personPassword() {
        return this.#personPassword;
    }

    get personAddress() {
        return this.#personAddress;
    }

    get personPhone() {
        return this.#personPhone;
    }

    get personRole() {
        return this.#personRole;
    }

    getPerson() {
        return {
            id: this.#id,
            personName: this.#personName,
            personEmail: this.#personEmail,
            personPassword: this.#personPassword,
            personAddress: this.#personAddress,
            personPhone: this.#personPhone,
            personRole: this.#personRole
        };
    }

    setPerson(personName, personEmail, personPassword, personAddress, personPhone, personRole) {
        this.personName = personName;
        this.personEmail = personEmail;
        this.personPassword = personPassword;
        this.personAddress = personAddress;
        this.personPhone = personPhone;
        this.personRole = personRole;
    }
}

export { Person };