import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import {Checkbox, Stack, Card, Box, Typography} from '@mui/material'
import styles from '../column.module.css'

interface ColumnProps {
    Slot1: number
    Slot2: number
    Slot4: number
    Slot5: number

}

export const NColumn = ({Slot1,Slot2,Slot4,Slot5}: ColumnProps) =>{

    const id1 = `_${Slot1}`
    const id2 = `_${Slot2}`
    const id4 = `_${Slot4}`
    const id5 = `_${Slot5}`

    return(
        <Stack className={styles.column}>
            <Box className={styles.header}>N</Box>
            <label htmlFor={id1}><Box className={styles.slot}>{Slot1}<input type='checkbox' id={id1} /> </Box></label>
            <label htmlFor={id2}><Box className={styles.slot}>{Slot2}<input type='checkbox' id={id2} /> </Box></label>
            <label htmlFor='N'><Box className={styles.slot}><CasinoOutlinedIcon className={styles.dice} /><input type='checkbox' id='N' checked/></Box></label>
            <label htmlFor={id4}><Box className={styles.slot}>{Slot4}<input type='checkbox' id={id4} /> </Box></label>
            <label htmlFor={id5}><Box className={styles.slot}>{Slot5}<input type='checkbox' id={id5} /> </Box></label>

        </Stack>

    );
};





