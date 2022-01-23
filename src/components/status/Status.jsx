import React ,{useState,useEffect} from 'react';
import { progressColors } from '../../constants/constants';

const Status = ({current,target}) => {
    const [color,setColor]=useState({
        main:"",
        bg:"",
        status:""
    })
  
    useEffect(()=>{
      const perc = (current/target)*100;
      if(perc<33){
          setColor({main:progressColors[0].main, bg:progressColors[0].bg,status:progressColors[0].status})
      }else if(perc>33 && perc<66){
          setColor({main:progressColors[33].main, bg:progressColors[33].bg,status:progressColors[33].status})
      }else{
          setColor({main:progressColors[66].main, bg:progressColors[66].bg,status:progressColors[66].status})
      }
    },[])

  const style={
    background:color.bg,
    color:color.main,
    height:'30px',
    width: '60px',
    borderRadius: '8px',
    fontSize:'small',
    display:'grid',
    placeItems:'center',
    fontWeight:'bold'
  }
  return (
    <div style={style}>
        {color.status}
    </div>
  )
};

export default Status;
