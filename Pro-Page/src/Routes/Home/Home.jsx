import React from 'react'
import { Box } from '@mui/material'
import HomeCard from './HomeCard'
import EducationCard from '../EducationAndSkils/EducationCard'
import ExpCard from '../ProfessionExperience/ExpCard'
import InfoCard from '../Profile/InfoCard'


function Home() {
  return (
    <Box id="home-container" className='route-main-container'
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        position: 'relative',
        display: 'flex'
      }}>
      <HomeCard/>
      <EducationCard/>
      <ExpCard/>
      <InfoCard/>
    </Box>
  )
}

export default Home
