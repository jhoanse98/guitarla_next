import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'


const Producto = ({guitarra}) => {

    console.log(guitarra[0])

    const {descripcion, imagen, nombre, precio, url} = guitarra[0]

    return ( 
        <Layout
            pagina={`Guitarra - ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image layout='responsive' width={200} height={250} src={imagen.url} alt={`Imagen guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                </div>
            </div>
        </Layout>

     );
}
 
export async function getServerSideProps({query: {url}}){
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)

    const guitarra = await respuesta.json()

    console.log(guitarra)
    return{
        props: {
            guitarra
        }
    }
}

export default Producto;