import './App.css';
import Hello from './component/Hello';
import MyClass from './component/MyClass';

function App() {
  return (
    <div className="App">
    <Hello name="Brian" lastname="Archibald"/>
    <MyClass email="somethiing@me.com"/>
    </div>
  );
}

export default App;
