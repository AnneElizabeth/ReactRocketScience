/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function InfoCard ({spacecraft}){
    return (
        <>
            <Grid item xs={2}>
                <Paper elevation={12} square>
                    <img className='img' src={spacecraft.spacecraft_config.image_url} />
                    <Box paddingX={1}>
                        <Typography variant='h6' component='h6'>
                            {spacecraft.name}
                        </Typography>
                        <Box
                            paddingY={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Typography variant='body2' component='p'>
                                <strong>Flights:</strong> {spacecraft.flights_count}<br />
                                <strong>Status:</strong> {spacecraft.status.name}<br />
                                <strong>Agency:</strong> {spacecraft.spacecraft_config.agency.name}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}