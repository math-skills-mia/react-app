// To create a react component, you can use a JavaScript class or a function
// I'm using a function-based component

function Message() {
    // This syntax is JSX: JavaScript XML (appears to be HTML code inside JavaScript)
    const name = 'Mia'
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1> // The JavaScript equivalent is React.createElement("h1", null, "Hello World");
    // If name is true (a string), return Hello name, else Hello World
}

// Package react-dom (seen in package.json) updates the virtual dom when we change something in the actual dom
// dom is the memory system of the App and the Message

export default Message;