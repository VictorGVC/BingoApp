import {Stack, Box} from '@mui/material'
import {Slot} from './Slot'
import styles from './column.module.css'

interface ColumnProps {
    Header: string
    Numbers : Array<number>

}

export const Column = ({Header,Numbers}: ColumnProps) =>{

    return(
        <Stack className={styles.column}>
            <Box className={styles.header}>{Header}</Box>
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
        </Stack>

    );
};





