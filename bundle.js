(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const page = require('..')

function demo (cb) {
  let font = new FontFace('Magic School One', 'url("https://fonts.cdnfonts.com/s/56374/MagicSchoolOne.woff")')
  document.fonts.add(font)
  font.load()

  const favicon = document.createElement('link')
  favicon.setAttribute('rel', 'icon')
  favicon.setAttribute('type', 'imagine/png')
  favicon.setAttribute('href', './assets/Wizard-Amigos---Stickers---WIZARD-BALL---TRANSPARENT---2022.png')
  
  document.head.append(favicon)
  const codecamp = page(cb)
  return codecamp
}
var count = 0
const el = demo(async () => {
  await document.fonts.ready
  const style = document.createElement('style')
  style.textContent = `
    html, body {
      height: 100%;
      font-size: 1.3em;
      margin: 0;
      padding: 0;
      background-color: black;
    }
  `
  document.body.append(style, el)
})



},{"..":2}],2:[function(require,module,exports){
module.exports = page

function page(cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const register = document.createElement('button')
  register.innerText = 'Register interest'
  register.onclick = () => register_interest()

  shadow.innerHTML = `
    <div class="page">

      <section class="hero">
        <div class="hero-inner">
          <h1>Swap & Play Wharfedale</h1>
          <p class="tagline">
            A hopeful new shared space for families — play, reuse, connect.
          </p>
          <register></register>
        </div>
      </section>

      <section class="section light">
        <div class="content">
          <h2>What is Swap & Play?</h2>
          <p>
            Swap & Play is a community-led indoor play and swap space for parents,
            carers and young children (0–5), inspired by a successful model in Portland, Oregon
            and shaped for Ilkley, Otley, Burley in Wharfedale and nearby villages.
          </p>
          <p>
            Children play freely and safely. Adults remain onsite — chatting, resting,
            working nearby, or simply having a cup of tea without rushing.
          </p>
          <p>
            This is <strong>not drop-off childcare</strong>. Parents and carers stay
            responsible for their children, creating a shared and supportive environment.
          </p>
        </div>
      </section>

      <section class="section image-section">
        <div class="content">
          <img src="https://i.imgur.com/qSit4E1.jpeg" alt="Swap and Play Portland example">
          <p class="caption">
            Example of the original Swap & Play concept in Portland, Oregon.
            <strong>This is not the Wharfedale location.</strong>
          </p>
        </div>
      </section>

      <section class="section image-section">
        <div class="content">
          <img src="https://i.imgur.com/4kCujL3.jpeg" alt="Toy and clothes swap example">
          <p class="caption">
            Example swap area from the original concept in Portland.
          </p>
        </div>
      </section>

      <section class="section soft">
        <div class="content">
          <h2>Why it matters</h2>
          <p>
            We believe small towns deserve shared spaces where families can gather,
            reduce isolation, reuse resources, and build real local connection.
          </p>
          <p>
            The swap area helps families exchange toys and clothes they no longer need,
            lowering costs and reducing waste.
          </p>
          <p>
            The play space supports flexible, modern family life —
            especially for parents on leave, freelancers, remote workers,
            grandparents and carers.
          </p>
        </div>
      </section>

            <!-- New local scenery images -->
      <section class="section image-section">
        <div class="content">
          <img src="https://i.imgur.com/L3lbyay.jpeg" alt="Ilkley Moor landscape">
          <p class="caption">
            Local scenery from Ilkley Moor
          </p>
        </div>
      </section>

      <section class="section">
        <div class="content">
          <h2>How it works</h2>
          <p>
            Swap & Play is planned as a membership-based, community-run space,
            open throughout the week.
          </p>
          <p>
            Members can use the space flexibly during opening hours.
            No rigid sessions. No overstimulation. Just a calm, shared environment.
          </p>
          <p>
            At certain times, optional short supervised play sessions may be offered
            by a qualified childcare professional, with parents remaining in the building
            and immediately available.
          </p>
        </div>
      </section>

      <section class="section light">
        <div class="content">
          <h2>Where</h2>
          <p>
            We are currently exploring suitable indoor spaces in Ilkley, Otley,
            Burley in Wharfedale or nearby villages.
          </p>
          <p>
            The aim is to partner with a local venue that believes in community,
            sustainability and long-term local benefit.
          </p>
          <p><em>Exact location to be announced.</em></p>
        </div>
      </section>


      <section class="section image-section">
        <div class="content">
          <img src="https://i.imgur.com/xkedUFD.jpeg" alt="Wharfedale village vibes">
          <p class="caption">
            Beatiful Burley in Wharfedale
          </p>
        </div>
      </section>


      <section class="section cta-section">
        <div class="content center">
          <h2>Help shape it</h2>
          <p>
            We are currently gauging interest and speaking with potential partners.
            If this feels like something your family — or your venue — would support,
            we would love to hear from you.
          </p>
          <register></register>
        </div>
      </section>

    </div>
  `

shadow.querySelectorAll('register').forEach(node => {
  const btn = register.cloneNode(true)
  btn.onclick = register_interest  // reattach event listener
  node.replaceWith(btn)
})
  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)

  if (cb) cb()
  return el

function register_interest() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSeFu8CQyIAWTMzz8aAmtvDZVeKvED1oy5MFNYrJya9DF3FrnQ/viewform', '_blank')
}

}

function get_theme() {
  return `
    :host {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      --sage: #6b8f71;
      --forest: #2f4f4f;
      --sand: #f4efe6;
      --terracotta: #d57a66;
      --sun: #f2c14e;
      --cream: #fbfaf6;
      --heather: #a68eb2; /* new hero color */
    }

    .page {
      background: var(--cream);
      color: var(--forest);
      line-height: 1.7;
    }

    h1 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: 600;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--sage);
    }

    p {
      font-size: 1.15rem;
      margin-bottom: 1rem;
    }

    .hero {
      background: var(--heather);
      padding: 6rem 1.5rem 5rem 1.5rem;
      text-align: center;
      color: white;
    }

    .tagline {
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }

    button {
      padding: 0.9rem 2rem;
      font-size: 1rem;
      border-radius: 40px;
      border: none;
      background: var(--sun);
      color: var(--forest);
      cursor: pointer;
      transition: all 0.4s ease; /* smoother hover */
    }

    button:hover {
      background: var(--terracotta);
      color: white;
    }

    .section {
      padding: 4rem 1.5rem;
    }

    .light {
      background: var(--sand);
    }

    .soft {
      background: #eef5ef;
    }

    .content {
      max-width: 820px;
      margin: 0 auto;
    }

    .center {
      text-align: center;
    }

    .image-section img {
      width: 100%;
      border-radius: 18px;
      margin-bottom: 1rem;
    }

    .caption {
      font-size: 0.9rem;
      font-style: italic;
      opacity: 0.8;
    }

    .cta-section {
      background: var(--sand);
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.2rem;
      }
      h2 {
        font-size: 1.6rem;
      }
    }
  `
}

},{}]},{},[1]);
