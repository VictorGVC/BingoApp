import './Slot.css'

interface SlotProps{
    number:number
}

export const Slot = ({number}:SlotProps) =>{

   const id = `_${number}`
    return(
         <label htmlFor={id}>{number}<input type='checkbox' id={id} /></label>
    )
}
