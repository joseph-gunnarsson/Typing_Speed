import logo from './logo.svg';
import './App.css';
import TestingBlock from './components/TestingBlock';

function App() {
  return (
    <div className="App">
      <h1>Typing Speed</h1>
      <h2>It's time to put your typing skills to the test. Start typing in the area below to begin the test.</h2>
      <TestingBlock/>
    </div>
  );
}

export default App;
