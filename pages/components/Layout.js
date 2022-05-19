import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

import styles from '../../styles/Navbar.module.css'

export default function Layout({children}){
    return(
        <>
            <Head>
                <link rel="stylesheet" href="/images/favicon.ico"/>
                <title>Pokedex da Shopee</title>
            </Head>
            
            
            <Navbar />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </> 
    )
}