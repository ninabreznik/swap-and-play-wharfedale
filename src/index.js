module.exports = page

function page(cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const register = document.createElement('button')
  register.innerText = 'Become a Founding Family'
  register.onclick = register_interest

  shadow.innerHTML = `
    <div class="page">

      <section class="hero">
        <div class="hero-inner">
          <div class="logo hero-copy">
            <img src="./assets/logo.png" alt="Swap & Play Wharfedale logo">
            <p class="eyebrow">Opening June 2026 in Ilkley</p>
            <h1>A calmer way to do family life</h1>
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
            style="fill:#f4efe6;">
          </path>
        </svg>
      </div>

      <section class="section light intro-section">
        <div class="content center">
          <p class="eyebrow dark">Not soft play. Something calmer.</p>
          <h2>Your family third place in Ilkley</h2>
          <p>
            Swap & Play Wharfedale is a calm, members-only family club designed around real life with young children.
          </p>
          <p>
            No booking. No rushing. No hosting. No extra spending. Just arrive.
          </p>
          <p class="location-line">
            Just behind Booths on Leeds Road — a short walk from the playground and Riverside.
          </p>
        </div>
      </section>

      <section class="photo-story">
        <div class="content content-xl">
          <div class="photo-grid">
            <img src="./assets/baby-reading.jpg" alt="Child placing animal pieces into a shape sorter"class="story-photo">
            <img src="./assets/children-playing.jpg" alt="Two children gently sharing a toy" class="story-photo">
            <img src="./assets/child-sitting.jpg" alt="Child quietly exploring books and textures" class="story-photo">
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

      <section class="section soft relief-section">
        <div class="content center">
          <p class="eyebrow dark">The feeling we are building for</p>
          <h2>Less planning. Less pressure. More ease.</h2>
          <p>
            Family life already has enough logistics. 
          </p>
        </div>
      </section>

      <div class="wave" style="background:#d1ece6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#fbfaf6;">
          </path>
        </svg>
      </div>      

      <section class="section">
        <div class="content content-wide center">
          <p class="eyebrow dark">Why families join</p>
          <h2>A membership built around real life</h2>

          <div class="benefits-cloud calm-grid">

            <div class="bubble bubble-a">
              <h3>No booking slots</h3>
              <p>Come around naps, moods, weather and real family life.</p>
            </div>

            <div class="bubble bubble-b">
              <h3>No rushing out</h3>
              <p>Stay longer when your child is finally settled and happy.</p>
            </div>

            <div class="bubble bubble-c">
              <h3>No extra spend</h3>
              <p>Bring your own food and drinks. Tea and coffee are included.</p>
            </div>

            <div class="bubble bubble-d">
              <h3>No hosting at home</h3>
              <p>Meet friends somewhere easy without tidying before or after.</p>
            </div>

            <div class="bubble bubble-e">
              <h3>Space for parents too</h3>
              <p>Sit, read, chat, do light laptop catch-up or simply pause.</p>
            </div>

            <div class="bubble bubble-f">
              <h3>Community without pressure</h3>
              <p>Familiar local families, grandparents and carers over time.</p>
            </div>

            <div class="bubble bubble-g">
              <h3>Swap instead of rebuying</h3>
              <p>Children’s clothes and shoes shared locally as they grow.</p>
            </div>

            <div class="bubble bubble-h">
              <h3>Open when life happens</h3>
              <p>Every day, including weekends, holidays, mornings and evenings.</p>
            </div>

          </div>
        </div>
      </section>

      <section class="section founding-section">
        <div class="content center">
          <p class="eyebrow dark">Founding Families</p>
          <h2>Become one of the families shaping a calmer way to live locally</h2>
          <p>
            We are opening with a small founding group of local families who believe family life can feel easier, calmer and more connected.
          </p>
          <p>
            Founding Families receive early access and keep their founding membership price for as long as they remain members.
          </p>
          <register></register>
        </div>
      </section>

     <section class="section light faq-section">
        <div class="content center">
          <p class="eyebrow dark">Good to know</p>
          <h2>A few important details.</h2>

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
              <h3>Can parents work there?</h3>
              <p>This is not a coworking office, but parents can occasionally reply to messages, read, do light laptop catch-up or simply sit while children play nearby.</p>
            </div>
          </div>
        </div>
      </section>      

      <div class="wave" style="background:#f4efe6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#eef7ff;">
          </path>
        </svg>
      </div>      

      <section class="section included-section">
        <div class="content center">
          <p class="eyebrow dark">What membership gives you</p>
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
              <h3>Smart-lock entry</h3>
              <p>Come and go more freely during opening hours, without waiting for a session.</p>
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
              <h3>Gentle occupancy updates</h3>
              <p>Know when the space is busier so the atmosphere can stay calm.</p>
            </div>

          </div>
        </div>
      </section>

      <section class="section light swap-section">
        <div class="content content-split">
          <div>
            <p class="eyebrow dark">Swap, share, reuse</p>
            <h2>A clothing swap room for growing children</h2>
          </div>
          <div>
              Because children grow quickly, families already have enough stuff, and community works better when useful things keep circulating.
          </div>
        </div>
      </section>

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
            style="fill:#d1ece6;">
          </path>
        </svg>
      </div>

      <section class="section soft pricing-section">
        <div class="content content-wide center">
          <p class="eyebrow dark">Membership</p>
          <h2>Not pay-per-play. A membership for everyday family life.</h2>

          <div class="pricing membership-pricing">

            <div class="price-card featured membership-card">
              <div class="label popular">Founding Families</div>
              <h3>Founding Membership</h3>
              <div class="price">£89<span>/month</span></div>
              <p class="small">For the first families helping shape a new kind of local family space.</p>
              <ul>
                <li>Unlimited access</li>
                <li>Open every day</li>
                <li>No booking slots</li>
                <li>Tea and coffee included</li>
                <li>Bring your own food</li>
                <li>Swap room access</li>
                <li>Keep your founding price while you remain a member</li>
              </ul>
            </div>

            <div class="price-card premium membership-card">
              <div class="label premium-label">Standard</div>
              <h3>Standard Membership</h3>
              <div class="price">£129<span>/month</span></div>
              <p class="small">For families joining after the founding places are filled.</p>
              <ul>
                <li>Unlimited access</li>
                <li>Everyday family club use</li>
                <li>Smart-lock entry during opening hours</li>
                <li>Tea and coffee included</li>
                <li>Clothing swap room</li>
                <li>Gentle occupancy updates</li>
              </ul>
            </div>

            <div class="price-card quiet-card">
              <div class="label">Additional Child</div>
              <h3>Sibling Add-On</h3>
              <div class="price">+£10<span>/month</span></div>
              <p class="small">For families with more than one child using the space regularly.</p>
              <ul>
                <li>Simple monthly add-on</li>
                <li>Designed for family use</li>
                <li>No per-session calculation</li>
              </ul>
            </div>

          </div>
        </div>
        <div class="community-card">
          <h3>Community Contribution Memberships</h3>
          <p>
          We are exploring a small number of reduced Community Contribution Memberships for families who would love to be part of Swap & Play and are happy to occasionally help with small tasks that keep the space thriving.
          </p>

          <p>
          Things like helping organise toys, sorting donated clothes and children's items, sharing ideas, helping with communication, or supporting the community in small ways.
          </p>

          <p>
          If this sounds like a good fit, we'd love to hear from you. Please get in touch at nina@swapandplaywharfedale.co.uk
          </p>
      </div>
      </section>

      <div class="wave" style="background:#d1ece6;">
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
          <h2>Become one of the founding families.</h2>
          <p>
            If you want a calmer, easier, more flexible way to spend time locally with young children, join the waitlist and hear first about launch dates and founding membership access.
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
      object-position: center;
      border-radius: 28px;
      display: block;
      margin: 2rem auto;
      object-position: center 30%;
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
      background: var(--sand);
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
    .hero .logo img{
      filter:
        brightness(0)
        invert(1)
        drop-shadow(0 2px 10px rgba(0,0,0,.08));

      opacity:.96;
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

    button {
      margin: 1rem 0;
      padding: 1rem 2.1rem;
      border: none;
      border-radius: 999px;
      background: var(--pale-pink);
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 800;
      transition: 0.25s ease;
      box-shadow: 0 14px 35px rgba(143,100,164,0.22);
    }

    button:hover {
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

    .community-card{
      max-width:760px;
      margin:3rem auto 0;
      padding:2rem;
      background:#fbfaf6;
      border-radius:24px;
      border:1px solid rgba(47,79,79,.08);
      box-shadow:0 16px 44px rgba(47,79,79,.05);
      text-align:left;
    }

    .community-card h3{
      margin-bottom:1rem;
    }

    .center { text-align: center; }

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
      box-shadow: 0 16px 44px rgba(47,79,79,0.075);
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
      background: #eef7ff;
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
      box-shadow: 0 16px 44px rgba(47,79,79,0.075);
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
      background: var(--sand);
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

    .pricing {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 2rem;
      align-items: stretch;
    }

    .price-card {
      background: var(--surface);
      border-radius: 26px;
      padding: 1.8rem;
      position: relative;
      border: 1px solid rgba(47,79,79,0.1);
      font-size: 1rem;
      text-align: left;
      box-shadow: 0 20px 55px rgba(47,79,79,0.09);
    }

    .price-card h3 {
      font-size: 1.32rem;
      margin: 0.5rem 0 0.75rem;
    }

    .featured {
      transform: scale(1.035);
      border: 3px solid var(--pale-pink);
    }

    .premium {
      border-top: 7px solid var(--pale-blue);
    }

    .quiet-card {
      opacity: 0.92;
    }

    .label {
      display: inline-block;
      font-size: 0.76rem;
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      margin-bottom: 1rem;
      background: var(--soft);
      color: var(--heather-dark);
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.08em;
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
      font-weight: 800;
      margin-bottom: 0.75rem;
      color: var(--ink);
      letter-spacing: -0.04em;
    }

    .price span {
      font-size: 1rem;
      font-weight: 700;
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
        background: var(--pale-green);
        padding:4rem 1.5rem;
        color: black;
      }

      .footer p{
        opacity:.88;
        margin-bottom:.8rem;
        font-size:.95rem;
      }

      .footer-small{
        opacity:.55;
        font-size:.85rem;
      }

      .footer-logo{
        display:block;
        height:88px;
        width:auto;
        max-width:260px;
        object-fit:contain;
        margin:-14px auto 1.2rem auto;
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
    width:240px;
    max-width:78vw;
    height:auto;

    margin:0 auto 1.8rem auto;
    display:block;
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
  .faq-item,
  .community-card {
    border-radius: 22px;
    padding: 1.35rem;
  }

  .community-card {
    width: auto;
    margin: 2rem 1rem 0;
    box-sizing: border-box;
  }

  .community-card p,
  .footer p {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  button {
    width: 100%;
    max-width: 340px;
    display: block;
    margin: 1rem auto;
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
    width:220px;
    max-width:82vw;
    height:auto;

    margin:0 auto 1.5rem auto;
  }

  .photo,
  .story-photo,
  .hero-photo .photo {
    aspect-ratio: auto;
  }

  .price {
    font-size: 2rem;
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

  .community-card {
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
