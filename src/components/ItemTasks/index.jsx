import styles from'./ItemTasks.module.css';

import { GoCircle } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export function ItemTasks(){
    return (
        <div className={styles.task}>
            <div className={styles.itemsTask}>
                <header>
                    <button>
                        <GoCircle className={styles.goCircle} size={20}/>
                    </button>
                    
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                </header>

                <button title="Deletar tarefa">
                    <RiDeleteBin6Line size={20}/>
                </button>
            </div>

            <span>Time</span>
            
        </div>
    )
}