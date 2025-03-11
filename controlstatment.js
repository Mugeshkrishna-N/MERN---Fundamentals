// var a=10;
// var b=20;

// if (a>b) {
//     console.log("A is the greatest");
//   } else {
//     console.log("B is the greatest");
//   }
  
//   for (let i = 0; i < a; i++) {
//         console.log(i);
//   }
  
//   while (a!=0) {
//     a--;
// }

function sayhello()
{
  let i=0;
  for(i=0;i<5;i++)
  {
    console.log("Function");
    console.log(i);
  }
}
//console.log(i);
sayhello();

const student={
  name:"Mugesh",
  rollno:"21CDR027",
  greet()
  {
    return this.rollno;
  }
}
console.log(student.name
);
let x =student.greet();
console.log(x);