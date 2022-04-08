import React from 'react'
import Counter from './components/Counter'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Counter increase='Button +' decrease='Button -' />
    </div>
  );
}

export default App;
