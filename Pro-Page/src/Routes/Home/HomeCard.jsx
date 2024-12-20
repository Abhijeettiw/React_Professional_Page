import { Paper } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

function HomeCard() {
    return (
        <motion.section animate={{ x: [0, -35, -70], y: [0, -40, -80] }} style={{
            maxWidth: '250px',
            minWidth: '250px',
            maxHeight: '175px',
            minHeight: '175px',
            zIndex: 100,
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
                Home
            </Paper>
        </motion.section>
    )
}

export default HomeCard
