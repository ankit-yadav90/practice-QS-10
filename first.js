let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA)
    }
}

class Admin extends User {
     constructor(name, email) {
            super(name, email);
     }
    editData() {
        DATA = "some new valu";
    }
}

let student1 = new User("ankit", "abc@email.com");
let student2 = new User("aman", "aman@email.com");

let teacher1 = new User("Dean", "Dean@email.com");

let admin1 = new Admin("admin", "admin@email.com");