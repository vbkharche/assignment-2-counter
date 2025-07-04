import logo from './logo.svg';
import './App.css';
import FunctionCounter from './Components/FunctionCounter';
import ClassCounter from './Components/ClassCounter';

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <h1 className="text-center mb-5">Assignment-2 Counter Application</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <ClassCounter />
          </div>
          <div className="col-md-4">
            <FunctionCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
