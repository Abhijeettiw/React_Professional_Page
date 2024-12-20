import React from 'react'
import {motion} from 'framer-motion'
import { Paper, Typography } from '@mui/material'

function InfoCard() {
    return (
        <>
            <motion.section animate={{ x: [0, -80, -160], y: [0, -80, -160] }} style={{
                maxWidth: '250px',
                minWidth: '250px',
                maxHeight: '175px',
                minHeight: '175px',
                zIndex: 50,
                position: 'relative',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center'
            }}>
                <Paper sx={{
                    // elevation: '24',
                    maxWidth: '250px',
                    minWidth: '250px',
                    maxHeight: '175px',
                    minHeight: '175px',
                    display: 'flex',
                    backgroundColor: 'transparent',
                    color: 'white'
                }}>
                    <Typography>Personal Information</Typography>
                </Paper>
            </motion.section>
        </>
    )
}

export default InfoCard
