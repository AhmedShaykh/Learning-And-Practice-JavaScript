Hello();

function Hello() {
    console.log('Hello from function')
};

var exp = function () {
    console.log("Hello from Expression");
}; 

console.log('exp', exp());

var double;

function double(num) {
    return(num * 2)
};

console.log(double(6));