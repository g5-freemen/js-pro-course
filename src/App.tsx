import './App.css';
import InputRub from './components/InputRub';
import FetchCurrencies from './components/service/FetchCurrencies';
import React, {useState, useEffect, useCallback} from 'react';

export default function App() {
  const [ currencies, setCurrencies ] = useState([]);

  const getCurrencies = useCallback(async () => {
    const currData = await FetchCurrencies.getCurrencies();
    setCurrencies(currData);
  }, []);

  useEffect( () => getCurrencies(), [] );

  return (
      <div className="App">
        <h1>Currency Converter</h1>
        <InputRub valueBYN={0} currencies={{currencies}} />
      </div>
  )
}