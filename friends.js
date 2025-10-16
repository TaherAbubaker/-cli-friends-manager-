console.log("Welcome to my humble friends list");
console.log("----------------------------------");

const fs = require('fs'); 
let readline = require('readline');

console.time("Session time");
let list = [];

try {
  if (fs.existsSync('friends.json')) { 
    const data = fs.readFileSync('friends.json', 'utf8'); 
    list = JSON.parse(data);
  }
} catch (err) {
  console.log("Couldn't read friends.json, starting fresh."); 
}

function saveList() {
  fs.writeFileSync('friends.json', JSON.stringify(list, null, 2)); 
}


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askCommand() {
  rl.question("Type a command: (add/list/delete/destroy/exit) ", (answer) => {

    if (answer === "add") {
      console.clear();
      rl.question("What to add? ", (whatToAdd) => {
        let names = whatToAdd.split(" ").map(e => e.trim("")).filter(e => e !== "" && !list.includes(e))
        names.forEach(name=>{list.push(name)})
        console.log(`Added: "${whatToAdd}"`);
        saveList(); 
        askCommand();
      });
    }

    else if (answer === "list") {
      console.clear();
      if (list.length === 0) {
        console.log("Your list is empty!");
      } else {
        console.log("\nYour friends are:");
        list.forEach((friend, i) => console.log(`${i + 1}. ${friend}`));
      }
      askCommand();
    }

    else if (answer === "delete") {
  console.clear();
  rl.question("Who to delete? (separate names with commas) ", (input) => {
    const names = input.split(" ").map(name => name.trim()).filter(name => name !== "" && list.includes(name));

    names.forEach(name => {
      const index = list.indexOf(name);
      if (index !== -1) {
        list.splice(index, 1);
      }
    });
    saveList(); 
    console.log(`Deleted: ${names.join(" ")}`);
    askCommand();
  });
}

    else if (answer === "exit") {
      console.clear();
      console.timeEnd("Session time");
      console.log("Bye 👋");
      rl.close();
    }

    else if(answer === "destroy"){
      console.clear();
      list = []
      console.log("Congratulations! You destroyed the whole list.");
      saveList(); 
      askCommand();
    }

    else {
      console.log("Wrong command");
      askCommand();
    }
  });
}

askCommand();



