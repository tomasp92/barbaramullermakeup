import React, { useEffect } from "react"
import AppWrapper from './../components/AppWrapper';
import api from './api'

    
function MyApp({ Component, pageProps }) {
  const [products, setProducts] = React.useState(null);
  useEffect(()=>{
    api.list().then(productos => setProducts(productos))
  }, [])

  return <AppWrapper><Component {...pageProps} products={products} /></AppWrapper>
}

export default MyApp
