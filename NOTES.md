# React Project Setup Guide

Mia Striebeck

## Create a New App with Vite

1. **Open Terminal**: Use system terminal or VSCode's terminal (`` Ctrl + `  ``).
2. **Create Project**: Vite starts a web server. Run `npm create vite@latest`. I'm using `create vite@4.1.0`.
3. **Follow Prompts**:

- Type project name (eg `react-app`).
- Use arrow keys to select `React` as framework.
- Select variant (`TypeScript` or `JavaScript`). I'm using TypeScript.

4. **Navigate to Project Folder**: `cd react-app`.
5. **Install all third-party libraries**: `npm i`.
6. **Open in VSCode** (if not open already): `code .` or drag folder into VSCode.
7. **Open VSCode's Terminal** (if not open already): `` Ctrl + `  `` or click Terminal in the Menu Bar.
8. **Start Web Server**: `npm run dev`.
9. **Open Web Server in Browser**: Copy the localhost address (eg `https://localhost:XXXX/`) and paste it in your browser.

---

## Two-Terminal Setup

Use 2 separate terminals - one for the running web server, the other for the commands to create the app.

### Terminal 1 - Server:

After running `npm run dev`, leave this terminal open.

- Shows live updates and errors.
- Don't type other commands here.

### Terminal 2 - Commands:

This terminal will be used for our commands.

- **Open Second Terminal**: Click the `+` icon in the top right corner of the internal terminal pane.
- **Navigate to your app**: `cd react-app`.
- Run your commands here to begin building your app!

---

## Summary of Key Files

- **`node_modules`**: Contains installed third party libraries, no need to touch.
- **`public`**: Where the public assets of our website exist (eg images, video files).
- **`index.html`**: Empty webpage with `<div id="root"></div>`. The `<script></script>` references `_main.tsx_`.
- **`src`**: Source folder.
  - **`main.tsx`**: Takes the React app and puts it in the root div.
  - **`App.tsx`**: The container for all other components. This is technically our only component of our app so far. (We will be deleting all the code here and starting from scratch.)
- **`package.json`**: Metadata on our app.
- **`tsconfig.json`**: Tells typescript compiler how to compile our code to JavaScript. No need to touch usually.
- **`vite.config.ts`**: No need to touch usually.
- **We will be making more Component files (eg `Message.tsx`).**

---

## Creating a React Component

### Example: Message Component

1. **Create Folder**: It's convention to have all our components in a dedicated folder called `components`. Add folder `components` within the `src` folder.
2. **Create File**: Let's create our first component file called `Message.tsx`! Add file `Message.tsx` to folder `components`.
3. **Write Component**: Create the function. Export the function as a default object to be used in other modules.
4. **Use in App (App.tsx).** Clear all the code in `App.tsx`. Import your message function component. Display the message using a function. Export.
5. **Check your webpage to see your app!** If you don't have it open already, run `npm run dev` and copy the localhost address in a browser.

---

## Using Bootstrap to Styling

### Replace Default Styles with Bootstrap

1. **Install Bootstrap**: Bootstrap is a popular CSS library with a bunch of CSS classes for styling our app. Run `npm install bootstrap`.
2. **Clear `App.css`**: `App.css` contains Vite's inbuilt styles for our app components. We will not be needing them. Clear all the code in `App.css`.
3. **Delete `index.css`**: `index.css` has all the global styles for our app. Delete the `index.css` file.
4. **Update `main.tsx`**: In `main.tsx`, replace `import './index.css'` with `import 'bootstrap/dist/css/bootstrap.css'`.
5. **Check your webpage to see your app with new font and formatting!**

---

## Handling Multiple Elements (Fragments)

### The Problem:

React components cannot return more than one element. We'd get an error if we tried to return the following:

```
return (
    <h1>Header</h1>
    <p>Content</p>
);
```

### Solution 1: Wrap with a Div

```
return (
  <div>
    <h1>Header</h1>
    <p>Content</p>
  </div>
);
```

1. Select Code: Highlight the elements.
2. Open the Command Palette: `Shift + Cmd + P` or click `View` in the menu bar.
3. 'Wrap with Abbreviation' and enter.
4. Type `div` and enter.

_Drawback_: Adds extra `<div>` to the DOM.

### Solution 2: Use Fragment (Better)

```
import { Fragment } from 'react';

return (
  <Fragment>
    <h1>Header</h1>
    <p>Content</p>
  </Fragment>
);
```

1. `import { Fragment } from "react";`.
2. Select Code: Highlight the elements.
3. Open the Command Palette. `Shift + Cmd + P`.
4. `Wrap with Abbreviation` and enter.
5. Type `Fragment` and enter.

_Advantage_: No extra DOM element.

### Solution 3: Short Fragment Syntax (Best)

```
return (
  <>
    <h1>Header</h1>
    <p>Content</p>
  </>
);
```

React knows that the empty brackets mean we're using a fragment to wrap all these elements.

_Advantages_: No need to import Fragment. No extra DOM element. Cleaner code.

---

## VS Code Shortcuts

1. `` Ctrl + `  ``: Open internal terminal.
2. `Cmd + P`: File Search.
3. `Cmd + D`: Add multiple cursors to matching texts.
