import styles from './page.module.css'
import './page.module.css'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import {Column} from '../../components/Column'

const Player = () => {

    return(
    <Container className={styles.content}>
        <Typography  className={styles.title} sx={{fontSize:'var(--size-big)'}}>Bingo App</Typography>
        <Container maxWidth='sm' className={styles.table}>
            <Stack className={styles.columns} sx={{flexDirection:'row'}}>
                <Column Header='B' Slot1={1} Slot2={2} Slot3={3} Slot4={4} Slot5={5} />
                <Column Header='I' Slot1={11} Slot2={12} Slot3={13} Slot4={14} Slot5={15}/>
                <Column Header='N' Slot1={21} Slot2={22} Slot3={23} Slot4={24} Slot5={25} />
                <Column Header='G' Slot1={31} Slot2={32} Slot3={33} Slot4={34} Slot5={35}/>
                <Column Header='O' Slot1={41} Slot2={42} Slot3={43} Slot4={44} Slot5={45}/>
            </Stack>
                <Button className={styles.bingo} variant='contained' onClick={() => {
    alert('BINGOOOO!');
  }}>BINGO!!</Button>
        </Container>
    </Container>
    )
}

export default Player;
