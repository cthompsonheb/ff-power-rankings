import React from 'react';
import logo from './assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { Button } from 'antd';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <p>
          Fantasy Football Power Rankings
        </p>
        <Button type='primary' size='large' onClick={() => {navigate('/rankings')}}>Enter</Button>
      </header>
    </div>
  );
}

export default App;
