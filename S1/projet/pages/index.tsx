import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Gallery from '../components/Gallery/Gallery'

export default function Home() {
  return (
    <>
      <Head>
        <title>Goofy Website</title>
        <meta name="description" content="Goofy Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Gallery />
      </main>
    </>
  )
}
