import React, {useState} from 'react';
import InputCurr from './InputCurr';

export default function InputRub(props) {
    const [valueBYN, setBYN] = useState(+props.valueBYN);

    const onBYNChange = (ev) => {
        if (ev.target.value != +ev.target.value) return;
        setBYN(+ev.target.value);
    };

    function onInputCurr(ev) {
        console.log('ALARM= ',ev)
    }

    return (
        <div className='container'>
            <span className='input-field'>
            <input value={valueBYN} onChange={onBYNChange}/>
            &nbsp;BYN</span>
            <InputCurr valueBYN={valueBYN} onInputCurr={onInputCurr} />
        </div>
    )
}