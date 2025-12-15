import './Slot.css'
import styles from './Slot.css'
import { CasinoOutlined } from '@mui/icons-material'

interface SlotProps{
    number:number
}

export const Slot = ({number=0}:SlotProps) =>{

    if(number != 0){
   const id = `_${number}`
    return(
         <label htmlFor={id}>{number}<input type='checkbox' id={id} /></label>
    );

} else {
        return(
         <label htmlFor='dice'><CasinoOutlined  /><input type='checkbox' id='dice' /></label>
    );
    };
};
