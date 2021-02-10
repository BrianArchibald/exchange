import './App.css';
import Hello from './component/Hello';
import MyClass from './component/MyClass';

function App() {

  function clicked() {
    alert('Button clicked')
  }

  return (
    <div className="App">
    <Hello name="Brian" lastname="Archibald"/>
    <MyClass email="somethiing@me.com" myClick = {clicked}/>
    </div>
  );
}

export default App;
