import Head from 'next/head'
import styles from '../styles/Home.module.css'
import JSONPretty from 'react-json-pretty';

import {getClient} from '../utils/sanity'

  export async function getStaticProps() {
    const data = await getClient(true).fetch(`*[]`);

  
    return {
      props: {
       data: {data}
      },
    }
  }

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> with <a href="https://sanity.io">Sanity.io Data</a>
        </h1>
        <JSONPretty style={{maxWidth: "100ch", overflowX: "scroll", boxShadow: "0 0 5px rgba(0,0,0,.3"}} id="json-pretty" data={data}></JSONPretty>

      </main>

    </div>
  )
}
