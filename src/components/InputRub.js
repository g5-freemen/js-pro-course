import React, {useState} from 'react';
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
        <React.Fragment>
            <span className='input-field'>
                <input value={valueBYN} onChange={onBYNChange}/>
                <span className='input-title'>BYN</span>
            </span>
            <InputCurr valueBYN={valueBYN} currencies={currencies}/>
        </React.Fragment>
    )
}