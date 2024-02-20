import styles from'./Todo.module.css';

import { GoCircle } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

import { RiDeleteBin6Line } from "react-icons/ri";

export function Todo({todo}){
    return(
        <div className={styles.todo}>
          <header className={styles.itemsTask}>
            <button>
                <GoCircle />
                <FaCheckCircle />
              </button>
              <div className={styles.content}>
                <p>{todo.id}</p>
                <p>{todo.text}</p>
              </div>
          </header>
            
            <button>
              <RiDeleteBin6Line size={20}/>
            </button>
          </div>
    )
}