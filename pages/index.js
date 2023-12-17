import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title=" Caleb Kech" />
        <p className=""><b>Reach The DevOps And Security Community</b></p> 
        <p className=""><i>
          Authentic Engagement: 
          We're not here to impress with jargon or elaborate buzzwords. 
          Instead, let's engage in a conversation that speaks directly to the challenges you face. 
          Our authentic voice will guide you through the intricacies of security and DevOps, 
          shedding light on what truly makes a difference.</i>
        </p>
      </main>

      <Footer />
    </div>
  )
}
