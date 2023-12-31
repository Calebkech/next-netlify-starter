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
        <meta name="author" content="Caleb Kech LLC" />
        <title></title>

        {/* Bootstrap */}
        {/* <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" /> */}
        <link
          href="https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />

        {/* Favicons */}
        <meta name="theme-color" content="#712cf9" />

        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          crossorigin="anonymous"
          href="https://gc.kis.v2.scr.kaspersky-labs.com/E3E8934C-235A-4B0E-825A-35A08381A191/abn/main.css?attr=aHR0cHM6Ly9qb2huaGFtbW9uZC5vcmcv"
        />

        {/* Custom styles for this template */}
        <link href="/static/css/landing.css" rel="stylesheet" />
        <link href="/static/css/icon-colors.css" rel="stylesheet" />
      </Head>

      <div className="col-lg-8 mx-auto p-5 py-md-4">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4 text-muted">Caleb Kech</span>
          </a>
        </header>

        <main>
          <div className="row">
            <div className="fs-5 col-md-8">
              <h1>Unified Growth</h1>
              <p>Knowledge is a journey best traveled together.</p>
              <p>Let's build a community where security and DevOps professionals can share insights, exchange experiences, and collectively elevate our industry.</p>
              <p>Share content, foster learning, and make your work known &mdash; <i> We'll do it together</i>.</p>
              <br />
               {/*
              <div className="mb-5">
                <a href="/sponsor" className="btn btn-primary btn-lg px-4">
                  Become a Partner
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="/bio" className="btn btn-info btn-lg px-4">
                  Learn about Caleb
                </a>
              </div>
              */}
              <div className="mb-5">
                {/* Additional content goes here */}
              </div>
            </div>
          </div>
        </main>

        <footer className="pt-5 my-5 mb-1 text-muted border-top">Caleb Kech LLC &middot; &copy; 2023</footer>
      </div>

    </>
  );
}
