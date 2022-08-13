import styles from '../../styles/Home.module.css'
export default function Carrito(){
    return (<div><p>Carrito</p></div>)
}
/* 
<div id="content">
        <div>
            <br><br><br><br>    
        </div>
       
        <div id="Carrito">
            <h1> Carrito </h1>
            <br>
            <!-- <div id='checkout'> 
                <div><h3> Datos de envío </h3></div>
                <form>
                    <div class='row'>
                        <div>
                            <input type="text" class="form-control" placeholder="Nombre">
                        </div>
                        <div>
                            <input type="text" class="form-control" placeholder="Apellido">
                        </div>
                    </div>
                    <div class='row row2'>
                        <div id="direccion">
                            <input type="text" class="form-control" placeholder="Dirección">
                        </div>
                        <div>
                            <input type="text" class="form-control" placeholder="Depto">
                        </div>
                        <div>
                            <input type="text" class="form-control" placeholder="Codigo Postal">
                        </div>
                    </div>
                    <div class='row'>
                        <div>
                            <input type="phone" class="form-control" placeholder="Telefono">
                        </div>
                        <div>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                    </div>
                    <div class='row'>
                        <div>
                            <input type="text" class="form-control" placeholder="Ciudad">
                        </div>
                        <div>
                            <input type="text" class="form-control" placeholder="Provincia">
                        </div>
                    </div>
                
                </form>
            </div> -->
            <div id='checkout'> 
                <div><h3> Coordina pago y entrega </h3></div>
                <div id="textCompra">
                    <p>Nuestra página está en producción! </p>
                    <p>Al apretar el boton 'Finalizar' serás redirigido a whatsapp para hablar con Barbara</p>
                    <p>El texto con los productos será copiado automaticamente en su conversación</p> 
                </div>
                <button onclick="finalizarCompra();" id='botonCheckout'>Finalizar</button>
            </div>
            <div id="listadocarrito"> </div>
            <br>
            <div id="totales"> </div>
            <br><br>
            
        </div>
    </div><br>
 */