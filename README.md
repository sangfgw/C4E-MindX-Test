# MindX-C4E-Test
This is MindX C4E Course Test Repository

## How to use:
- Clone Project with command: git clone https://github.com/sangfgw/C4E-MindX-Test.git
- Open project folder (C4E-MINDX-TEST) with VSCode
- Open VSCode Terminal with command: **Ctrl + Shift + `** (On Windows)
- Typing command: **npm install** (To Install Tailwind CSS Dependency)
- From your root file **(C4E-MINDX-TEST)** add **tailwind.config.js** file and copy paste this code into that file and save:
```
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
```
- Next typing command: **npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch** (To let Tailwind CSS build output CSS file and use)
- Open random HTML file from (src folder) bai1.html, bai2.html, bai3.html (with live server) to see the result
