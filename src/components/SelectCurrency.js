import React, {useState, useContext} from 'react';
import uuid from 'react-uuid';
import Context from '../context';

export default function SelectCurrency(props) {
    let currencies = useContext(Context);
    const { onChooseCurr } = props;
    const [ curr, setCurr ] = useState(currencies[0].Cur_Abbreviation)

    function onCurrChange(ev) {
        setCurr(ev.target.value);
        onChooseCurr(ev.target.value);
    }

return (
    <select value={curr} id="selectCurrency" onChange={onCurrChange}>
    { currencies.map(item => 
        item.Cur_ID !== 299 ?
        <option key={uuid()} value={item.Cur_Abbreviation} >
            {item.Cur_Name}
        </option> : null ) }
    </select>
)

}