import {useState} from 'react';
import uuid from 'react-uuid';

export default function SelectCurrency(props) {
    const { onChooseCurr, currencies } = props;
    const [ curr, setCurr ] = useState(currencies[0]);

    function onCurrChange(ev) {
        setCurr(ev.target.value);
        onChooseCurr(ev.target.value);
    }

    return (
        <select value={curr} id="selectCurrency" onChange={onCurrChange}>
        { currencies && currencies.map(item => 
            item.Cur_ID !== 299 &&
            <option key={uuid()} value={item.Cur_Abbreviation} >
                {item.Cur_Name}
            </option> ) }
        </select>
    )
}