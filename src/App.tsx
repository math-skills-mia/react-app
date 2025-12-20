import Message from './Message'
import ListGroup from "./components/ListGroup"

function App() {
  return <div><Message /></div> // shorthand for <div><Message></Message></div>
}

export default App; // exporting functions from this module allows us to use and access it from another file

/* HMR (seen in terminal)
Automatically updates our app when we save code changes.
Appears when file is saved.
*/