import type {AppProps} from 'next/app'
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Campiri - test project</title>
                <meta property="og:title" content="Campiri - test project" />
                <meta property="og:description" content="Svobodné cestování si zamilujete nejen vy, ale hlavně celá vaše rodina" />
                <meta property="og:image" content="https://www.startupjobs.cz/uploads/0537a05568c36e4b6a56329e0b700814.png" />
                <meta property="og:url" content="http://localhost:3000/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="https://www.startupjobs.cz/uploads/0537a05568c36e4b6a56329e0b700814.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
