import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import clientConfig from "../convex/_generated/clientConfig";
import Head from 'next/head';
const convex = new ConvexReactClient(clientConfig);

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ConvexProvider client={convex}>
        <Component {...pageProps} />
      </ConvexProvider>
    </>

  )
}

export default MyApp
