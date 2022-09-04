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
      <header>

  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/form">DropItem</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pickup">Pickup</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</header>
      <ConvexProvider client={convex}>
        <Component {...pageProps} />
      </ConvexProvider>
    </>

  )
}

export default MyApp
