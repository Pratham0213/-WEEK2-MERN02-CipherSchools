
// ES5 is  functionally scope (var)
 // ES6 is BLock scope(let , const)
 
// var abc=10;

//Scoping
 function testing(){
   var abc=20;
   let def =100;
 console.log(abc);
 //BLOCK SCOPE
   if(1){
   let xyz='block scoped';
   console.log('Inside If',xyz);
   console.log(abc);
      }
   console.log('Outside If',xyz);
 }
testing(); // call  a function

 var name='CIpher_Schools' ;
 let year=2024; // Global SCope
  function test(){
  console.log(name);
  console.log(year);
  }
  test();
//  FUNCTION DECLARATION AND FUNCTION EXPRESSION
  
  
