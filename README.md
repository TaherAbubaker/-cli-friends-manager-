# 👋 CLI Friends Manager

Welcome to **CLI Friends Manager**, a simple and interactive Node.js command-line tool to manage your friends list. 📝💻

---

## 🌟 Features

- ➕ Add one or multiple friends at once  
- ❌ Delete one or multiple friends at once  
- 📋 View a numbered list of all friends  
- 🗑️ Clear the entire list (`destroy` command)  
- 💾 Persistent storage using `friends.json`  
- ⏱️ Session timer to track how long you used the app  
- 🔤 Case-insensitive commands for convenience  

---

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/cli-friends-manager.git

🚀 Usage

Start the CLI application:

node app.js


Available commands:

Command	Description
add	➕ Add one or more friends (comma or space-separated)
list	📋 List all friends with numbering
delete	❌ Delete one or more friends (comma or space-separated)
destroy	🗑️ Clear the entire friends list
exit	👋 Exit the application

💡 Example
Type a command: add
What to add? Alice, Bob, Charlie
➕ Added: Alice, Bob, Charlie

Type a command: list
📋 You have 3 friends:
1. Alice
2. Bob
3. Charlie

Type a command: delete
Who to delete? Bob
❌ Deleted: Bob
⚠️ Not found: Dave

Type a command: destroy
🗑️ Congratulations! You just destroyed the whole list.

📝 Notes

💾 Your friends list is saved automatically in friends.json.

🔤 Commands are case-insensitive: Add, ADD, add all work.

👫 Multi-name input can be separated by spaces or commas.
