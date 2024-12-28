import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography} from '@mui/material'
const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign: "center",
        padding:2,
        "& h4" : {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p" : {
          textAlign: "justify",
        },
        "@media (max-width:600px)": {
          mt:0,
          "& h4 ": {
            fontSize: "1.5rem",
          },
        },
      }}>
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Box>
    </Layout>
  )
}

export default About
