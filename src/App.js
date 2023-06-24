import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import { useState } from 'react';

function App() {
  
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#393053';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TestForm heading="Enter the text to be analyzed" mode={mode} toggleMode={toggleMode}/>
    </div>
    </>
    );
}

export default App;
