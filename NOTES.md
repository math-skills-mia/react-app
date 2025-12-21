# React Project Setup Guide

## Creating a New App with Vite

1. **Open Terminal**: Use system terminal or VSCode's terminal (Ctrl + `).
2. **Create Project**: Vite starts a web server. Run 'npm create vite@latest'.
3. **Follow Prompts**: Type project name (eg react-app). Use arrow keys to select React as framework. Select TypeScript or JavaScript (I'm using TypeScript).
4. **Navigate to Project Folder**: 'cd react-app'.
5. **Install all third-party libraries**: 'npm i'.
6. **Open in VSCode**: 'code .' or drag folder into VSCode.
7. **Open VSCode's Terminal**: Ctrl + ` or click Terminal in the Menu Bar.
8. **Start Web Server**: 'npm run dev'.
9. **Open Web Server in Browser**: Copy the localhost address (eg https://localhost:XXXX/) and paste it in your browser.

## How to View Your App

Whenever you need to open the webpage, run 'npm run dev', and then copy the localhost address into a browser.
Do not use VSCode Live Server through _index.html_.

## Summary of Key Files

- **node_modules**: Contains the third party libraries, no need to touch.
- **public**: Where the public assets of our website exist (eg images, video files).
- **index.html**: Empty webpage with <div id="root"></div>. The <script></script> references _main.tsx_.
- **src**: Source folder.
  - **main.tsx**: Takes the React app and puts it in the root div.
  - **App.tsx**: The container for all other components. This is technically our only component of our app so far. (We will be deleting all the code here and starting from scratch.)
- **package.json**: Information about our app.
- **tsconfig.json**: Tells typescript compiler how to compile our code to JavaScript. No need to touch usually.
- **vite.config.ts**: No need to touch usually.
- We will be making more Component files (eg Message.tsx).

## Creating a React Component

Example: Message Component

1. **Create File**: Add file to src called _Message.tsx_. This component will display a message on our webpage.
2. **Write Component**: Create the function. Export the function as a default object to be used in other modules.
3. **Use in App (App.tsx).** Clear all the code in _App.tsx_. Import your message function component. Display the message using a function. Export.
4. Check your webpage to see your app! If you don't have it open already, run 'npm run dev' and copy the localhost address in a browser.

## Using Bootstrap to Styling

Replace Default Styles with Bootstrap

1. **Clear App.css**: _App.css_ contains the styles for our app components. We will not be needing the inbuilt ones by Vite. Clear all the code in _App.css_.
2. **Delete index.css**: _index.css_ has all the global styles for our app. Delete the _index.css_ file.
3. **Update main.tsx**: Bootstrap is a popular CSS library with a bunch of CSS classes for styling our app. In _main.tsx_, replace _import './index.css'_ with _bootstrap/dist/css/bootstrap.css_.
4. Check your webpage to see your app with new font and formatting!

## Organized Folder Structure

It's convention to have all our components in a dedicated folder within the src folder called **components** (eg a new file called _ListGroup.tsx_).

## Handling Multiple Elements (Fragments)

**Problem**:
React components cannot return more than one element. We'd get an error if we tried to return the following:

```
return (
    <h1>Header</h1>
    <p>Content</p>
);
```

**Solution 1: Wrap with a Div**

```
return (
  <div>
    <h1>Header</h1>
    <p>Content</p>
  </div>
);
```

1. Select Code: Highlight the elements.
2. Bring up the **Command Palette**: Shift + Cmd + P or click View in the menu bar.
3. 'Wrap with Abbreviation' and enter.
4. Type div and enter.
   **Drawback**: Adds an extra <div> to the DOM.

**Solution 2: Use a Fragment (Better)**

```
import { Fragment } from 'react';

return (
  <Fragment>
    <h1>Header</h1>
    <p>Content</p>
  </Fragment>
);
```

1. 'import { Fragment } from "react";'.
2. Select Code: Highlight the elements.
3. Bring up the **Command Palette**. Shift + Cmd + P.
4. 'Wrap with Abbreviation' and enter.
5. Type Fragment and enter.
   **Advantage**: No extra DOM element.

**Solution 3: Short Fragment Syntax (Best)**

```
return (
  <>
    <h1>Header</h1>
    <p>Content</p>
  </>
);
```

React knows that the empty brackets means we're using a fragment to wrap all these elements.
**Advantage**: No need to import Fragment. No extra DOM element. Cleaner code.

## VS Code Shortcuts

1. Ctrl + `: Open internal terminal.
2. Cmd + P: File Search.
3. Cmd + D: Adds another cursor to matching texts.
