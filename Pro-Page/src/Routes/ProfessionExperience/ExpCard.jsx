import React from 'react'
import { motion } from 'framer-motion'
import { Paper, Typography } from '@mui/material'

function ExpCard() {
    return (
        <>
            <motion.section animate={{ x:[0,-60,-120],y: [0, 80, 160] }} style={{
                maxWidth: '250px',
                minWidth: '250px',
                maxHeight: '175px',
                minHeight: '175px',
                zIndex: 25,
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
                    <Typography>Experience</Typography>
                </Paper>
            </motion.section>
        </>
    )
}

export default ExpCard
