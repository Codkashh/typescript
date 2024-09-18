/*function greet(firstName: string){
    console.log("Hello"+ firstName);
}

greet("aakash");*/


// type inference 
/*function sum(a:number, b:number): number{
    return a+b;
}

console.log(sum(10,20));*/

/*
function isLegal(age: number): boolean{
    if(age>18){
        return true;
    } else {
        return false;
    }
}

let x = isLegal(19);*/


/*function runAfter15(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter15(function() {
    console.log("hi there");
})*/


//Interfaces-->
/*interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}


function isLegal(User){
    if(User.age>18){
        return true;
    }
    else{
        return false;
    }
}

isLegal({
    firsName: "Akash",
    lastName: "sharma",
    email: "akash@gmail.com",
    Age: 23
})*/

//Array---

function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));