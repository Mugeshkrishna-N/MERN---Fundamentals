const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function login() {
  rl.question('Enter your username: ', (username) => {
    rl.question('Enter your password: ', (password) => {
      if (username === 'mk' && password === '1234') {
        console.log('Login successful!');
      } else {
        console.log('Invalid username or password. Try again.');
      }

      rl.close();
    });
  });
}

login();
