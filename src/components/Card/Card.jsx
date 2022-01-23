import React,{useState} from 'react';
import ProgressBar from '../progress_bar/ProgressBar';
import Status from '../status/Status';
import classes from "./Card.module.css"



const Card = ({data}) => {
  const [show,setShow]=useState(0)

  const handleCardClick=()=>{

  }

  return(
      <ul>
        {data.map((items,index)=>(
            <React.Fragment key={items.name}>
                <li>
                    <div className={classes.card__container}>
                        <div className={classes.card__header}>
                            <p className={classes.card__title}>
                                {items.name}
                            </p>
                            <p>
                                <span className={classes.percentage}>
                                    {(items.current_sales/items.target_sales)*100}
                                </span>
                                % complete
                            </p>
                        </div>
                        <div className={classes.details}>
                            <div className={classes.info__track}>
                                <div className={classes.info}>
                                    <p className={classes.para}>Total Sales - {items.current_sales}</p>
                                    <p className={classes.para}>Target Sales - {items.target_sales}</p>
                                </div>
                                <Status current={items.current_sales} target={items.target_sales}/>
                            </div>
                            <div className={classes.progress}>
                                <ProgressBar target={items.target_sales} current={items.current_sales}/>
                            </div>
                        </div>
                    </div>
                    {items.children?.length && <Card data={items.children} />}
                </li>
            </React.Fragment>
        ))}
    </ul>
  )
};

export default Card;
