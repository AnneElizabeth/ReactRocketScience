/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function LaunchVehicleInfoCard ({launcher}){
    return (
        <>
            <Grid item xs={3}>
                <Paper elevation={12} square>
                    <img className='img' src={launcher.image_url} />
                    <Box paddingX={1}>
                        <Typography variant='h6' component='h6'>
                            {launcher.full_name}
                        </Typography>
                        <Box
                            paddingY={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Typography variant='body2' component='p'>
                                <strong>Country:</strong> {launcher.manufacturer.country_code}<br />
                                <strong>Founding Year:</strong> {launcher.manufacturer.founding_year}<br />
                                <strong>Manufacturer:</strong> {launcher.manufacturer.name}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}