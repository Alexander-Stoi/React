import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Counter from './counter';
import Heading from './ReusableComponents/Heading';
import Calculator from './ReusableComponents/Calculator';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Heading title='THIS IS APPS TITLE'/> */}
      <Counter />
      <Calculator />
   
    </React.Fragment>
  );
}

export default App;
