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
        <meta name="author" content="John Hammond LLC" />
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
        <script
          type="text/javascript"
          src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=RYHhqJbVBpqjh_RL7gPcCi2dsG4YDUf4vORtxlL3j2y44E_s3Z8GyHRfDiZe1tj4"
          charset="UTF-8"
        ></script>
        <link
          rel="stylesheet"
          crossorigin="anonymous"
          href="https://gc.kis.v2.scr.kaspersky-labs.com/E3E8934C-235A-4B0E-825A-35A08381A191/abn/main.css?attr=aHR0cHM6Ly9qb2huaGFtbW9uZC5vcmcv"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"
          integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>

        {/* Custom styles for this template */}
        <link href="/static/css/landing.css" rel="stylesheet" />
        <link href="/static/css/icon-colors.css" rel="stylesheet" />
      </Head>

      <div className="col-lg-8 mx-auto p-5 py-md-4">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4 text-muted">JOHN HAMMOND</span>
          </a>
        </header>

        <main>
          {/* Rest of your content */}
        </main>

        <footer className="pt-5 my-5 mb-1 text-muted border-top">John Hammond LLC &middot; &copy; 2023</footer>
      </div>

      <script src="https://getbootstrap.com/docs/5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/22389449.js"></script>
    </>
  );
}
