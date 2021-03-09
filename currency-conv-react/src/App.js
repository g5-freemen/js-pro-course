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
    // console.log('fetchCurrencies()');
    let result = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0').then(res => res.json());
    setCurrencies(JSON.parse(result));
    console.log('fetchCurrencies()',result);
    localStorage.setItem('currencies', JSON.stringify(result));

    // set date to localstorage
  }

  // || lastFetchDate !== +new Date().getDate()

  
  async function getCurrencies() {
    console.log('getCurrencies()');
    const cachedCurrencies = localStorage.getItem('currencies');
    const lastFetchDate = +localStorage.getItem('currenciesDate');

    try {
      if (cachedCurrencies) {
        console.log('cachedCurrencies-parse',JSON.parse(cachedCurrencies));
        const c = JSON.parse(cachedCurrencies);
        setCurrencies(c);
        console.log('FFUCKKKK',currencies);
      } else {
        console.log('try-else-fetchCurrencies');
        fetchCurrencies();
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
  console.log( 'end=>>',currencies )

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