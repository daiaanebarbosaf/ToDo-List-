import styles from'./Input.module.css';

export function Input({icon: Icon, ...rest}){
    return (
        <div className={styles.container}>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>
        </div>
    )
}