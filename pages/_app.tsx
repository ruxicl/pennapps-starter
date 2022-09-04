import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "./formik-demo.css";

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

      <header>
  
      <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use/></svg>
        <span className="fs-4">Lazy Disposal</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/form">Drop Item</a></li>
        <li className="nav-item"><a className="nav-link" href="/pickup">Pickup</a></li>
      </ul>
    </header>
  </div>
  
</header>
      <ConvexProvider client={convex}>
        <Component {...pageProps} />
      </ConvexProvider>
    </>

  )
}

export default MyApp
