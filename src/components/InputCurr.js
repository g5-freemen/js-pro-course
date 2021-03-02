import React, {useState, useEffect, useContext} from 'react';
import SelectCurrency from './SelectCurrency';
import Context from '../context';

export default function InputCurr(props) {
    const { valueBYN, onInputCurr } = props;
    const currencies = useContext(Context);
    const [ valueCurr, setValCurr ] = useState(valueBYN);
    const [ currency, setCurr ] = useState(currencies[0]);

    const onChangeCurr = (ev) => {
        if (!+ev.target.value) return;
        setValCurr(+ev.target.value);
        onInputCurr(+ev.target.value);
    };

    const onChooseCurr = (val) => {
        console.log('val=',val);
        setCurr( currencies.filter(item => item.Cur_Abbreviation===val)[0] );
        calcCurrency(valueBYN);
    }

    const calcCurrency = (val) => setValCurr((val / currency.Cur_OfficialRate * currency.Cur_Scale).toFixed(2));

    useEffect( ()=> { calcCurrency( valueBYN ) }, [valueBYN, currency] );

    return (
        <span className='input-field'>
            <input value={ valueCurr }
                   onChange={onChangeCurr}
                   style={{color: 'red', fontWeight: 'bold' }}
                   disabled
            />
        &nbsp;<SelectCurrency onChooseCurr={onChooseCurr}/>
        </span>
    )
}