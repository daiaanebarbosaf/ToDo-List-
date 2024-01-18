import styles from'./ItemTasks.module.css';

import { GoCircle } from "react-icons/go";

export function ItemTasks(){
    return (
        <div className={styles.itemTask}>
            <GoCircle size={20}/>
        </div>
    )
}