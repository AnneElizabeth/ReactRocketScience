/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function SpaceStationInfoCard ({spacestation}){
    return (
        <>
            <Grid item xs={3}>
                <Paper elevation={12} square>
                    <img className='img' src={spacestation.image_url} />
                    <Box paddingX={1}>
                        <Typography variant='h6' component='h6'>
                            {spacestation.name}
                        </Typography>
                        <Box
                            paddingY={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Typography variant='body2' component='p'>
                                <strong>Orbit:</strong> {spacestation.orbit}<br />
                                <strong>Founded:</strong> {spacestation.founded}<br />
                                <strong>Status:</strong> {spacestation.status.name}<br />
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}