import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return ( 
    <Layout
        pagina="Nosotros"
    >
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>

                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="nosotros logo"/>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque alias temporibus quia possimus quibusdam soluta reprehenderit sapiente dolorum delectus! Voluptate pariatur, sequi asperiores aliquam delectus consequuntur laboriosam aperiam veritatis hic! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fuga, maiores, repellat quod, sed voluptatum placeat at laboriosam cum nam nihil error aspernatur aperiam accusamus. In praesentium laudantium odit aspernatur.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae est sit magni non mollitia totam laudantium eveniet officiis fugiat impedit a hic et atque cupiditate, magnam quo, veniam in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur deserunt repudiandae ad corrupti perspiciatis totam architecto ducimus blanditiis velit, exercitationem illum ipsum repellendus eos cupiditate iusto minima! Temporibus, voluptates!</p>
                </div>
            </div>
        </main>
    </Layout>
);
}
 
export default Nosotros;