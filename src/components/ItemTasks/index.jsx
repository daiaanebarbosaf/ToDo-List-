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
                    
                    <p>Organização semanal</p>
                </header>

                <button title="Deletar tarefa">
                    <RiDeleteBin6Line size={20}/>
                </button>
            </div>

            <span>20/01/2024 (Sábado) às 10h30</span>
        </div>
    )
}