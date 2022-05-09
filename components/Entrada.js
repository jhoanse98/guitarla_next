import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Entrada.module.css'

import {formatearFecha } from '../helpers'

const Entrada = ({entrada}) => {
    const {titulo, resumen, id, published_at, imagen} = entrada
    return ( 
        <article>
            <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} />
            <div className='contenido'>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.enlace}>
                        Leer entrada
                    </a>
                </Link>
            </div>
        </article>
    );
}
 
export default Entrada;