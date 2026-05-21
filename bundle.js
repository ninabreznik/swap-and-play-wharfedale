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
  favicon.setAttribute('type', 'image/x-icon')
  favicon.setAttribute('href', './assets/favicon.ico?v=2')
  
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
  register.innerText = 'Register for a Free Trial Week'
  register.onclick = register_interest

  shadow.innerHTML = `
    <div class="page">

      <section class="hero">
        <div class="hero-inner">
          <div class="logo hero-copy">
            <img src="./assets/logo.png" alt="Swap & Play Wharfedale logo">
            <p class="eyebrow">Opening June 2026 in Ilkley</p>
            <h1>A calmer way to do play time</h1>
            <p class="hero-subtitle">
              A small, membership-only family space where children can play and parents can breathe.
            </p>
            <register></register>
          </div>
          <div class="hero-photo">
            <img src="./assets/hero.png" alt="Parent relaxing while children play nearby" class="photo">
          </div>
        </div>
      </section>
      

      <div class="wave" style="background:#6fa8dc;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#d1ece6;">
          </path>
        </svg>
      </div>

      <section class="section light swap-section">
        <div class="content content-split">
          <div>
            <p class="eyebrow dark">Swap, share, reuse</p>
            <h2>With a swap room</h2>
          </div>
          <div>
              Because children grow quickly, families already have enough stuff, and community works better when useful things keep circulating.
          </div>
        </div>
      </section>


      <div class="wave" style="background:#d1ece6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#f4efe6;">
          </path>
        </svg>
      </div>


      <section class="section light intro-section">
        <div class="content center">
          <p class="eyebrow dark">Not soft play. Something calmer.</p>
          <h2>Your flexible base in Ilkley</h2>
          <p>
            Swap & Play Wharfedale is a calm, members-only family play space designed around real life with young children.
          </p>
          <p>
            No booking. No rushing. No hosting. No extra spending. Just arrive.
          </p>
          <img src="./assets/map.png" alt="How to get to Swap & Play" class="photo">
          <p class="location-line">
          Just behind Booths on Leeds Road — a short walk from the playground and Riverside.
          </p>
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

      <section class="section small-purpose">
        <div class="content content-split">
          <div>
            <p class="eyebrow dark">Small by design</p>
            <h2>Calm needs space</h2>
          </div>
          <div>
            <p>
              Swap & Play is intentionally designed for a low-density experience — because we are building the opposite of a hectic play centre.
            </p>
            <p>
              The space has two rooms. The main room is calm and open, with areas for Duplo, magnetic blocks, puzzles, role play, reading, art and other focused play.
            </p>
            <p>
              The second room is a smaller movement room, with a sensory wall, a wooden climbing frame with a slide and soft mats for children who need to move their bodies.
            </p>
          </div>
        </div>
      </section>

      <section class="photo-story">
        <div class="content content-xl">
          <div class="photo-grid">
            <img src="./assets/baby-reading.jpg" alt="Child placing animal pieces into a shape sorter" class="story-photo">
            <img src="./assets/children-playing.jpg" alt="Two children gently sharing a toy" class="story-photo">
            <img src="./assets/child-sitting.jpg" alt="Child quietly exploring books and textures" class="story-photo">
          </div>
        </div>
      </section>

      <div class="wave" style="background:#fbfaf6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#d1ece6;">
          </path>
        </svg>
      </div>

      <section class="section soft relief-section swap-section">
      <div class="content center">
        <p class="eyebrow dark">Simple and sustainable</p>
        <h2>Give what you can. Take what you need.</h2>

        <p>
          When you visit, you are welcome to bring gently used children’s clothing, books, toys and small bits of family gear.
          You can also browse the Swap Room and take what your family can use.
          It is not a one-for-one system — simply give when you can, and take when something is useful.
        </p>

        <img
          src="./assets/swap.png"
          alt="Children’s clothes, books and toys being shared and reused through the Swap Room"
          class="photo"
        >

        <p>
          Donations can be placed in the designated bins, and a volunteer will sort and shelve them later.
          Please keep children in the play rooms rather than the Swap Room, as it is not a play area.
        </p>

        <p>
          We ask that donations are new or like-new, stain-free, and items you would be happy to give to a friend.
        </p>
      </div>
      </section>

      <div class="wave" style="background:#d1ece6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#f4efe6;">
          </path>
        </svg>
      </div>


      <section class="section included-section">
        <div class="content center">
          <p class="eyebrow dark">A membership built around real life</p>
          <h2>Everything you need for an easier family rhythm</h2>
          <p class="included-intro">
            More than play access — a calm, flexible base you can use as part of everyday life.
          </p>

          <div class="included-grid calm-cards">

            <div class="included-card">
              <h3>Unlimited access</h3>
              <p>Use the space regularly without thinking about each visit as a separate cost.</p>
            </div>

            <div class="included-card">
              <h3>Self check-in</h3>
              <p>Come and go more freely during opening hours, without waiting for a session.</p>
            </div>

            <div class="included-card">
              <h3>Open every day</h3>
              <p>Open 365 days a year, from 6am to 9pm.</p>
            </div>

            <div class="included-card">
              <h3>Shoe-free and clean</h3>
              <p>A calmer, cleaner environment for small children and crawling babies.</p>
            </div>

            <div class="included-card">
              <h3>Tea and coffee included</h3>
              <p>No pressure to buy something every time you visit.</p>
            </div>

            <div class="included-card">
              <h3>Bring your own food</h3>
              <p>Pack the snacks your child actually eats and stay longer if the day is going well.</p>
            </div>

            <div class="included-card">
              <h3>Space for parents too</h3>
              <p>Sit, read, chat, do light laptop catch-up or simply pause.</p>
            </div>

            <div class="included-card">
              <h3>Swap instead of rebuying</h3>
              <p>Children’s clothes and shoes shared between members.</p>
            </div>

            <div class="included-card">
              <h3>Gentle occupancy updates</h3>
              <p>Know when the space is busier so the atmosphere can stay calm.</p>
            </div>

          </div>
        </div>
      </section>

      <div class="wave" style="background:#f4efe6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#d1ece6;">
          </path>
        </svg>
      </div>

    <section class="section soft pricing-section">
      <div class="content content-wide center">
        <p class="eyebrow dark">Membership</p>
        <h2>Try it for a week. Then decide if it fits your family.</h2>
        <p class="section-intro">
          Swap & Play is not pay-per-play. It is designed as an everyday family base —
          somewhere you can pop into before, after or between plans.
        </p>

        <div class="trial-card price-card trial membership-card">
          <div class="label">Try it first</div>
          <h3>Free Trial Week</h3>
          <div class="price">£0</div>

          <p class="small">
            Come and use the space for a week before deciding if membership is right for your family.
          </p>

          <ul>
            <li>Unlimited visits for one week</li>
            <li>Explore the play rooms and Swap Room</li>
            <li>No pressure to join afterwards</li>
          </ul>

          <p class="small-note">
            One free trial week per family. Registration required.
          </p>

          <a class="button" href=https://docs.google.com/forms/d/e/1FAIpQLSe3HZA6pof7I7m4diGGWerDKkNo0uKZVCql5Szl741bPu2aIg/viewform?usp=header">
            Register for a Free Trial Week
          </a>
        </div>

        <div class="pricing membership-pricing">

          <div class="price-card featured membership-card">
            <div class="label popular">Founding Families</div>
            <h3>Founding Membership</h3>
            <div class="price">£89<span>/month</span></div>
            <p class="small">
              For the first families helping shape a new kind of local family space.
            </p>
            <ul>
              <li>Unlimited access</li>
              <li>Open every day, 6am to 9pm</li>
              <li>No booking slots</li>
              <li>Tea and coffee included</li>
              <li>Bring your own food</li>
              <li>Swap Room access</li>
              <li>Keep your founding price while you remain a member</li>
            </ul>
          </div>

          <div class="price-card premium membership-card">
            <div class="label premium-label">Standard</div>
            <h3>Standard Membership</h3>
            <div class="price">£129<span>/month</span></div>
            <p class="small">
              For families joining after the founding places are filled.
            </p>
            <ul>
              <li>Unlimited access</li>
              <li>Open every day, 6am to 9pm</li>
              <li>No booking slots</li>
              <li>Smart-lock entry during opening hours</li>
              <li>Tea and coffee included</li>
              <li>Bring your own food</li>
              <li>Swap Room access</li>
              <li>Gentle occupancy updates</li>
            </ul>
          </div>

          <div class="price-card quiet-card membership-card">
            <div class="label">Additional Child</div>
            <h3>Sibling Add-On</h3>
            <div class="price">+£10<span>/month</span></div>
            <p class="small">
              For families with more than one child using the space regularly.
            </p>
            <ul>
              <li>Simple monthly add-on</li>
              <li>Designed for family use</li>
              <li>No per-session calculation</li>
            </ul>
          </div>

        </div>

        <div class="community-note">
          <h3>Community Contribution Memberships</h3>
          <p>
            We are exploring a small number of reduced memberships for families who would love to be part of Swap & Play and are happy to occasionally help with small practical tasks, such as organising toys, sorting donated items or supporting the community.
          </p>
          <p>
            Interested? Email
            <a href="mailto:nina@swapandplaywharfedale.co.uk">nina@swapandplaywharfedale.co.uk</a>.
          </p>
        </div>
      </div>
    </section>

      <div class="wave" style="background:#d1ece6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#f4efe6;">
          </path>
        </svg>
      </div>


     <section class="section light faq-section">
        <div class="content center">
          <p class="eyebrow dark">Good to know</p>
          <h2>A few useful details</h2>

          <div class="faq-list">
            <div class="faq-item">
              <h3>Is this soft play?</h3>
              <p>No. Swap & Play is a calm members-only family space designed for low numbers, flexible access and a gentler atmosphere.</p>
            </div>
            <div class="faq-item">
              <h3>Do I need to book?</h3>
              <p>No. Members can come during opening hours without booking a slot.</p>
            </div>
            <div class="faq-item">
              <h3>Can I bring food?</h3>
              <p>Yes. Bring your own food and drinks. Tea and coffee are included for grown-ups.</p>
            </div>
            <div class="faq-item">
              <h3>What if it gets busy?</h3>
              <p>We will use gentle occupancy updates so families can make informed choices and the space can stay calm.</p>
            </div>
            <div class="faq-item">
              <h3>Can parents use a laptop there?</h3>
              <p>This is not a coworking office, but parents can occasionally reply to messages, read, do light laptop catch-up or simply sit while children play nearby.</p>
            </div>
          </div>
        </div>
      </section>      
      
      <div class="wave" style="background:#f4efe6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#e9e6e1;">
          </path>
        </svg>
      </div>

      <section class="section day-section">
        <div class="content center">
          <p class="eyebrow dark">For the days that need somewhere else</p>
          <h2>Not another activity. A place to land</h2>
          <p>
            Some days everyone needs a change of scene.
          </p>
          <p>
            Somewhere children can play. Somewhere parents can sit. Somewhere familiar, flexible and easy.
          </p>
        </div>
      </section>

      <section class="photo-strip">
        <img src="./assets/parents.jpg" alt="Parents drawing with their children" class="photo">
      </section>

      <div class="wave" style="background:#e9e6e1;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#6fa8dc;">
          </path>
        </svg>
      </div>

      <section class="section cta-section">
        <div class="content center">
          <p class="eyebrow light-text">Opening soon</p>
          <h2>Try Swap & Play for a week.</h2>
          <p>
            Register for a free trial week and see whether a calmer, more flexible family space fits your everyday rhythm.
          </p>
          <register></register>
        </div>
      </section>

      <footer class="footer">
        <div class="content center">

          <img
            src="./assets/logo.png"
            class="footer-logo"
            alt="Swap & Play">

          <p>
            Swap & Play Wharfedale<br>
            A calm family club for Ilkley and the wider Wharfedale area
          </p>

          <p>
            Questions or ideas?<br>
            nina@swapandplaywharfedale.co.uk
          </p>

        </div>
      </footer>

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
    shadow.querySelector('.pricing-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
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

      --ink: #2f4f4f;
      --muted: #6f8079;
      --surface: #ffffff;
      --surface-alt: #f6f3ee;
      --shadow-soft: 0 18px 48px rgba(47,79,79,0.10);
      --shadow-card: 0 16px 44px rgba(47,79,79,0.075);
      --line-soft: rgba(47,79,79,0.10);
    }

    .page {
      background: var(--cream);
      color: var(--ink);
      line-height: 1.7;
    }

    h1, h2, h3, p { margin-top: 0; }

    h1 {
      font-size: clamp(2.35rem, 5vw, 4.6rem);
      line-height: 0.98;
      margin: 0 0 1.25rem 0;
      font-weight: 750;
      color: var(--cream);
      letter-spacing: -0.06em;
      max-width: 720px;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 3.4rem);
      line-height: 1.05;
      margin-bottom: 1.25rem;
      margin-top: 0;
      letter-spacing: -0.045em;
    }

    h3 {
      margin: 0 0 0.55rem 0;
      font-size: 1.22rem;
      line-height: 1.18;
      color: var(--ink);
      letter-spacing: -0.02em;
    }

    p {
      font-size: 1.08rem;
      margin-bottom: 1.15rem;
      line-height: 1.72;
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-weight: 800;
      font-size: 0.76rem;
      margin-bottom: 0.9rem;
      color: rgba(255,255,255,0.86);
    }

    .eyebrow.dark {
      color: var(--heather-dark);
    }

    .eyebrow.light-text {
      color: rgba(255,255,255,0.9);
    }

    .wave {
      display: block;
      width: 100%;
      height: 118px;
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
      object-position: center 30%;
      border-radius: 28px;
      display: block;
      margin: 2rem auto;
      border: 14px solid rgba(255,255,255,0.72);
      box-shadow: 0 24px 70px rgba(47,79,79,0.12);
    }

    .photo-strip {
      background-color: var(--beige);
      padding: 0 1.5rem 4rem;
    }

    .photo-strip .photo {
      margin: 0 auto;
      border-color: var(--cream);
    }

    .intro-section .photo,
    .swap-section .photo {
      object-fit: contain;
      width: auto;
    }

    .hero-photo {
      width: 100%;
      max-width: 540px;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 44px;
      transform: rotate(-1deg);
      border: 14px solid rgba(255,255,255,0.75);
      box-sizing: border-box;
      padding: 16px;
      background: rgba(255,255,255,0.2);
      box-shadow: 0 28px 80px rgba(47,79,79,0.16);
    }

    .hero-photo .photo {
      width: 100%;
      height: 560px;
      object-fit: cover;
      display: block;
      margin: 0;
      max-width: none;
      border-radius: 28px;
      border: none;
      box-shadow: none;
    }

    .photo-story {
      padding: 1rem 1.5rem 3.5rem;
      background: var(--cream);
    }

    .photo-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .story-photo {
      width: 100%;
      height: 420px;
      object-fit: cover;
      border-radius: 26px;
      display: block;
      transition: transform 0.25s ease;
      border: 8px solid rgba(255,255,255,0.7);
      box-shadow: 0 18px 50px rgba(47,79,79,0.1);
    }

    .story-photo:hover {
      transform: translateY(-3px);
    }

    .hero {
      background: var(--pale-blue);
      padding: 3rem 1.5rem 0rem;
      text-align: left;
    }

    .hero .logo img {
      filter:
        brightness(0)
        invert(1)
        drop-shadow(0 2px 10px rgba(0,0,0,.08));
      opacity: .96;
    }

    .hero-inner {
      display: grid;
      grid-template-columns: minmax(0, 680px) minmax(320px, 540px);
      justify-content: center;
      align-items: center;
      gap: 4rem;
      max-width: 1320px;
      margin: 0 auto;
    }

    .hero-copy {
      padding: 2rem 0 4rem;
    }

    .logo img {
      height: 340px;
      margin-bottom: 2rem;
      filter: drop-shadow(0 2px 6px rgba(0,0,0,0.08));
    }

    .hero-subtitle {
      color: var(--cream);
      font-size: clamp(1.18rem, 2vw, 1.5rem);
      line-height: 1.45;
      max-width: 600px;
      margin-bottom: 1rem;
    }

    .hero-relief {
      color: rgba(255,255,255,0.96);
      font-weight: 800;
      font-size: 1.35rem;
      line-height: 1.6;
      max-width: 560px;
      margin-bottom: 1rem;
    }

    .founding-note {
      color: rgba(255,255,255,0.88);
      font-size: 0.98rem;
      line-height: 1.5;
      margin-top: 0.5rem;
      max-width: 540px;
    }

    .micro-proof {
      opacity: .82;
      font-size: .92rem;
      color: rgba(255,255,255,.92);
      margin-top: 1rem;
    }

    .social-proof {
      margin-top: 1rem;
      font-size: .96rem;
      color: rgba(255,255,255,.92);
      max-width: 580px;
      line-height: 1.6;
    }

    .dark-note {
      color: var(--muted);
    }

    .location-line {
      color: var(--muted);
      font-size: 1rem;
      margin-top: 1.4rem;
    }

    a {
      color: var(--heather-dark);
      text-underline-offset: 0.18em;
    }

    button,
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      padding: 1rem 2.1rem;
      border: none;
      border-radius: 999px;
      background: var(--pale-pink);
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 800;
      line-height: 1.1;
      text-decoration: none;
      transition: 0.25s ease;
      box-shadow: 0 14px 35px rgba(143,100,164,0.22);
    }

    button:hover,
    .button:hover {
      background: var(--heather-dark);
      transform: translateY(-1px);
    }

    .section {
      padding: 5rem 1.5rem;
    }

    .section h2 {
      margin-bottom: 1.5rem;
    }

    .light { background: var(--sand); }
    .soft { background: var(--pale-green); }
    .cta-section { background: var(--pale-blue); color: var(--cream); }
    .cta-section h2, .cta-section p { color: var(--cream); }

    .content {
      max-width: 960px;
      margin: 0 auto;
      letter-spacing: 0.1px;
    }

    .content p + p {
      margin-top: -0.35rem;
    }

    .content-wide {
      max-width: 1320px;
      margin: 0 auto;
    }

    .content-xl {
      max-width: 1480px;
      margin: 0 auto;
    }

    .content-split {
      max-width: 1180px;
      display: grid;
      grid-template-columns: 0.85fr 1.15fr;
      gap: 4rem;
      align-items: start;
    }

    .center {
      text-align: center;
    }

    .center p {
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
    }

    .intro-section p {
      font-size: 1.15rem;
    }

    .small-purpose {
      background: var(--cream);
    }

    .relief-section {
      background: var(--pale-green);
    }

    .relief-section p {
      font-size: 1.2rem;
      max-width: 820px;
    }

    .benefits-cloud {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.35rem;
      margin-top: 3rem;
    }

    .bubble {
      width: 280px;
      min-height: 205px;
      padding: 1.65rem 1.45rem;
      background: #ffffff;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid rgba(47,79,79,0.1);
      border-radius: 24px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: var(--shadow-card);
    }

    .bubble:hover {
      transform: translateY(-4px);
      box-shadow: 0 22px 55px rgba(47,79,79,0.11);
    }

    .bubble h3 {
      margin: 0 0 0.75rem 0;
      font-size: 1.18rem;
    }

    .bubble p {
      margin: 0;
      font-size: 0.98rem;
      line-height: 1.52;
      color: var(--muted);
    }

    .bubble-a,
    .bubble-c,
    .bubble-e,
    .bubble-g {
      border-top: 7px solid var(--heather);
    }

    .bubble-b,
    .bubble-f {
      border-top: 7px solid var(--pale-pink);
    }

    .bubble-d,
    .bubble-h {
      border-top: 7px solid var(--pale-blue);
    }

    .included-section {
      background: var(--sand);
    }

    .included-intro {
      max-width: 700px;
      margin: 0 auto 2rem;
    }

    .included-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 2rem;
    }

    .included-card {
      background: #ffffff;
      border-radius: 24px;
      padding: 1.65rem;
      border: 1px solid rgba(47,79,79,0.1);
      text-align: left;
      box-shadow: var(--shadow-card);
    }

    .included-card h3 {
      font-size: 1.12rem;
      margin-bottom: 0.65rem;
    }

    .included-card p {
      font-size: 0.98rem;
      line-height: 1.58;
      margin: 0;
      color: var(--muted);
    }

    .swap-section {
      background: var(--pale-green);
    }

    .day-section {
      background: var(--beige);
    }

    .founding-section {
      background: var(--pale-blue);
    }

    .founding-price {
      font-size: clamp(3rem, 7vw, 5.4rem);
      font-weight: 800;
      line-height: 1;
      color: var(--ink);
      letter-spacing: -0.06em;
      margin: 1.5rem 0 0.75rem;
    }

    /* Pricing section */

    .pricing-section {
      background: var(--pale-green);
    }

    .pricing-section .section-intro {
      max-width: 560px;
      margin: 0 auto 2rem;
      font-size: 1.05rem;
      line-height: 1.62;
      color: var(--ink);
    }

    .trial-card {
      max-width: 620px;
      margin: 2rem auto 2.65rem;
      padding: 2rem;
      border-radius: 30px;
      background: rgba(255,255,255,0.95);
      border: 3px solid var(--pale-pink);
      box-shadow: var(--shadow-soft);
      text-align: left;
    }

    .trial-card h3 {
      font-size: 1.65rem;
      line-height: 1.08;
      margin: 0.5rem 0 0.75rem;
    }

    .trial-card .price {
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 0.85rem;
    }

    .trial-card .small {
      max-width: none;
      margin: 0 0 1rem 0;
    }

    .trial-card ul {
      list-style: none;
      padding: 0;
      margin: 1.15rem 0 0 0;
      text-align: left;
    }

    .trial-card li {
      position: relative;
      padding-left: 1.4rem;
      margin-bottom: 0.65rem;
      line-height: 1.5;
      color: var(--ink);
      font-size: 0.98rem;
    }

    .trial-card li::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--pale-pink);
      font-weight: bold;
    }

    .trial-card .small-note {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .trial-card .button {
      width: 100%;
      box-sizing: border-box;
      margin: 0.5rem 0 0;
    }

    .pricing {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.25rem;
      margin: 0 auto;
      align-items: stretch;
      max-width: 1040px;
    }

    .price-card {
      background: rgba(255,255,255,0.94);
      border-radius: 26px;
      padding: 1.8rem;
      position: relative;
      border: 1px solid var(--line-soft);
      font-size: 1rem;
      text-align: left;
      box-shadow: var(--shadow-card);
      height: 100%;
      box-sizing: border-box;
    }

    .price-card h3 {
      font-size: 1.32rem;
      margin: 0.5rem 0 0.75rem;
    }

    .featured {
      transform: none;
      border: 3px solid var(--pale-pink);
      box-shadow: 0 22px 58px rgba(244,166,192,0.18);
    }

    .premium {
      border-top: 7px solid var(--pale-blue);
    }

    .quiet-card {
      opacity: 1;
      background: rgba(255,255,255,0.82);
    }

    .label {
      display: inline-block;
      font-size: 0.72rem;
      padding: 0.34rem 0.72rem;
      border-radius: 999px;
      margin-bottom: 1rem;
      background: var(--soft);
      color: var(--heather-dark);
      text-transform: uppercase;
      font-weight: 850;
      letter-spacing: 0.09em;
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
      font-size: 2.35rem;
      line-height: 1;
      font-weight: 850;
      margin-bottom: 0.75rem;
      color: var(--ink);
      letter-spacing: -0.04em;
    }

    .price span {
      font-size: 1rem;
      font-weight: 750;
      letter-spacing: 0;
      color: var(--muted);
    }

    .price-card ul {
      list-style: none;
      padding: 0;
      margin: 1.15rem 0 0 0;
      text-align: left;
    }

    .price-card li {
      position: relative;
      padding-left: 1.4rem;
      margin-bottom: 0.65rem;
      line-height: 1.5;
      color: var(--ink);
      font-size: 0.98rem;
    }

    .price-card li::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--pale-pink);
      font-weight: bold;
    }

    .small {
      font-size: 0.98rem;
      padding: 0;
      text-align: left;
      color: var(--muted);
      line-height: 1.55;
    }

    .small-note {
      font-size: 0.92rem;
      line-height: 1.45;
      color: var(--muted);
      margin: 0.9rem 0 0;
    }

    .community-card,
    .community-note {
      max-width: 760px;
      margin: 3rem auto 0;
      padding: 1.65rem 1.85rem;
      background: rgba(255,255,255,0.78);
      border-radius: 24px;
      border: 1px solid rgba(47,79,79,.08);
      box-shadow: 0 16px 44px rgba(47,79,79,.055);
      text-align: left;
    }

    .community-card h3,
    .community-note h3 {
      margin-bottom: 0.8rem;
    }

    .community-card p,
    .community-note p {
      font-size: 1rem;
      line-height: 1.62;
      color: var(--ink);
    }

    .community-card p:last-child,
    .community-note p:last-child {
      margin-bottom: 0;
    }

    .faq-list {
      max-width: 850px;
      margin: 2.4rem auto 0;
      display: grid;
      gap: 1rem;
      text-align: left;
    }

    .faq-item {
      background: var(--cream);
      border-radius: 22px;
      padding: 1.45rem 1.6rem;
      border: 1px solid rgba(47,79,79,0.08);
    }

    .faq-item p {
      margin: 0;
      font-size: 1rem;
      color: var(--muted);
      line-height: 1.58;
    }

    .footer {
      background: var(--pale-blue);
      padding: 4rem 1.5rem;
      color: white;
    }

    .footer p {
      opacity: .88;
      margin-bottom: .8rem;
      font-size: .95rem;
    }

    .footer-small {
      opacity: .55;
      font-size: .85rem;
    }

    .footer-logo {
      display: block;
      height: 88px;
      width: auto;
      max-width: 260px;
      object-fit: contain;
      margin: -14px auto 1.2rem auto;
    }

    @media (max-width: 1000px) {
      .hero-inner,
      .content-split {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .hero {
        text-align: center;
        padding: 2.5rem 1.25rem 0;
      }

      .hero-copy {
        padding: 1rem 0 2rem;
      }

      h1,
      .hero-subtitle,
      .hero-relief,
      .founding-note,
      .social-proof {
        margin-left: auto;
        margin-right: auto;
      }

      .trial-card {
        grid-template-columns: 1fr;
        max-width: 620px;
        text-align: center;
      }

      .trial-card ul {
        display: inline-block;
      }

      .trial-card .button {
        white-space: normal;
      }

      .pricing {
        grid-template-columns: 1fr;
        max-width: 620px;
        margin-left: auto;
        margin-right: auto;
      }

      .featured {
        transform: none;
      }

      .photo-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .content-split {
        text-align: center;
      }

      .content-split p,
      .content-split div {
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media (max-width: 900px) {
      .included-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .footer-logo {
        height: 78px;
        max-width: 240px;
        margin: -12px auto 1.3rem auto;
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: clamp(2.15rem, 11vw, 3.2rem);
        line-height: 1.02;
        letter-spacing: -0.055em;
      }

      h2 {
        font-size: clamp(1.8rem, 8vw, 2.45rem);
        line-height: 1.08;
      }

      h3 {
        font-size: 1.12rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.62;
      }

      .included-grid {
        grid-template-columns: 1fr;
      }

      .section,
      .hero,
      .photo-story {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .section {
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
      }

      .hero-inner {
        gap: 1.25rem;
      }

      .logo img {
        width: 240px;
        max-width: 78vw;
        height: auto;
        margin: 0 auto 1.8rem auto;
        display: block;
      }

      .hero-subtitle {
        font-size: 1.12rem;
        line-height: 1.5;
      }

      .hero-photo {
        max-width: 100%;
        padding: 10px;
        border-width: 9px;
        border-radius: 30px;
        transform: none;
      }

      .hero-photo .photo {
        height: auto;
        aspect-ratio: 4 / 5;
        border-radius: 22px;
        object-fit: cover;
      }

      .photo,
      .story-photo {
        width: 100%;
        max-width: 100%;
        height: auto;
      }

      .photo {
        aspect-ratio: 4 / 3;
        margin: 1rem auto;
        border-width: 9px;
      }

      .story-photo {
        aspect-ratio: 4 / 5;
        border-width: 6px;
      }

      .photo-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .benefits-cloud {
        gap: 1rem;
        margin-top: 2rem;
      }

      .bubble {
        width: 100%;
        max-width: 420px;
        min-height: auto;
        padding: 1.45rem 1.2rem;
      }

      .included-card,
      .price-card,
      .trial-card,
      .faq-item,
      .community-card,
      .community-note {
        border-radius: 22px;
        padding: 1.35rem;
      }

      .community-card,
      .community-note {
        width: auto;
        margin: 2rem 1rem 0;
        box-sizing: border-box;
      }

      .community-card p,
      .community-note p,
      .footer p {
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      button,
      .button {
        width: 100%;
        max-width: 340px;
        display: flex;
        margin: 1rem auto;
        box-sizing: border-box;
      }

      .wave {
        height: 72px;
        overflow: hidden;
      }

      .wave svg {
        width: 160%;
        margin-left: -30%;
      }

      .photo-strip {
        overflow: hidden;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 3rem;
      }

      .photo-strip .photo {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .footer {
        background: #e8eee8;
        color: var(--ink);
        padding: 3.5rem 1rem;
        text-align: center;
      }

      .footer-logo {
        display: block;
        height: 78px;
        width: auto;
        max-width: 240px;
        object-fit: contain;
        margin: -12px auto 1.4rem auto;
      }

      .footer p {
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
        color: rgba(47,79,79,.84);
        font-size: .95rem;
        line-height: 1.55;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 1.9rem;
      }

      .eyebrow {
        font-size: .68rem;
        letter-spacing: .12em;
      }

      .logo img {
        width: 220px;
        max-width: 82vw;
        height: auto;
        margin: 0 auto 1.5rem auto;
      }

      .photo,
      .story-photo,
      .hero-photo .photo {
        aspect-ratio: auto;
      }

      .price {
        font-size: 2rem;
      }

      .trial-card .price {
        font-size: 2.5rem;
      }

      .bubble {
        padding: 1.25rem 1rem;
      }

      .wave {
        height: 54px;
      }

      .wave svg {
        width: 190%;
        margin-left: -45%;
      }

      .photo-strip {
        overflow: hidden;
        padding-left: .75rem;
        padding-right: .75rem;
      }

      .photo-strip .photo {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .community-card,
      .community-note {
        margin: 1.5rem .75rem 0;
        padding: 1.25rem;
      }

      .footer {
        background: #e8eee8;
        padding: 3rem 1rem;
      }

      .footer-logo {
        height: 72px;
        max-width: 220px;
        margin: -10px auto 1.3rem auto;
      }

      .footer p {
        max-width: 300px;
        font-size: .92rem;
      }
    }
  `
}
},{}]},{},[1]);
