import styles from'./Todo.module.css';

import { GoCircle } from "react-icons/go";
import taskCompleted from '../../assets/taskCompleted.svg';

import { RiDeleteBin6Line } from "react-icons/ri";

import React, { useState } from "react";

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
 
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Todo({task, deleteTask, completeTask}: TaskProps){

  const [iconColor] = useState('#4EA8DE');
  const [currentIcon, setCurrentIcon] = useState(<GoCircle />);

  const checkboxChecked = task.isCompleted ? styles['pTaskCompleted'] : styles['p'];


  function handleTaskCompleted(){
    const newIcon = currentIcon.type === GoCircle ? <img src={taskCompleted}/> : <GoCircle />; 
    setCurrentIcon(newIcon);  

    completeTask(task.id); 
  }


    return(
        <div 
          className={styles.todo}
        >
          <header className={styles.itemsTask}>
            <button 
              className={styles.buttonComplete}
              onClick={handleTaskCompleted} 
            >
              {
                  currentIcon && React.cloneElement(currentIcon, 
                  {
                      size: 20,
                      color: iconColor,
                  })
              }
                
              </button>
              <div>
                <p
                  className={`${styles.p} ${checkboxChecked}`}
                >
                  {task.text}
                  </p>
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