// To create a react component, you can use either a JavaScript class or a function.
// We will be making function-based components.

// This component's job is to show a greeting. (A component can also have behavior).
function Message() {
    // This syntax is JSX: JavaScript XML (appears to be HTML code inside JavaScript)
    const name = 'Mia'
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1> // The JavaScript equivalent is React.createElement("h1", null, "Hello World");
    // If name is true (a string), return Hello name, else Hello World
}

// Dom is the actual webpage. Virtual Dom is React's "draft" of the webpage.
// Package react-dom (seen in package.json) updates the virtual dom fast by only changing what's necessary.
// No need to manage it, React does it automatically.

export default Message;