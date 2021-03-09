import React, {useState, useContext, useEffect} from 'react';
import uuid from 'react-uuid';
import Context from '../context';

export default function SelectCurrency(props) {
    let currencies = useContext(Context);
    console.log(typeof currencies)
    
    // console.log(Context);
    console.log('aaa=',currencies);

    const { onChooseCurr } = props;
    const [ curr, setCurr ] = useState(currencies[0]);

    function onCurrChange(ev) {
        setCurr(ev.target.value);
        onChooseCurr(ev.target.value);
    }

    useEffect(() => {
        if (currencies && currencies.length) {
            setCurr(currencies[0].Cur_Abbreviation);
        }
    }, [currencies]);

    return (
        <select value={curr} id="selectCurrency" onChange={onCurrChange} style={{outline:'none'}}>
        { currencies.map(item => 
            item.Cur_ID !== 299 ?
            <option key={uuid()} value={item.Cur_Abbreviation} >
                {item.Cur_Name}
            </option> : null ) }
        </select>
    )
}