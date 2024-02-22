import styles from'./Todo.module.css';

import { GoCircle } from "react-icons/go";
import taskCompleted from '../../assets/taskCompleted.svg';

import { RiDeleteBin6Line } from "react-icons/ri";

import React, { useState } from "react";

export function Todo({task, ...rest}){

  const [iconColor, setIconColor] = useState('#4EA8DE');
  const [currentIcon, setCurrentIcon] = useState(<GoCircle />);


  function handleTaskCompleted(){
    const newIcon = currentIcon.type === GoCircle ? <img src={taskCompleted}/> : <GoCircle />; 
    setCurrentIcon(newIcon);  
  }

    return(
        <div className={styles.todo}>
          <header className={styles.itemsTask}>
            <button className={styles.buttonComplete}>
              {
                  currentIcon && React.cloneElement(currentIcon, 
                  {
                      size: 20,
                      color: iconColor,
                      onClick: handleTaskCompleted,
                  })
              }
                
              </button>
              <div className={styles.content}>
                <p>{task.text}</p>
              </div>
          </header>
            
            <button className={styles.buttonDelete}>
              <RiDeleteBin6Line size={20}/>
            </button>
          </div>
    )
}