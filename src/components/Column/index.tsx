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
            <Slot number={Numbers[0]} />
            <Slot number={Numbers[1]} />
            <Slot number={Numbers[2]} />
            <Slot number={Numbers[3]} />
            <Slot number={Numbers[4]} />

        </Stack>

    );
};





