import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Products from "./component/productsDetails/products"

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Products/>
  {/* <Component {...pageProps} /> */}
  </>)
}
