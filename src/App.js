import './App.css';
import React, {useState, useEffect} from 'react';
import Context from './context'
import InputRub from './components/InputRub';

export const AppContent = React.createContext()

export default function App() {
  const [ currencies, setCurrencies ] = useState([]);

  function setCurDate() {
    localStorage.setItem('currenciesDate',new Date().getDate());
  }

  async function fetchCurrencies () {
    let result = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0').then(res => res.json());
    setCurrencies(result);
    localStorage.setItem('currencies', JSON.stringify(result));

    // set date to localstorage
  }
  
  async function getCurrencies() {
    const cachedCurrencies = localStorage.getItem('currencies');
    const lastFetchDate = +localStorage.getItem('currenciesDate');

    try {
      if (cachedCurrencies ) {
        // || lastFetchDate !== +new Date().getDate()
        const c = JSON.parse(cachedCurrencies);
        console.log('c=',c);
        console.log('currencies=',currencies);
        setCurrencies(cachedCurrencies);
        console.log('currencies=',currencies);
      } else {
        fetchCurrencies()
      }
    } catch (e) {
      console.log('Cannot set currencies');
    }
  }

  useEffect(()=> {
    console.log('dadas')
    getCurrencies();
  }, [] );


  // let currencies = JSON.parse(localStorage.getItem('currencies'));
  console.log( currencies )

return (
  <Context.Provider value={ currencies }>
    <div className="App">
      <h1>Currency Converter</h1>
      <InputRub valueBYN={0} />
    </div>
  </Context.Provider>
  )
}

<currC>
  <App/>
</currC>