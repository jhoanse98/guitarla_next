import Entrada from '../components/Entrada';
import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog';
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => {

    // console.log(entradas) // ahora si será visible la consulta de la api en el lado del cliente
    return ( 
        <Layout
            pagina="Blog"
        >
            <main className='contenedor'>
                <ListadoBlog
                    entradas={entradas}
                />
            </main>
        </Layout>
    );
}

//creamos la función getServerSideProps para consultar la api en strapi

export async function getServerSideProps(){

    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    // console.log(entradas) //se ve desde el servidor y no en el lado del cliente

    //getServerSideProps siempre retorna un objeto con atributo props

    return {
        props: {
            entradas //este resultado "entradas ahora puede ser accesible en el componente Blog"
        }
    }
}
 
export default Blog;