(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const page = require('..')

function demo (cb) {
  let font = new FontFace('Magic School One', 'url("https://fonts.cdnfonts.com/s/56374/MagicSchoolOne.woff")')
  document.fonts.add(font)
  font.load()

  document.head.inneHTML = `
    <meta property="og:title" content="Swap & Play Wharfedale">
    <meta property="og:description" content="Flexible family play space in Ilkley. No booking slots. Stay as long as you like. Bring your own food.">
    <meta property="og:image" content="https://swapandplaywharfedale.co.uk/assets/parents.jpg">
    <meta property="og:url" content="https://swapandplaywharfedale.co.uk/">
    <meta property="og:type" content="website">
  `

  const favicon = document.createElement('link')
  favicon.setAttribute('rel', 'icon')
  favicon.setAttribute('type', 'imagine/jpeg')
  favicon.setAttribute('href', 'assets/logo-icon.jpg')
  // favicon.setAttribute('href', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><text y="26" font-size="26">👶</text></svg>')
  

  document.head.append(favicon)
  document.title = 'Swap & Play Wharfedale'
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
  register.innerText = 'Join the Founding Families Waitlist'
  register.onclick = register_interest

  shadow.innerHTML = `
    <div class="page">

      <section class="hero">
        <div class="hero-inner">
          <div class="logo">
            <img src="./assets/logo.jpg" alt="Swap & Play Wharfedale logo">
            <h1>Swap & Play Wharfedale!</h1>
            <p class="content">
              A flexible family base in Ilkley — play, pause, connect, swap.
            <br>
              No booking slots. Stay as long as you like. Bring your own food.
            <register></register>
          </div>
          <div class="hero-photo">
            <img src="./assets/children-playing.jpg" alt="Parent and child enjoying Swap & Play" class="photo">
          </div>

        </div>
      </section>

      <div class="wave" style="background:#6fa8dc;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#f4efe6;">
          </path>
        </svg>
      </div>

      <section class="section light">
        <div class="content center">
          <h2>What is Swap & Play?</h2>
          <p>
            Swap & Play is a calm indoor family space designed around real life with young children.
            A place to play, rest, meet others, reset during the day, and enjoy more flexibility.
          </p>
          <p>Just 10 minute walk from the playground and Riverside, just behind Booths on Leeds Road</p>
          <p>
            We are creating something different from standard play cafés:
            no rushed 90-minute slots, no pressure to buy food, no strict schedules.
          </p>
          <p>
            Come when it suits your family. Stay as long as you like during opening hours.
          </p>
        </div>
      </section>

      <section class="photo-story">
        <div class="content content-xl">

          <div class="photo-grid">

            <img src="./assets/child.jpg" alt="Child playing happily" class="story-photo">

            <img src="./assets/parents.jpg" alt="Parents chatting while children play" class="story-photo">

            <img src="./assets/swap.jpg" alt="Parent doing light laptop work while child plays nearby" class="story-photo">

          </div>

        </div>
      </section>
                  
      <div class="wave" style="background:#f4efe6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#fbfaf6;">
          </path>
        </svg>
      </div>

      <section class="section">
        <div class="content content-wide center">

          <h2>Why families may love it</h2>

          <div class="benefits-cloud">

            <div class="bubble bubble-a">
              <h3>Freedom</h3>
              <p>Come around naps, moods, weather and real life.</p>
            </div>

            <div class="bubble bubble-b">
              <h3>Stay Longer</h3>
              <p>Need 30 minutes? Need all morning? Use it your way.</p>
            </div>

            <div class="bubble bubble-c">
              <h3>Bring Your Own Food</h3>
              <p>Snacks your child actually eats. No forced café spend.</p>
            </div>

            <div class="bubble bubble-d">
              <h3>Your Town Base</h3>
              <p>Pop in before, after or between plans.</p>
            </div>

            <div class="bubble bubble-e">
              <h3>A Little Time Back</h3>
              <p>Reply to messages or do light laptop catch-up nearby.</p>
            </div>

            <div class="bubble bubble-f">
              <h3>Community</h3>
              <p>Meet local parents, grandparents and carers.</p>
            </div>

            <div class="bubble bubble-g">
              <h3>Swap & Reuse</h3>
              <p>Exchange clothes and toys. Save waste, money and time.</p>
            </div>

          </div>

        </div>
      </section>

      <section class="section soft">
        <div class="content content-wide center">
          <h2>Choose how your family wants to play</h2>

          <div class="pricing">

            <div class="price-card">
              <div class="label">Flexible</div>
              <h3>Drop-In Visit</h3>
              <div class="price">£10.50</div>
              <p class="small">Perfect for occasional visits.</p>
              <ul>
              <li>Come anytime</li>
              <li>Stay as long as you like</li>
              <li>Indoor play & family space</li>
              </ul>
            </div>

            <div class="price-card featured">
              <div class="label popular">Most Popular</div>
              <h3>5 Visit Pack</h3>
              <div class="price">£49</div>
              <p class="small">Ideal for families who want flexibility without full membership.</p>
              <ul>
                <li>5 flexible visits</li>
                <li>Better value than drop-in</li>
                <li>Use over time</li>
              </ul>
            </div>

            <div class="price-card premium">
              <div class="label premium-label">Best Value</div>
              <h3>Monthly Membership</h3>
              <div class="price">£129</div>
              <p class="small">For families who’d genuinely use this as part of weekly life.</p>
              <ul>
                <li>Unlimited visits</li>
                <li>Swap room access</li>
                <li>Great for regular family routines</li>
                <li>Useful for light laptop catch-up</li>
                <li>Priority future perks</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section class="section light">
        <div class="content center">
          <h2>Imagine the day</h2>
          <p>
            Playground first. Child gets hungry. Weather changes.
            You don’t want to go home yet.
          </p>
          <p>
            Instead, pop into Swap & Play:
            snack, toilet stop, indoor toys, meet a friend,
            reset, then continue your day.
          </p>
          <p>
            It’s more than a playroom — it’s a helpful family base in town.
          </p>
        </div>
      </section>

      <section class="photo-strip">
        <img src="./assets/playground.jpg" alt="Local atmosphere" class="photo">
      </section>

      <div class="wave" style="background:#f4efe6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#fbfaf6;">
          </path>
        </svg>
      </div>

      <section class="section">
        <div class="content center">
          <h2>Founding Families</h2>
          <p>
            Join the first families shaping a calmer way to spend time in Ilkley.
          </p>
          <p>
            Join the waitlist to hear first about launch dates,
            early access and opening offers.
          </p>
          <register></register>
        </div>
      </section>

      <div class="wave" style="background:#fbfaf6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#6fa8dc;">
          </path>
        </svg>
      </div>

      <section class="section cta-section">
        <div class="content center">
          <h2>Help shape it</h2>
          <p>
            We’re listening closely to local families in Ilkley, Burley, Otley
            and surrounding villages.
          </p>
          <p>
            If you'd use this, join the waitlist and help bring it to life.
          </p>
          <register></register>
        </div>
      </section>

    </div>
  `

  shadow.querySelectorAll('register').forEach(node => {
    const btn = register.cloneNode(true)
    btn.onclick = register_interest
    node.replaceWith(btn)
  })

  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)

  if (cb) cb()
  return el

  function register_interest() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeFu8CQyIAWTMzz8aAmtvDZVeKvED1oy5MFNYrJya9DF3FrnQ/viewform',
      '_blank'
    )
  }
}

