import logo from './logo.svg';
import './App.css';
import Person  from './Components/Person';
import Boy from './Components/Boy';

function App() {
  return (
    <div className="App">
     <Person name="ram" age="26"/>
     <Person name="shyam" age="21"/>
     <Boy name="omkar" age="19"/>
    </div>
  );
}

export default App;
