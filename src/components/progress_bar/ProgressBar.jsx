import React, { useEffect, useState } from 'react';
import { progressColors } from '../../constants/constants';

const ProgressBar = ({target,current}) => {
  const [color,setColor]=useState({
      main:"",
      bg:""
  })

  useEffect(()=>{
    const perc = (current/target)*100;
    if(perc<33){
        setColor({main:progressColors[0].main, bg:progressColors[0].bg})
    }else if(perc>33 && perc<66){
        setColor({main:progressColors[33].main, bg:progressColors[33].bg})
    }else{
        setColor({main:progressColors[66].main, bg:progressColors[66].bg})
    }
  },[])

  const containerStyles = {
    height: '10px',
    width:'100%',
    backgroundColor: color.bg,
    borderRadius:'10px',
  }

  const fillerStyles = {
    height: '100%',
    width: `${(current/target)*100}%`,
    backgroundColor: color.main,
    borderRadius:'10px',
  }

  return(
    <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
    </div>
  )
};

export default ProgressBar;
