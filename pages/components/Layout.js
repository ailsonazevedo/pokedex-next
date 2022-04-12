import NavBar from './NavBar'
import Footer from './Footer'

import Head from 'next/head'


export default function Layout({children}){
    return(
        <>
            <Head>
                <link rel="stylesheet" href="/images/favicon.ico"/>
                <title>Pokedex da Shopee</title>
            </Head>
            
            <main>{children}</main>
            <Footer />
        </>
    )
}