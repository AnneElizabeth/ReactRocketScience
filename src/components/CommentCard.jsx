import { Paper, Grid, Typography, Box, Button } from '@mui/material';


export default function CommentCard({comment}) {
    
    return(
        <>
            <Grid item xs={3} key={index}>
                <Paper elevation={12} square>
                    <Box paddingX={1}>
                        <Typography variant='h6' component='h6'>
                            {comment.name} at {comment.email}
                        </Typography>
                        <Box
                            paddingY={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Typography variant='body2' component='p'>
                                {comment.comment}
                            </Typography>
                        </Box>
                        <Box
                            paddingY={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Button color='primary' variant='contained'>EDIT</Button>  <Button color='primary' variant='contained'>DELETE</Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}
    
