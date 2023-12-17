import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="John Hammond LLC">
    <title></title>

  <!-- Bootstrap -->
  <!-- <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"> -->
  <link href="https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <!-- Favicons -->
  <meta name="theme-color" content="#712cf9">    

  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=RYHhqJbVBpqjh_RL7gPcCi2dsG4YDUf4vORtxlL3j2y44E_s3Z8GyHRfDiZe1tj4" charset="UTF-8"></script><link rel="stylesheet" crossorigin="anonymous" href="https://gc.kis.v2.scr.kaspersky-labs.com/E3E8934C-235A-4B0E-825A-35A08381A191/abn/main.css?attr=aHR0cHM6Ly9qb2huaGFtbW9uZC5vcmcv"/><script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js" integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <!-- Custom styles for this template -->
  <link href="/static/css/landing.css" rel="stylesheet">
  <link href="/static/css/icon-colors.css" rel="stylesheet">
  </head>
  <body>
    
<div class="col-lg-8 mx-auto p-5 py-md-4">
  <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
    <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
      <span class="fs-4 text-muted">JOHN HAMMOND</span>
    </a>
  </header>

  <main>
    

<div class="row">

  <div class="fs-5 col-md-8">
    <h1>Reach The Security Community</h1>
    <p> Inspire and educate security professionals without fluff.</p>
    <p> Engage the industry with an authentic voice and show people what matters.</p>
    <p> Share content, foster learning, and make your work known &mdash; <i>we'll do it together</i>.</p>
    <br>
    <div class="mb-5">
      <a href="/sponsor" class="btn btn-primary btn-lg px-4">Become a Partner</a>
       &nbsp;&nbsp;&nbsp;
      <a href="/bio" class="btn btn-info btn-lg px-4">Learn about John</a>
    </div>
   
    <div class="mb-5">
      
    </div>
  
  </div>

  <div id="jh-circle" class="col-md-4">
    <img src="/static/img/jh_circle.png">
  </div>
</div>

<hr class="col-3 col-md-2 mb-4"> <!----------------->

<div class="row g-5">

  <div class="col-md-6">
    <h2>Tell the Story</h2>
    <p> You control the narrative. Whatever you want to hear, whatever you want to say &mdash; be the subject matter expert across different domains. </p>
    <ul class="icon-list">
      <li class=" mb-1">
        <a href="https://www.youtube.com/playlist?list=PL1H1sBF1VAKW3w0itm6ha7uuqq11JBe4D">Security Professionals Insight & Interviews</a>
      </li>

      <li class=" mb-1">
        <a href="https://www.youtube.com/playlist?list=PL1H1sBF1VAKVoU6Q2u7BBGPsnkn-rajlp">Penetration Testing & Ethical Hacking</a>
      </li>

      <li class=" mb-1">
        <a href="https://www.youtube.com/playlist?list=PL1H1sBF1VAKWMn_3QPddayIypbbITTGZv">Threat Hunting & Malware Analysis</a>
      </li>

      <li class=" mb-1">
        <a href="https://www.youtube.com/playlist?list=PL1H1sBF1VAKU8aP5FC-makTTBknb1EWYC">Dark Web Monitoring</a>
      </li>

      <li class=" mb-1">
        <a href="https://www.youtube.com/playlist?list=PL51A2A33163D53FD9">Software Engineering & Code</a>
      </li>
    </ul>
  </div>

  <div class="col-md-6">
    <h2>See the Impact</h2>
    <p>
      Security education doesn't need to be behind barriers or gates. Break down the walls and bring your message to the community.
    </p>

    <p class="text-center">
      <a href="https://j-h.io/youtube" class="btn  btn-block" role="button" target="_blank">
        <i class="fab fa-youtube"></i>&nbsp;YouTube</a>

      <a href="https://j-h.io/twitter" class="btn  btn-block" role="button" target="_blank">
        <i class="fab fa-twitter"></i>&nbsp;Twitter</a>

      <a href="https://j-h.io/linkedin" class="btn  btn-block" role="button" target="_blank">
        <i class="fab fa-linkedin"></i>&nbsp;LinkedIn</a>

      <a href="https://j-h.io/instagram" class="btn  btn-block" role="button" target="_blank">
        <i class="fab fa-instagram"></i>&nbsp;Instagram</a>

      <a href="https://j-h.io/discord" class="btn  btn-block" role="button" target="_blank">
        <i class="fab fa-discord"></i>&nbsp;Discord</a>
    </p>

  <p>
    Need the news low-and-slow? Join the club.
  </p>
  <!-- Begin Mailchimp Signup Form -->
    <!-- <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
    <style type="text/css">
      #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:500px;}
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style> -->

    <div id="mc_embed_signup" class="row">
      <form class="form-inline" action="https://youtube.us7.list-manage.com/subscribe/post?u=4c459b6531f320a0978dd7cef&amp;id=3e190903b1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll" class="form-group mb-2">
          <input class="form-control" placeholder="you@youremailaddress.com" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>
        <div hidden="true"><input type="hidden" name="tags" value="6690958"></div>
        <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4c459b6531f320a0978dd7cef_3e190903b1" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input class="form-control col-md-2" type="submit" value="🚀 Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-outline-dark">
                <!-- <p class="brandingLogo"><a href="http://eepurl.com/hZOUEf" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p> -->
            </div>
        </div>
      </div>
    </form>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    <!--End mc_embed_signup-->
  
    </div>
</div>


  </main>
  <footer class="pt-5 my-5 mb-1 text-muted border-top">
    John Hammond LLC &middot; &copy; 2023
  </footer>
</div>      

<script src="https://getbootstrap.com/docs/5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/22389449.js"></script>
  </body>
</html>
  )
}
