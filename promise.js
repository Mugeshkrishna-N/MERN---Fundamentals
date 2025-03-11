//Promise is to check any status of the function execution to determine the process
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
        const success = true;//true // Change to false to simulate rejection

        if (success) {
            // Resolve the promise with a value
            resolve("Operation completed successfully!");
        } else {
            // Reject the promise with a reason
            reject("Operation failed!");
        }
    }, 2000); // Simulating a 2-second asynchronous operation
});

// Consuming the Promise using .then() and .catch()
myPromise.then((result) => {
    console.log("Success:", result);
}).catch((error) => {
    console.error("Error:", error);
});
