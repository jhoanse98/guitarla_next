import Link from 'next/link'

import {formatearFecha } from '../helpers'

const Entrada = ({entrada}) => {
    const {titulo, resumen, id, published_at, imagen} = entrada
    console.log(entrada)
    return ( 
        <article>
            <div>
                <h1>{titulo}</h1>
                <p>{formatearFecha(published_at)}</p>
                <p>{resumen}</p>
                <Link href={`/blog/${id}`}>
                    Leer entrada
                </Link>
            </div>
        </article>
    );
}
 
export default Entrada;