function get_theme() {
  return `
    :host {
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      --sage: #6b8f71;
      --forest: #2f4f4f;

      --pale-blue: #6fa8dc;
      --dark-blue: #5297cd;
      --pale-pink: #f4a6c0;
      --pale-green: #d1ece6;

      --sand: #f4efe6;
      --terracotta: #d57a66;
      --sun: #f6d66b;

      --heather: #a97dbd;
      --heather-dark: #8f64a4;

      --cream: #fbfaf6;
      --beige: #e9e6e1;
      --soft: #eef5ef;

      /* NEW: better UI neutrals */
      --ink: #2f4f4f;
      --muted: #6f8079;
      --surface: #ffffff;
      --surface-alt: #f6f3ee;
    }
    .page {
      background: var(--cream);
      color: var(--ink);
      line-height: 1.7;
    }

    h1, h2, h3, p {
      margin-top: 0;
    }

    h1 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
      color: var(--sand);
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1.25rem;
      margin-top: 0;
    }

    h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.3rem;
      color: var(--ink);
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1.2rem;
      line-height: 1.75;
    }

    .wave {
      display: block;
      width: 100%;
      height: 130px;
      line-height: 0;
      margin: -1px 0;
    }

    .wave svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    .photo {
      width: 100%;
      max-width: 820px;
      height: 560px;
      object-fit: cover;
      object-position: center;
      border-radius: 22px;
      display: block;
      margin: 2rem auto;
      object-position: center 30%;
      border: 16px solid var(--pale-blue);
    }

    .photo-strip {
      background-color: var(--sand);
      .photo {
        margin: 0 auto;
      }
    }

    .hero-photo {
      width: 100%;
      max-width: 520px;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 58% 42% 55% 45% / 42% 58% 38% 62%;
      transform: rotate(-2deg);
      border: 16px solid var(--cream);
      box-sizing: border-box;
      padding: 20px;
    }

    .hero-photo .photo {
      width: 100%;
      height: 560px;
      object-fit: cover;
      display: block;
      margin: 0;
      max-width: none;
      border-radius: 0;
    }

    .photo-story {
      padding: 1rem 1.5rem 3rem;
      background: var(--sand);
    }

    .photo-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .story-photo {
      width: 100%;
      height: 450px;
      object-fit: cover;
      border-radius: 20px;
      display: block;
      transition: transform 0.25s ease;
      border: 8px solid var(--pale-pink);
    }

    .story-photo:hover {
      transform: translateY(-3px);
    }

    /* HERO — softened so logo feels natural */
    .hero {
      background: var(--pale-blue);
      padding: 2rem 1.5rem 0rem;
      text-align: center;
    }

    .hero-inner {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    .logo img {
      height: 360px;
      margin-bottom: 1.5rem;
      /* subtle lift so black/white logo doesn't feel "flat" */
      filter: drop-shadow(0 2px 6px rgba(0,0,0,0.08));
    }

    .location {
      font-size: 1rem;
      color: var(--muted);
      margin-bottom: 1.5rem;
    }

    /* BUTTON — calmer, less “sun heavy” */
    button {
      margin: 1rem;
      padding: 0.95rem 2rem;
      border: none;
      border-radius: 40px;
      background: var(--pale-pink);
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: 0.25s ease;
    }

    button:hover {
      background: var(--heather-dark);
      transform: translateY(-1px);
    }

    .section {
      padding: 4rem 1.5rem;
    }

    .section h2 {
      margin-bottom: 1.5rem;
    }

    .light { background: var(--sand); }
    .soft { background: var(--pale-green); }
    .cta-section { background: var(--pale-blue); }

    .content {
      max-width: 960px;
      margin: 0 auto;
      letter-spacing: 0.2px;
    }

    .content p + p {
      margin-top: -0.4rem;
    }

    .content-wide {
      max-width: 1320px;
      margin: 0 auto;
    }

    .content-xl {
      max-width: 1480px;
      margin: 0 auto;
    }

    .center {
      text-align: center;
    }

    .center p {
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
    }

    .grid.two {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
      margin-top: 2rem;
    }

    .benefits-cloud {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.2rem;
      margin-top: 3rem;
    }

    .bubble {
      width: 280px;
      min-height: 220px;
      padding: 2rem 1.8rem;
      background: #ffffff;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 8px solid var(--heather);
      transition: transform 0.2s ease;
    }

    .bubble:hover {
      transform: translateY(-4px);
    }

    .bubble h3 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
    }

    .bubble p {
      margin: 0;
      font-size: 1rem;
      line-height: 1.5;
    }

    /* irregular shapes */
    .bubble-a {
      border-radius: 58% 42% 48% 52% / 44% 54% 46% 56%;
    }

    .bubble-b {
      border-radius: 46% 54% 60% 40% / 52% 38% 62% 48%;
      border-color: var(--pale-pink);
    }

    .bubble-c {
      border-radius: 63% 37% 45% 55% / 40% 60% 40% 60%;
    }

    .bubble-d {
      border-radius: 42% 58% 55% 45% / 60% 42% 58% 40%;
      border-color: var(--pale-blue);
    }

    .bubble-e {
      border-radius: 55% 45% 40% 60% / 48% 62% 38% 52%;
    }

    .bubble-f {
      border-radius: 40% 60% 52% 48% / 56% 44% 56% 44%;
      border-color: var(--pale-green);
    }

    .bubble-g {
      border-radius: 60% 40% 50% 50% / 44% 58% 42% 56%;
    }

    @media (max-width: 768px) {
      .bubble {
        width: 100%;
        max-width: 360px;
        min-height: auto;
        padding: 1.8rem 1.4rem;
      }
}

    .card {
      background: #ffffff;
      padding: 1.55rem;
      border-radius: 20px;
      border: 8px solid var(--sun);
      transition: transform 0.2s ease;
    }

    /* PRICING */
    .pricing {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 2rem;
    }

    .price-card {
      background: var(--surface);
      border-radius: 20px;
      padding: 1.6rem;
      position: relative;
      border: 8px solid var(--soft);
      font-size: 1rem;
    }

    .price-card h3 {
      font-size: 1.25rem;
      margin: 0.5rem 0 0.75rem;
    }

    .featured {
      transform: scale(1.03);
      border: 8px solid var(--pale-pink);
    }

    .premium {
      border: 8px solid var(--pale-blue);
    }

    .label {
      display: inline-block;
      font-size: 0.8rem;
      padding: 0.3rem 0.7rem;
      border-radius: 999px;
      margin-bottom: 1rem;
      background: var(--soft);
      color: var(--pale-pink);
    }

    .popular {
      background: var(--pale-pink);
      color: var(--cream);
    }

    .premium-label {
      background: var(--pale-blue);
      color: var(--cream);
    }

    .price {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--ink);
    }

    .price-card ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0 0 0;
      text-align: left;
    }

    .price-card li {
      position: relative;
      padding-left: 1.4rem;
      margin-bottom: 0.6rem;
      line-height: 1.5;
      color: var(--ink);
    }

    .price-card li::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--pale-blue);
      font-weight: bold;
    }

    .small {
      font-size: 0.95rem;
      padding: 0.2rem;
      text-align: center;
    }

    @media (max-width: 900px) {
      .pricing {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.2rem; }
      h2 { font-size: 1.6rem; }
      p { font-size: 1rem; }
    }

    @media (max-width: 768px) {
      .photo {
        height: 260px;
        border-radius: 20px;
        margin: 1.2rem auto;
      }
    }
  `
}
},{}]},{},[1]);
