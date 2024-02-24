import styles from'./Todo.module.css';

import { GoCircle } from "react-icons/go";
import taskCompleted from '../../assets/taskCompleted.svg';

import { RiDeleteBin6Line } from "react-icons/ri";

import React, { useState } from "react";

export function Todo({task, deleteTask, completeTask, ...rest}){

  const [iconColor, setIconColor] = useState('#4EA8DE');
  const [currentIcon, setCurrentIcon] = useState(<GoCircle />);


  function handleTaskCompleted(){
    const newIcon = currentIcon.type === GoCircle ? <img src={taskCompleted}/> : <GoCircle />; 
    setCurrentIcon(newIcon);  
  }

  const checkboxChecked = task.isCompleted
  ? styles['pTaskCompleted']
  : styles['p'];

  console.log(task.isCompleted)

    return(
        <div 
          className={styles.todo}
        >
          <header className={styles.itemsTask}>
            <button 
              className={`${styles.buttonComplete} ${checkboxChecked}`}
              onClick={() => completeTask(task.id)}
            >
              {
                  currentIcon && React.cloneElement(currentIcon, 
                  {
                      size: 20,
                      color: iconColor,
                      onClick: handleTaskCompleted,
                  })
              }
                
              </button>
              <div 
                className={`${styles.p} ${checkboxChecked}`}
                
              >
              
                <p>{task.text}</p>
              </div>
          </header>
            
            <button 
              className={styles.buttonDelete}
              onClick={() => deleteTask(task.id)}
            >
              <RiDeleteBin6Line size={20}/>
            </button>
          </div>
    )
}