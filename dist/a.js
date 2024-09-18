"use strict";
/*function greet(firstName: string){
    console.log("Hello"+ firstName);
}

greet("aakash");*/
function isLegal(User) {
    if (User.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firsName: "Akash",
    lastName: "sharma",
    email: "akash@gmail.com",
    Age: 23
});
