import type {AppProps} from 'next/app'
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Campiri - test</title>
                <meta name="description" content="My page description"/>
                <link rel="icon" href="../src/assets/images/logo.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
