import './App.css';
import React from 'react';
import Context from './context'
import InputRub from './components/InputRub';

export default function App() {

  function setCurDate() {
    localStorage.setItem('currenciesDate',new Date().getDate());
  }
  
  function getCurrencies() {
          fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
            .then(res => res.json())
            .then(currs => localStorage.setItem('currencies', JSON.stringify(currs)));
          return currencies = JSON.parse(localStorage.getItem('currencies'))
  }

  if (+localStorage.getItem('currenciesDate') !== +(new Date().getDate())) {
    localStorage.removeItem('currencies');
    getCurrencies();
    setTimeout(() => { setCurDate() }, 999);
  }

  let currencies = JSON.parse(localStorage.getItem('currencies'))

return (
  <Context.Provider value={ currencies || getCurrencies }>
    <div className="App">
      <h1>Currency Converter</h1>
      <InputRub valueBYN={0} />
    </div>
  </Context.Provider>
  )
}