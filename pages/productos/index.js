import styles from '../../styles/Home.module.css'
import CardProduct from './../../components/CardProduct/index';

export default function Productos({products}) {
    console.log("🚀 ~ products", products)
    return (
        <>
            <div id="productos" className={styles.productos}>
                <h1> PRODUCTOS Y SERVICIOS </h1>
        
                <div id="filtros">
                    <div id="Categorías">
                        <p> Categorías:</p>
                        {/* <select ariaLabel="Default select example" id="opcionesCategorias"> <select/>  */}
                    </div>
                    <div id="Ordenar">
                        {/* <p>Ordenar por: 
                            <select id="selectOrder" aria-label="Default select example">
                                <option id="mayor" value="Mayor"> Mayor precio</option>
                                <option id="menor" value="Menorprecio"> Menor precio</option>
                                <option selected id="porCategorias" value="Categorías">Categorías</option>
                            </select>
                        </p> */}
                    </div>        

                </div>
                <div id="listadoproductos" className={styles.listadoproductos}>
                    {products && products.map((product) =>{ 
                        console.log(product)
                        return(
                            <CardProduct 
                                key={`productoN${product.id}`}
                                id={product.id}
                                img={product.img}
                                titulo={product.titulo}
                                precio={product.precio}
                                categoria={product.Categoría}
                                subtitulo={product.subtitulo}
                            />)}
                    )}
                </div>
                <br />
            </div>
        </>
    )
}