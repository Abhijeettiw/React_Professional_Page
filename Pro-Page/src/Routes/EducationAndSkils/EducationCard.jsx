import React from 'react'
import { motion } from 'framer-motion'
import { Paper, Typography } from '@mui/material'

function EducationCard() {
    return (
        <>
            <motion.section animate={{ x: [0, 275, 550], y: [0, 30, 60] }} style={{
                maxWidth: '250px',
                minWidth: '250px',
                maxHeight: '175px',
                minHeight: '175px',
                zIndex: 1,
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
                    <Typography>Education</Typography>
                </Paper>
            </motion.section>
        </>
    )
}

export default EducationCard
