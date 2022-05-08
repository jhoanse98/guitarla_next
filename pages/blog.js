import Entrada from '../components/Entrada';
import Layout from '../components/Layout'

const Blog = ({entradas}) => {

    console.log(entradas) // ahora si será visible la consulta de la api en el lado del cliente
    return ( 
        <Layout
            pagina="Blog"
        >
            <main className='contenedor'>
                <h2 className='heading'>Blog</h2>
                <div>
                    {entradas.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            entrada={entrada}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
}

//creamos la función getServerSideProps para consultar la api en strapi

export async function getServerSideProps(){

    const url = "http://localhost:1337/blogs"
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    console.log(entradas) //se ve desde el servidor y no en el lado del cliente

    //getServerSideProps siempre retorna un objeto con atributo props

    return {
        props: {
            entradas //este resultado "entradas ahora puede ser accesible en el componente Blog"
        }
    }
}
 
export default Blog;