// Immediately Invoked Function Expressions (IIFE)
// first execute the code

(function chai(){
    console.log("DB Connected");
})(); // ; is importent for next function run

(()=>{
    console.log("hello");
})();

((name)=>{
    console.log(`hello ${name}`);
})("santanu");