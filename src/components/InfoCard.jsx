import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // Grid version 1


const InfoCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={5}>
                Is there anyone out there?
            </Paper>
        </Grid>
    )
}
export default InfoCard;