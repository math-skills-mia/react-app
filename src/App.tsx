import Message from './components/Message'

// App.tsx contains all the components.
// It currently only has one component: the Message component.
// Everything in our app goes here or gets connected through here.

function App() {
  return <div><Message /></div> // shorthand for <div><Message></Message></div>
}

// Exporting functions from this module allows us to use and access it from another file
export default App;

/* HMR (seen in terminal)
Automatically updates our app when we save code changes.
Appears when file is saved.
*/