import React from 'react'
import { Stack, Button, Grid } from '@mui/material'

export default function categoryStack() {
    return (
        <>
            <Stack
                sx={{
                    width: '100%',
                    height: '15vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    align: 'center'
                }}
            >
                <Grid container sx={{ ml: 1.4 }}>
                    <Grid item xs={6} sx={{ m: 0, p: 0 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                maxWidth: '80%',
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
                    <Grid item xs={6} sx={{ m: 0, p: 0 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                maxWidth: '80%',
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


                <Grid container sx={{ ml: 1.4 }} >
                    <Grid item xs={6} sx={{ m: 0, p: 0 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                maxWidth: '80%',
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
                    <Grid item xs={6} sx={{ m: 0, p: 0 }} >
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black',
                                maxWidth: '80%',
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
