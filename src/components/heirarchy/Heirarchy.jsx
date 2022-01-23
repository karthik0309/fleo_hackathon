import React from 'react';
import Card from '../Card/Card';
import Data from '../../json/data.json'
import classes from './Heirarchy.module.css'

const Heirarchy = () => {
  return(
    <div className={classes.heirarchy__container}>
        <Card data={Data}/>
    </div>
  )
};

export default Heirarchy;
