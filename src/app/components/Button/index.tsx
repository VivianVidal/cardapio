
import { ButtonProps } from "@/types/type"
import Image from "next/image"
import styles from './Button.module.css'

export default function Button({titulo, imagem, filter}: ButtonProps){
    return(
        <button className={styles.button} onClick={filter} type="button">
            <Image className={styles.imagem} width={25} height={25} alt={titulo} src={imagem}/>
            {titulo}
        </button>
    )}