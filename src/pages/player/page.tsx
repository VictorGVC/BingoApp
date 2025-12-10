import styles from './page.module.css'
import './page.module.css'
import { Box, Checkbox, Container, Grid, Typography } from '@mui/material'

const Player = () => {
    return(
    <Container className={styles.content}>
        <Typography  className={styles.title} sx={{fontSize:'var(--size-big)'}}>Bingo App</Typography>
        <Container maxWidth='md' className={styles.table}>
            <Grid container spacing={1}>
               



            </Grid>
        </Container>
    </Container>
    )
}

export default Player;
