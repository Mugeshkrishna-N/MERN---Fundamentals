const name = "Mugesh";
const message = `Hello, ${name}!`;
console.log(message); 
function fetchData(callback) {
    setTimeout(() => {
      callback("Student updated!");
    }, 1000);
  }
  
  fetchData((message) => {
    console.log(message); 
  });
  function counter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  
  const increment = counter();
  increment(); // Output: 1
  increment(); // Output: 2
  