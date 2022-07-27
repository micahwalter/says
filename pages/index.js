import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export async function getServerSideProps(context) {
  
  const ch_api_key = process.env.CH_API_KEY
  const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.labs.whatWouldMicahSay&access_token=" + ch_api_key
  
  const res = await fetch(url)
  const data = await res.json()

  return { props: { data } }
}


export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>What Would Micah Say?</title>
        <meta name="description" content="What Would micah Say?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          What Would Micah Say?
        </h1>

        <p className={styles.description}>
          {data.micah.says}
        </p>

      </main>
      <footer className={styles.footer}>
        <Link href="https://www.micahwalter.com">
          <a>micahwalter.com</a>
        </Link>      
      </footer>
    </div>
  )
}
