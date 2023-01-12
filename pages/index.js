import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    <a href="https://www.freecounterstat.com" title="hit counter"><img src="https://counter10.optistats.ovh/private/freecounterstat.php?c=2kmg4y3m6fsj3sqp5py8y66x9n7p4r55" border="0" title="hit counter" alt="hit counter"></a>

<div id="sfc2kmg4y3m6fsj3sqp5py8y66x9n7p4r55"></div><script type="text/javascript" src="https://counter10.optistats.ovh/private/counter.js?c=2kmg4y3m6fsj3sqp5py8y66x9n7p4r55&down=async" async></script><br><a href="https://www.freecounterstat.com">hit counter</a><noscript><a href="https://www.freecounterstat.com" title="hit counter"><img src="https://counter10.optistats.ovh/private/freecounterstat.php?c=2kmg4y3m6fsj3sqp5py8y66x9n7p4r55" border="0" title="hit counter" alt="hit counter"></a></noscript>
      </main>

      <Footer />
    </div>
  )
}
