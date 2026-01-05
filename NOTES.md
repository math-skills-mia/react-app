# React Project Setup Guide

Mia Striebeck

## Create a New App with Vite

1. **Open Terminal**: Use system terminal or VSCode's terminal (``Ctrl + ` ``).
2. **Create Project**: Run `npm create vite@latest`. (I'm using `create vite@4.1.0`).
3. **Follow Prompts**:
   - Type project name (eg `react-app`).
   - Use arrow keys to select `React` as framework.
   - Select variant (`TypeScript` or `JavaScript`). I'm using TypeScript.

4. **Navigate to Project Folder**: `cd react-app`.
5. **Install all third-party libraries**: `npm i`.
6. **Open in VSCode**: `code .` (or drag folder into VSCode) to open only this project's folder, not the full parent folder.

7. **Open VSCode's Terminal** (if not open already): ``Ctrl + ` `` or click Terminal in the Menu Bar.
8. **Start Web Server**: `npm run dev`.
9. **Open Web Server in Browser**: Copy the localhost address (eg `https://localhost:XXXX/`) and paste it in your browser.

---

## Two-Terminal Setup

Use 2 separate terminals - one for the running web server, the other for the commands to create the app.

### Terminal 1: Server

After running `npm run dev`, leave this terminal open.

- Shows live updates and errors.
- Don't type other commands here.

### Terminal 2: Commands

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

## Creating React Components

### Example: Message Component

1. **Create `components` Folder**: It's convention to have all our components in a dedicated folder called `components`. Add folder `components` to the `src` folder.
2. **Create Component File**: Let's create our first component file called `Message.tsx`! Add file `Message.tsx` to folder `components`.
3. **Write Component Code**. Eg:

```
function Message() {
  return <h1>Hello World</h1>;
}

export default Message;
```

Create the function. Export the function as a default object to be used in other modules.

4. **Use in App (App.tsx).** Clear all the code in `App.tsx`.

```
import Message from './components/Message';

function App() {
  return <Message />;
}

export default App;
```

Import your message function component. Display the message using a function. Export.

5. **Check your webpage to see your app!** If you don't have it open already, run `npm run dev` and copy the localhost address in a browser.

---

## Replace Default Styles with Bootstrap

1. **Install Bootstrap**: Bootstrap is a popular CSS library with a bunch of CSS classes for styling our app. Run `npm install bootstrap`.
2. **Clear `App.css`**: `App.css` contains Vite's inbuilt styles for our app components. We will not be needing them. Clear all the code in `App.css`.
3. **Delete `index.css`**: `index.css` has all the global styles for our app. Delete the `index.css` file.
4. **Update `main.tsx`**: In `main.tsx`, replace `import './index.css'` with `import 'bootstrap/dist/css/bootstrap.css'`.
5. **Check your webpage to see your app with new font and formatting!**

---

## Using Bootstrap Code Templates

### Copy Bootstrap Code Templates

Visit `https://getbootstrap.com` in your browser. Find the component code we need and copy the HTML template.

---

## Fixing Common Errors for React

### 1. Fixing Reserved Keywords

**Change `class` to `className`**: class is a reserved keyword for Javascript.

### 2. Parentheses for Multi-line Returns

```
// Correct (single line)
return <p>Hello.</p>;
```

```
// Incorrect (multi-line)
return
  <p>Hello.</p>;
```

```
// Correct (multi-line)
return (
  <p>This is good.</p>
);
```

(My default formatter Prettier will auto-format this).

### 3. Fragments for Multiple Elements

React components cannot return more than one element.

```
// Incorrect
return (
    <h1>Header</h1>
    <p>Content</p>
);
```

They need to either be wrapped in a parent element or Fragment.

```
// Correct
return (
  <>
    <h1>Header</h1>
    <p>Content</p>
  </>
);
```

1. **Select Code**: Highlight the elements.
2. **Wrap with Fragment**: `Ctrl + Shift + F` (I created this shortcut).

React knows that the empty brackets mean we're using a fragment to wrap all these elements.

FYI, these are also okay:

```
// Okay: Wrap with Abbreviation `div`
return (
  <div>
    <h1>Header</h1>
    <p>Content</p>
  </div>
);
// Disadvantage: adds an extra <div> element to DOM

// Okay: Wrap with Abbreviation `Fragment`
import { Fragment } from "react";

return (
  <Fragment>
    <h1>Header</h1>
    <p>Content</p>
  </Fragment>
);
// Disadvantage: must import first (but no extra element in DOM)
```

---

## VS Code Shortcuts

1. ``Ctrl + ` ``: Open internal terminal.
2. `Cmd + P`: File Search.
3. `Cmd + Shift + P`: Open Command Palette.
4. `Cmd + D`: Add multiple cursors to matching texts.
5. `Ctrl + Shift + F`: Wrap with Fragment (custom simple syntax shortcut)
6. `Cmd + Shift + V`: View Markdown Preview Panel
