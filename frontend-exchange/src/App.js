import './App.css';
import Hello from './component/Hello';
import MyClass from './component/MyClass';
import Name from './component/Name';
import Example from './component/Example';
import Form from './component/Form';

function App() {

  function clicked() {
    alert('Button clicked')
  }

  return (
    <div className="container">
    // <Hello name="Brian" lastname="Archibald"/>
    // <MyClass className="container" email="somethiing@me.com" myClick = {clicked}/>
    <Name/>
    <Example names = {['JS', 'Python', 'Django']}/>
    <Form/>

    </div>
  );
}

export default App;
