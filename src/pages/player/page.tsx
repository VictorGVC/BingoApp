import styles from './page.module.css'
import './page.module.css'
import { Box, Checkbox, Container, Grid, Stack, Typography } from '@mui/material'
import {Column} from '../../components/Column'

const Player = () => {
    return(
    <Container className={styles.content}>
        <Typography  className={styles.title} sx={{fontSize:'var(--size-big)'}}>Bingo App</Typography>
        <Container maxWidth='md' className={styles.table}>
            <Stack className={styles.columns} sx={{flexDirection:'row'}}>
                <Column Header='B' Slot1='1' Slot2='2' Slot3='3' Slot4='4' Slot5='5' />
                <Column Header='I' Slot1='1' Slot2='2' Slot3='3' Slot4='4' Slot5='5'/>
                <Column Header='N' Slot1='1' Slot2='2' Slot3='3' Slot4='4' Slot5='5' />
                <Column Header='G' Slot1='1' Slot2='2' Slot3='3' Slot4='4' Slot5='5'/>
                <Column Header='O' Slot1='1' Slot2='2' Slot3='3' Slot4='4' Slot5='5'/>



            </Stack>
        </Container>
    </Container>
    )
}

export default Player;
