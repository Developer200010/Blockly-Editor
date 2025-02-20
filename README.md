# 🧩 Blockly JavaScript Generator

A **Blockly-based visual programming editor** that allows users to create JavaScript code using drag-and-drop blocks. [visit BlocklyEditor](https://blocklyeditor002.netlify.app/)


## ✨ Features
- **Custom Blocks**: Includes logic, loops, and variables.
- **JavaScript Code Generator**: Converts blocks into JavaScript.
- **Run & Reset**: Execute the generated code and reset the workspace.
- **Modular Structure**: Blocks are imported from a separate file.

## 📷 Preview
![Blockly Editor Screenshot](https://media-hosting.imagekit.io//8406a072ae644cfd/Screenshot%20(14).png?Expires=1834673743&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0uppJJZ-N7Dwnic6mDkxCl3j1M0ucKkoLXdyzyZcw-JjCgQctAEoorAZOsUZlEZGEuwBRF8tqUXEeZQehTf-G1wAJdXxTOQmjY9yJk4q75LbE9T68b6bmSkxe8AoeCRdASbpWLuGKc36RaAIwHHhDdhfDDqM9bfhm3c75ZF9viDBgQm1Te4OyBWLOX0nfW0qT9IDYjnGMbnuKOkFYAGYw91HvGWW3SN3dy3yDTECWSmuZJEmsY9noZGoFz~yw3Zw44fibCZ9NiY~AuLQVWwYpjtzJcc8GtsgtzAqbiO0ZYdOZ~YppZAZ5sGgDGYiSoQwK2xqFrxCm1PGEHnfc0LE6g__)

## 🚀 Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/blockly-editor.git
   cd blockly-editor
2. **Install Dependencies**
   ```sh
   npm install
3. **Install Dependencies**
   ```sh
   npm run dev
## 📂 Project Structure
| Path                          | Description |
|--------------------------------|------------|
| `/blockly-editor`             | Root directory of the project. |
| ├── `/src`                    | Contains the source code. |
| │   ├── `/components`         | Stores React components. |
| │   │   ├── `BlockyEditor.jsx` | Main Blockly editor component, manages workspace and block execution. |
| │   │   ├── `blocklyBlocks.js` | Defines custom Blockly blocks and their JavaScript generators. |
| │   ├── `/assets`             | Stores static assets (images, styles, etc.). |
| │   ├── `App.js`              | Main app component, renders the Blockly editor. |
| │   ├── `main.jsx`            | Entry point of the application. |
| ├── `package.json`            | Project dependencies and scripts. |
| ├── `README.md`               | Documentation for setup and usage. |



