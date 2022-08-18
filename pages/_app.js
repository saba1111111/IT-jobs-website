import '../styles/globals.css'
import Layout from '../Components/Layout'
import { Fragment } from 'react'
import Footer from '../Components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
  <Layout />
  <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
