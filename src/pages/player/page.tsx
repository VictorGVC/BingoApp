import styles from './page.module.css'
import './page.module.css'
import { Button, Container, Stack, Typography } from '@mui/material'

import {Column} from '../../components/Column'

const Player = () => {

    return(
    <Container className={styles.content}>
        <Typography  className={styles.title} sx={{fontSize:'var(--size-big)'}}>Bingo App</Typography>
        <Container maxWidth='sm' className={styles.table}>
            <Stack className={styles.columns} sx={{flexDirection:'row'}}>
                <Column Header='B' Numbers={[1,2,3,4,5]} />
                <Column Header='I' Numbers={[11,12,13,14,15]} />
                <Column Header='N' Numbers={[21,22,23,24,25]} />
                <Column Header='G' Numbers={[31,32,33,34,35]} />
                <Column Header='O' Numbers={[41,42,43,44,45]} />

            </Stack>
                <Button className={styles.bingo} variant='contained' onClick={() => {
    alert('BINGO!');
  }}>BINGO!!</Button>
        </Container>
    </Container>
    )
}

export default Player;
