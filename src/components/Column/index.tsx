import { Box, Stack } from '@mui/material';
import { Slot } from './Slot';
import styles from './column.module.css';

interface ColumnProps {
    Header: string;
    Numbers?: Array<number>;
}
export const Column = ({ Header, Numbers = [0, 0, 0, 0, 0] }: ColumnProps) => {
    if (Numbers.length == 5) {
        return (
            <Stack className={styles.column}>
                <Box className={styles.header}>{Header}</Box>
                <Slot number={Numbers[0]} />
                <Slot number={Numbers[1]} />
                <Slot number={Numbers[2]} />
                <Slot number={Numbers[3]} />
                <Slot number={Numbers[4]} />
            </Stack>
        );
    } else if (Numbers.length == 4) {
        return (
            <Stack className={styles.column}>
                <Box className={styles.header}>{Header}</Box>
                <Slot number={Numbers[0]} />
                <Slot number={Numbers[1]} />
                <Slot />
                <Slot number={Numbers[2]} />
                <Slot number={Numbers[3]} />
            </Stack>
        );
    }
};
