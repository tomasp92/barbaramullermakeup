import styles from '../../styles/Home.module.css'
import Image from 'next/image';

export default function CardProduct({titulo, precio, id, categoria, subtitulo, img, imgHeight , imgWidth}) {
    console.log("🚀 ~ img", img)
    const addToCart = () => {
        console.log("🚀 ~ addToCart", id)
    }
    return (
        <div id={`productoN${id}`}>
            <div className={styles.titulo}>{titulo}</div>
            <div className={styles.subtitulo}>{subtitulo}</div>
            <div className={styles.imgContainer}> {img && <Image className={styles.imageProduct} src={img} alt="foto del producto" width={imgWidth ? imgWidth : 170 } height={imgHeight ? imgHeight : 170} />}</div>
            <div className={styles.categoria}>{categoria}</div>
            <div className={styles.precio}>${precio}</div>
            <button onClick={addToCart}>Añadir al Carrito</button>
            </div>
            )
}
// onClick="DisplayOneProducto(${producto.id});"
/* let listadoProductos = document.querySelector('#listadoproductos');
listadoProductos.innerHTML = "";

for (let producto of productos){
    const element = document.createElement('div');
    element.setAttribute("id", `productoN${producto.id}`);
    
    if(Array.isArray(producto.Categoría)){
        // cuando hay varias categorías será necesario iterar sobre las mismas para crear sus elementos html
        let VariasCategorias = document.createElement('div');
        VariasCategorias.setAttribute("id", "VariasCategorias");
        
        for (let cate of producto.Categoría){
            const cat = document.createElement('div');
            cat.className = "categoria";
            cat.innerHTML = cate;
            VariasCategorias.appendChild(cat);
        }
        VariasCategorias = VariasCategorias.outerHTML
        
        element.innerHTML = `
        <button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
        <div class="precio" onclick="DisplayOneProducto(${producto.id});">$${producto.precio}</div>
        ${VariasCategorias}
        <div onclick="DisplayOneProducto(${producto.id});"> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
        <div class="subtitulo" onclick="DisplayOneProducto(${producto.id});">${producto.subtitulo}</div>
        <div class="titulo" onclick="DisplayOneProducto(${producto.id});">${producto.titulo}</div>`;
    }else{
        element.innerHTML = `<button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
        <div class="precio" onclick="DisplayOneProducto(${producto.id});">$${producto.precio}</div>
        <div class="categoria">${producto.Categoría}</div>
        <div onclick="DisplayOneProducto(${producto.id});"> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
        <div class="subtitulo" onclick="DisplayOneProducto(${producto.id});">${producto.subtitulo}</div>
        <div class="titulo" onclick="DisplayOneProducto(${producto.id});">${producto.titulo}</div>`;
    }
    
    listadoProductos.appendChild(element);
} */