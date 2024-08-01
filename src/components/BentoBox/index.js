import React from 'react';
import './styles.css';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import LineChart from '../Chart';
import profileImage from '../assets/pexels-drew-williams-1285451-3568520.jpg';
import { Button } from '@mui/material';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';

function BentoBox() {
  return (
    <div className="bento-container">
     
      <div className="bento-grid">
        <div className="bento-item image-section">
            
                <h1 className='head-text'>We Make Your Business Different</h1>
                <div className='explore-btn'>
                    <p className='btn-text'>Book a consultation</p>
                <Button 
                
                 variant="contained" style={{color:"white",
                     backgroundColor:"black",
                     width:"8rem",
                     height:"2.8rem",
                     borderRadius:"2rem",
                     marginTop:"-0.6rem",
                     '&:hover': {
                            backgroundColor: "gray",
                            color:"white",
                            borderColor:"pink",
                            transform: "scale(1.05)", 
                            transition: "transform 0.3s ease-in-out", 
                }
                     }}>Explore</Button>
                </div>
        
        </div>

        <div className="bento-item graph-section">
            <TimelineRoundedIcon/>
          <LineChart/>
        </div>

        <div className="bento-item text-section1">
            <div className='blog-upper'>
                <h3>World of Technology</h3>
                <div className='arrow'>
                <NorthEastRoundedIcon className="arrow-up" style={{color:"black"}}/>
                </div>
            </div>
            <p>400+</p>

          <h1>View our Blog.</h1>
        </div>

        <div className="bento-item text-section2">
        <Button 
                className='btn'
                 variant="contained" style={{color:"white",
                     backgroundColor:"black",
                     width:"8rem",
                     height:"2.8rem",
                     borderRadius:"2rem",
                     marginTop:"-0.6rem",
                     '&:hover': {
                            backgroundColor: "gray",
                            color:"white",
                            borderColor:"pink",// Change the background color on hover
                            transform: "scale(2)", // Slightly increase the size
                            transition: "transform 0.3s ease-in-out", // Smooth transition
                }
                     }}>Ask<span><HelpOutlineRoundedIcon/></span></Button>
                     <NorthEastRoundedIcon className="arrow-up" style={{color:"black"}}/>
          <h2 className='faq-heading1'>Frequently Asked Questions</h2>
          <h1 className='faq-heading2'>Answers.</h1>
        </div>

      </div>
    </div>
  )
}

export default BentoBox
