import styles from './Topo.module.css';


export default function Topo(){
    return(
        <header className={styles.header_container}>
            <div className={styles.banner}>
                <h1 className={styles.title}>Restaurant</h1>
                <p className={styles.text}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.</p>
            </div>
        </header>
    )
}