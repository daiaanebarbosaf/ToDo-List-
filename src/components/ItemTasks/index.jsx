import styles from'./ItemTasks.module.css';

import { GoCircle } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export function ItemTasks({ description, publishedAt }){
    
    return (
        <div className={styles.task}>
            <div className={styles.itemsTask}>
                <header>
                    <button>
                        <GoCircle className={styles.goCircle} size={20}/>
                    </button>
                    
                    <p>{description}</p>
                </header>

                <button title="Deletar tarefa">
                    <RiDeleteBin6Line size={20}/>
                </button>
            </div>

            <time title="22 de Janeiro às 07:51h">{publishedAt.toString()}</time>
        </div>
    )
}