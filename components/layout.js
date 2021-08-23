import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fibro</title>
        <meta name="description" content="Inventory Logging"/>
        <link rel="fibro-icon" href="/favicon.ico"/>
      </Head>
      {children}
    </>
  )
}