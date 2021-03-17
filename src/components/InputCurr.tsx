import {useState, useEffect} from 'react';
import SelectCurrency from './SelectCurrency';

export default function InputCurr(props) {
    const { valueBYN } = props;
    const [ valueCurr, setValCurr ] = useState(valueBYN);
    const { currencies } = props.currencies;
    const [ currency, setCurr ] = useState([]);

    function onChooseCurr(choosenCur) {
        setCurr( currencies.find(item => item.Cur_Abbreviation === choosenCur) );
        calcCurrency(valueBYN);
    }

    function calcCurrency (val) {
        if (!currency.Cur_OfficialRate) return;
        setValCurr((val / currency.Cur_OfficialRate * currency.Cur_Scale).toFixed(2));
    }

    useEffect( ()=> calcCurrency( valueBYN ), [valueBYN, currency] );

    useEffect( ()=> setCurr(currencies[0] || []), [currencies] );

    return (
        <span className='input-field'>
            <input value={ valueCurr }
                   style={{ color: 'red',
                            fontWeight: 'bold'
                         }}
                   disabled
            />
        <SelectCurrency onChooseCurr={onChooseCurr} currencies={currencies}/>
        </span>
    )
}