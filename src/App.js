import './App.css';
import Alert from './Alert';

function App() {
  return (
    <div className="App">
      <Alert type heading="Success" closable onClose={() => console.log("closed")}>
          Everything is really good!
      </Alert>
    </div>
  );
}

export default App;
