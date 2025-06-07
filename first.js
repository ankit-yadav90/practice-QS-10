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

let student1 = new User("ankit", "abc@email.com");
let student2 = new User("aman", "aman@email.com");

let teacher1 = new User("Dean", "Dean@email.com");