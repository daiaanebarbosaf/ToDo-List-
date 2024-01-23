import styles from'./ItemTasks.module.css';

import { GoCircle } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function ItemTasks({ description, publishedAt }){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' yyyy '('EEEE')' 'às' HH:mm'h'", {
        locale: ptBR,
    });
    
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

            <time 
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
            >
                {publishedDateFormatted}
            </time>
        </div>
    )
}