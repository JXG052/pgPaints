import React from 'react'
import { Stack, Box, Button, Grid } from '@mui/material'

export default function categoryStack() {
    return (
        <>
            <Stack
                sx={{
                    width: '100%',
                    height: '15vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <Grid container spacing={2} sx={{ display: 'flex' }}>
                    <Grid item xs={6} >
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                m: 1,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }}
                        >
                            Cartoons
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                m: 1,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }}
                        >
                            Abstract
                        </Button>
                    </Grid>
                </Grid>


                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                m: 1,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }}
                        >
                            Favourites
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                m: 1,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }}
                        >
                            New
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}
