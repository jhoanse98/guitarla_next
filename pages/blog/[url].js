import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'

import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const  { contenido, imagen, published_at, titulo} = entrada[0]
    console.log
    return (
        <Layout
            pagina={titulo}
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image priority layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`}/>
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
        
      
    );
}


//En routing dinámico, getStaticProps debe ir acompañado con getStaticPaths
export async function getStaticPaths() { //se retorna en esta funcion los paths a construir
    const url = `${process.env.API_URL}/blogs`

    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    console.log(entradas)

    const paths = entradas.map(entrada => ({
        params: {url: entrada.url} //los params que se toman automaticamente en StaticProps
    }))
    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){ //en routing dinamico el query se obtiene como parametro en la funcion
    const {url} = params
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`

    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}


/* Con ServerSideProps
export async function getServerSideProps({query}){ //en routing dinamico el query se obtiene como parametro en la funcion
    const {id} = query
    const url = `${process.env.API_URL}/blogs/${id}`

    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}
*/
 
export default EntradaBlog;