import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import About from './components/About';

let name = "Abisek";

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container my-3">
      <TestForm heading="Enter the text to be analyzed"/>
      <About/>
    </div>
    </>
    );
}

export default App;
