import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="CALEB KECH LLC" />
        <title></title>

        {/* Include your local styles here */}
        <link href="/static/css/landing.css" rel="stylesheet" />
        <link href="/static/css/icon-colors.css" rel="stylesheet" />
      </Head>

      <div className="col-lg-8 mx-auto p-5 py-md-4">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4 text-muted">CALEB KECH</span>
          </a>
        </header>

        <main>
  <div className="row">
    <div className="fs-5 col-md-8">
      <h1>Reach The Security Community</h1>
      <p>Inspire and educate security professionals without fluff.</p>
      <p>Engage the industry with an authentic voice and show people what matters.</p>
      <p>Share content, foster learning, and make your work known &mdash; <i>we'll do it together</i>.</p>
      <br />
      <div className="mb-5">
        <a href="/sponsor" className="btn btn-primary btn-lg px-4">
          Become a Partner
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="/bio" className="btn btn-info btn-lg px-4">
          Learn about Caleb
        </a>
      </div>

      <div className="mb-5">
        {/* Additional content goes here */}
      </div>
    </div>

    <div id="jh-circle" className="col-md-4">
      <img src="/static/img/jh_circle.png" />
    </div>
  </div>

  <hr className="col-3 col-md-2 mb-4" />

  <div className="row g-5">
    <div className="col-md-6">
      <h2>Tell the Story</h2>
      <p>You control the narrative. Whatever you want to hear, whatever you want to say &mdash; be the subject matter expert across different domains.</p>
      <ul className="icon-list">
        <li className="mb-1">
          <a href="https://www.youtube.com/playlist?list=PL1H1sBF1VAKW3w0itm6ha7uuqq11JBe4D">Security Professionals Insight & Interviews</a>
        </li>

        {/* Add more list items as needed */}

      </ul>
    </div>

    <div className="col-md-6">
      <h2>See the Impact</h2>
      <p>Security education doesn't need to be behind barriers or gates. Break down the walls and bring your message to the community.</p>

      {/* Add social media buttons or links here */}

      <p>Need the news low-and-slow? Join the club.</p>
      
    </div>
  </div>
</main>

        <footer className="pt-5 my-5 mb-1 text-muted border-top">Caleb Kech LLC &middot; &copy; 2023</footer>
      </div>
    </>
  );
}
