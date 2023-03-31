import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Librarys from './components/Librarys/Librarys';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Librarys></Librarys>
      <QuestionAnswer></QuestionAnswer>
    </div>
  )
}

export default App
