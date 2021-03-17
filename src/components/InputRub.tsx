import {useState} from 'react';
import InputCurr from './InputCurr';

export default function InputRub(props) {
    const [ valueBYN, setBYN ] = useState(+props.valueBYN);
    const { currencies } = props;

    const onBYNChange = (ev) => {
        if (ev.target.value === '') setBYN(0)
        else if (!Number(+ev.target.value)) return;
        
        setBYN(+ev.target.value);
    };

    return (
        <div className='container'>
            <span className='input-field'>
            <input value={valueBYN} onChange={onBYNChange}/>
            &nbsp;BYN</span>
            <InputCurr valueBYN={valueBYN} currencies={currencies}/>
        </div>
    )
}