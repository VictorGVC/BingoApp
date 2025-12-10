import {Checkbox, Stack, Card, Box, Typography} from '@mui/material'
import styles from './column.module.css'

interface ColumnProps {
    Header: string
    Slot1: Number
    Slot2: Number   
    Slot3: Number   
    Slot4: Number   
    Slot5: Number   

}

export const Column = ({Header,Slot1,Slot2,Slot3,Slot4,Slot5}: ColumnProps) =>{

    return(
        <Stack className={styles.column}>
            <Box className={styles.header} >{Header}</Box>
            <Box className={styles.slot}>{Slot1}</Box>
            <Box className={styles.slot}>{Slot2}</Box>
            <Box className={styles.slot}>{Slot3}</Box>
            <Box className={styles.slot}>{Slot4}</Box>
            <Box className={styles.slot}>{Slot5}</Box>
        </Stack>

    );
};
