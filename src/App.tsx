import Message from "./components/Message";
import ListGroup from "./components/ListGroup";

// App.tsx contains all the components.
// Everything in our app goes here or gets connected through here.

function App() {
  let itemlist = ["pencil", "bottle", "lightbulb"];
  return (
    <div>
      <ListGroup items={itemlist} heading="Objects" />
    </div>
  ); // shorthand for <div><ListGroup></ListGroup></div>
}

export default App;

/* HMR (seen in terminal)
Automatically updates our app when we save code changes. Appears when file is saved.
*/
