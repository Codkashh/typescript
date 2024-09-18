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


function runAfter15(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter15(function() {
    console.log("hi there");
})