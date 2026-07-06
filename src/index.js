module.exports = page

const TRIAL_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe3HZA6pof7I7m4diGGWerDKkNo0uKZVCql5Szl741bPu2aIg/viewform?usp=header'

function page(cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const register = document.createElement('button')
  register.innerText = 'Apply for a Free 14-Day Trial'
  register.onclick = scroll_to_trial

  shadow.innerHTML = `
    <div class="page">

      <section class="hero">
        <div class="hero-inner">
          <div class="logo hero-copy">
            <img src="./assets/logo.png" alt="Swap & Play Wharfedale logo">
            <p class="eyebrow">Now open in Ilkley</p>
            <h1>A calmer way to do play time</h1>
            <p class="hero-subtitle">
              A small members-style community space where children can play and parents can breathe.
            </p>
            <div class="hero-actions">
              <register></register>
            </div>
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

      <section class="section light location-section">
        <div class="content content-wide center">
          <p class="eyebrow dark">Not soft play. Something calmer.</p>
          <h2>Your flexible base in Ilkley</h2>

          <p class="location-intro">
            Swap & Play Wharfedale is a calm, members-style community play space designed around real life with young children.
          </p>

          <p class="location-tagline">
            No booking. No rushing. No hosting. No extra spending.<br>
            Just arrive.
          </p>

          <div class="location-visuals">
            <div class="location-card building-card">
              <img
                src="./assets/building.png"
                alt="Swap & Play entrance on Leeds Road"
              >
            </div>

            <div class="location-card map-card">
              <img
                src="./assets/map.png"
                alt="Map showing the pedestrian path from Booths car park to Swap & Play"
              >
            </div>
          </div>

          <p class="location-line">
            Just behind Booths on Leeds Road — easy to reach from Booths car park, the playground and Riverside.<br>
            <a
              href="https://maps.app.goo.gl/xPGPfSGdbXFYjEog6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
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
            <h2>Calm needs a place</h2>
          </div>
          <div>
            <p>
              Swap & Play is intentionally designed for a low-density experience — because we are building the opposite of a hectic play centre.
            </p>
            <p>
              The space has two main play rooms. One room is set up for pretend play, with a play kitchen, shop, restaurant and role-play toys.
            </p>
            <p>
              The other room is for focused play, books, toys and movement, with space for building, reading, quieter activities and physical play.
            </p>
            <p>
              There is also a Swap Room, changing space, kitchenette, toilets and a parent table for eating, feeding or light work.
            </p>
          </div>
        </div>
      </section>

      <section class="photo-story">
        <div class="content content-xl">
          <div class="photo-grid">
            <img src="./assets/room.jpg" alt="Photo of the main play room with toy shelves and play areas" class="story-photo">
            <img src="./assets/children-playing.jpg" alt="Two children gently sharing a toy" class="story-photo">
            <img src="./assets/climbing.jpg" alt="Child climbing the wooden frame" class="story-photo">
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
          <p class="eyebrow dark">Give what you can. Take what you need</p>
          <h2>Swap room</h2>

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
            Donations can be placed in the designated bins, and a community member will sort and shelve them later.
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
          <p class="eyebrow dark">A pass built around real life</p>
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
              <p>Children’s clothes and shoes shared between local families.</p>
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
            style="fill:#6fa8dc;">
          </path>
        </svg>
      </div>

      <section class="section reviews-section">
        <div class="content content-wide center">
          <p class="eyebrow dark">Early reviews</p>
          <h2>What local families are saying</h2>

          <p class="section-intro">
            Families who have visited describe Swap & Play as clean, thoughtful, flexible and easy to use — a place where children can play happily and grown-ups can breathe a little.
          </p>

          <div class="reviews-grid">
            <div class="review-card">
              <p>
                “Amazing set up, absolutely everything has been thought about. The space is clean and well equipped with great resources for all ages.”
              </p>
              <span>Mel A</span>
            </div>

            <div class="review-card">
              <p>
                “Brilliant if you want to socialise without having to host. Really clean and tidy.”
              </p>
              <span>Julia N</span>
            </div>

            <div class="review-card">
              <p>
                “The flexibility and the fact that you don’t have to pre-book make it so convenient to use. Our little ones love it here and always ask to come back.”
              </p>
              <span>Julia R</span>
            </div>
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

      <section class="section soft pricing-section">
        <div class="content content-wide center">
          <p class="eyebrow dark">Pricing</p>
          <h2>Start free. Continue only if it fits.</h2>

          <p class="section-intro">
            Apply for a free 14-day trial and use the space properly before deciding. After your trial, you can continue with a flexible Monthly Family Pass.
          </p>

          <div class="trial-card price-card trial membership-card" id="trial">
            <div class="label">Start free</div>
            <h3>Free 14-Day Trial</h3>
            <div class="membership-total">
              <div class="price">£0</div>
            </div>

            <p class="small">
              Your personal access code starts your free 14-day trial from the first time you use it. There is no need to choose a fixed start date in advance.
            </p>

            <ul>
              <li>Use the space for 14 days</li>
              <li>Come more than once and test your real routine</li>
              <li>Explore the play rooms and Swap Room</li>
              <li>No pressure to continue afterwards</li>
            </ul>

            <p class="small-note">
              One free trial per household. Valid only for the household named in the application. Application required. Places are limited during our opening weeks.
            </p>

            <a
              class="button"
              href="${TRIAL_FORM_URL}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for a Free 14-Day Trial
            </a>
          </div>

          <div class="monthly-membership-card price-card featured membership-card" id="membership">
            <div class="label popular">Founding family price</div>
            <h3>Monthly Family Pass</h3>

            <p class="small">
              A flexible monthly pass for families who want Swap & Play to become a regular place to land — without a long contract.
            </p>

            <div class="membership-total">
              <span class="membership-total-label">Monthly pass</span>
              <strong class="membership-total-price">£79/month</strong>
              <div class="membership-weekly-price">about £18 a week</div>
              <p class="membership-cancel-note">
                No long contract. Cancel anytime before your next monthly payment.
              </p>
            </div>

            <div class="membership-child-control">
              <label class="membership-child-label" for="founding-child-count">
                Choose your family size
              </label>

              <select class="child-count-select membership-total-select" id="founding-child-count">
                <option value="1">1 child</option>
                <option value="2">2 children</option>
                <option value="3">3 children or more</option>
              </select>

              <small class="membership-total-note">
                The base pass includes one child. Additional children are +£10/month each.
                Newborns in arms are included at no extra cost.
              </small>
            </div>

            <ul class="membership-benefits-list">
              <li>Daily access for your family, 6am to 9pm</li>
              <li>No booking slots</li>
              <li>Use of the play rooms and Swap Room</li>
              <li>Tea and coffee included</li>
              <li>Bring your own snacks</li>
              <li>Founding families keep this price while they remain active pass holders</li>
            </ul>

            <form class="membership-actions">
              <a
                class="button subscribe-button"
                href="https://pay.gocardless.com/BRT01KSKC6XZ1364BWEAE4CESXAKR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Set up Monthly Family Pass
              </a>

              <p class="small-note membership-link-note">
                You will be taken to GoCardless to set up your monthly Direct Debit.
              </p>
            </form>
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
              <p>No. Swap & Play is a calm members-style community space designed for low numbers, flexible access and a gentler atmosphere.</p>
            </div>
            <div class="faq-item">
              <h3>Do I need to book?</h3>
              <p>Monthly Family Pass holders do not need to book. During a free 14-day trial, you can also come during opening hours without booking a slot.</p>
            </div>
            <div class="faq-item">
              <h3>Can I visit before applying?</h3>
              <p>Yes. Wednesday Open Play is there for families who would like to see the space before applying for a trial or membership.</p>
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
              <p>This is not a coworking space, but parents can bring their laptop and reply to messages, read or do light catch-up while children play nearby.</p>
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
        <img src="./assets/main-room.jpg" alt="Parents drawing with their children" class="photo">
      </section>

      <div class="wave" style="background:#e9e6e1;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#d1ece6;">
          </path>
        </svg>
      </div>

      <section class="section visit-section" id="visit">
        <div class="content content-wide">
          <div class="visit-header center">
            <p class="eyebrow dark">How to visit</p>
            <h2>Two ways to try Swap & Play</h2>
            <p class="section-intro">
              If you are ready to experience the space properly,
              <a href="#trial" data-scroll-to-trial>apply for a free 14-day trial</a>.
              If you would rather see the space first, come to Wednesday Open Play, 10am–12pm.
            </p>
          </div>

          <div class="visit-card secondary" id="open-play">
            <div class="label quiet-label">Free weekly meetup</div>
            <h3>Wednesday Open Play</h3>
            <p>
              Join us on Wednesdays, 10am–12pm, for a relaxed play session with tea, coffee and space to chat.
            </p>
            <ul>
              <li>Children can play and explore</li>
              <li>Grown-ups can sit, chat or make a drink</li>
              <li>Meet other local families</li>
              <li>No need to be a pass holder</li>
            </ul>
          </div>

          </div>
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

      <footer class="footer">
        <div class="content center">
          <img
            src="./assets/logo.png"
            class="footer-logo"
            alt="Swap & Play"
          >

          <p>
            Swap & Play Wharfedale<br>
            A calm community play space for Ilkley and the wider Wharfedale area
          </p>

          <p>
            Questions or ideas?<br>
            <a href="mailto:nina@swapandplaywharfedale.co.uk">nina@swapandplaywharfedale.co.uk</a>
          </p>

          <p class="footer-social">
            Follow us on Instagram<br>
            <a
              href="https://www.instagram.com/swap_and_play_wharfedale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @swap_and_play_wharfedale
            </a>
          </p>

          <p>
            Find us:<br>
            <a
              href="https://maps.app.goo.gl/xPGPfSGdbXFYjEog6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swap & Play Wharfedale on Google Maps
            </a>
          </p>
        </div>
      </footer>

    </div>
  `

  shadow.querySelectorAll('register').forEach(node => {
    const btn = register.cloneNode(true)
    btn.onclick = scroll_to_trial
    node.replaceWith(btn)
  })

  shadow.querySelectorAll('[data-scroll-to-trial]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault()
      scroll_to_trial()
    })
  })

  shadow.querySelectorAll('.membership-actions').forEach(actions => {
    const founding_memberships = {
      1: { price: 79, link: 'https://pay.gocardless.com/BRT01KSKC6XZ1364BWEAE4CESXAKR' },
      2: { price: 89, link: 'https://pay.gocardless.com/BRT01KW5EDSP3ERCE27Q1QTEDXPJ5' },
      3: { price: 99, link: 'https://pay.gocardless.com/BRT01KW5S13X7KM9RCQ28JTBBH0Q6' },
      4: { price: 109, link: 'https://pay.gocardless.com/BRT01KW5S297T3Q8G6W9M8HAXZ2Q0' },
      5: { price: 119, link: 'https://pay.gocardless.com/BRT01KW5S32TKC7KASJMAZ2P076QR' },
      6: { price: 129, link: 'https://pay.gocardless.com/BRT01KW5S3Y20TMASKFJA5F299KTX' }
    }

    const card = actions.closest('.membership-card')
    if (!card) return

    const select = card.querySelector('.child-count-select')
    const button = actions.querySelector('.subscribe-button')
    const total_price = card.querySelector('.membership-total-price')
    const weekly_price = card.querySelector('.membership-weekly-price')
    const link_note = actions.querySelector('.membership-link-note')

    if (!select || !button || !total_price || !weekly_price || !link_note) return

    select.addEventListener('change', update_membership_option)

    button.addEventListener('click', event => {
      const selected = founding_memberships[select.value]
      const has_link = selected && selected.link && selected.link.startsWith('http')

      if (!has_link) event.preventDefault()
    })

    update_membership_option()

    function update_membership_option() {
      const child_count = Number(select.value)
      const selected = founding_memberships[child_count]
      const has_link = selected && selected.link && selected.link.startsWith('http')

      if (!selected) return

      total_price.innerText = `£${selected.price}/month`
      weekly_price.innerText = `about £${Math.round(selected.price * 12 / 52)} a week`

      if (has_link) {
        button.href = selected.link
        button.classList.remove('setup-link-disabled')
        button.removeAttribute('aria-disabled')
        link_note.innerText = 'You will be taken to GoCardless to set up your monthly Direct Debit. You can cancel anytime'
      } else {
        button.href = '#'
        button.classList.add('setup-link-disabled')
        button.setAttribute('aria-disabled', 'true')
        link_note.innerText = `Add the GoCardless link for ${child_count} ${child_count === 1 ? 'child' : 'children'} in page.js before publishing this option.`
      }
    }
  })

  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)

  window.addEventListener('hashchange', scroll_to_hash_target)
  window.addEventListener('load', scroll_to_hash_target)

  requestAnimationFrame(scroll_to_hash_target)
  setTimeout(scroll_to_hash_target, 100)
  setTimeout(scroll_to_hash_target, 600)

  if (cb) cb()
  return el

  function scroll_to_hash_target() {
    const path = window.location.pathname.replace(/\/$/, '')
    const hash = window.location.hash

    if (path.endsWith('/trial') || hash === '#trial' || hash === '#apply') {
      scroll_to_target('#trial')
      return
    }

    if (hash === '#open-play' || hash === '#visit') {
      scroll_to_target('#open-play')
      return
    }

    if (hash === '#membership') {
      scroll_to_target('#membership')
    }
  }

  function scroll_to_trial() {
    history.replaceState(null, '', '#trial')
    scroll_to_target('#trial')
  }

  function scroll_to_target(selector) {
    const target = shadow.querySelector(selector)
    if (!target) return

    target.scrollIntoView({
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

      --pale-blue: #6fa8dc;
      --pale-pink: #f4a6c0;
      --pale-green: #d1ece6;

      --sand: #f4efe6;
      --cream: #fbfaf6;
      --beige: #e9e6e1;
      --soft: #eef5ef;

      --heather-dark: #8f64a4;

      --ink: #2f4f4f;
      --muted: #6f8079;
      --line-soft: rgba(47,79,79,0.10);

      --shadow-soft: 0 18px 48px rgba(47,79,79,0.10);
      --shadow-card: 0 16px 44px rgba(47,79,79,0.075);
    }

    * {
      box-sizing: border-box;
    }

    .page {
      background: var(--cream);
      color: var(--ink);
      line-height: 1.7;
      overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }

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
      margin: 0 0 1.5rem 0;
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

    a {
      color: var(--heather-dark);
      text-underline-offset: 0.18em;
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

    .secondary-button {
      background: rgba(255,255,255,0.22);
      color: var(--cream);
      border: 1px solid rgba(255,255,255,0.55);
      box-shadow: none;
    }

    .secondary-button:hover {
      background: rgba(255,255,255,0.34);
      color: white;
    }

    .hero-actions {
      display: flex;
      gap: 0.85rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .hero-actions button,
    .hero-actions .button {
      margin-right: 0;
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

    .section {
      padding: 5rem 1.5rem;
    }

    .light {
      background: var(--sand);
    }

    .soft {
      background: var(--pale-green);
    }

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

    .section-intro {
      max-width: 720px;
      margin: 0 auto 2.2rem;
      font-size: 1.08rem;
      line-height: 1.62;
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

    .swap-section .photo {
      object-fit: contain;
      width: auto;
    }

    .photo-strip {
      background-color: var(--beige);
      padding: 0 1.5rem 4rem;
    }

    .photo-strip .photo {
      margin: 0 auto;
      border-color: var(--cream);
    }

    .hero {
      background: var(--pale-blue);
      padding: 3rem 1.5rem 1rem;
      text-align: left;
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

    .hero .logo img {
      filter:
        brightness(0)
        invert(1)
        drop-shadow(0 2px 10px rgba(0,0,0,.08));
      opacity: .96;
    }

    .hero-subtitle {
      color: var(--cream);
      font-size: clamp(1.18rem, 2vw, 1.5rem);
      line-height: 1.45;
      max-width: 600px;
      margin-bottom: 1rem;
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

    .location-section {
      background: var(--sand);
    }

    .location-section h2 {
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
    }

    .location-intro {
      max-width: 760px;
      margin: 0 auto 1rem;
      font-size: 1.18rem;
    }

    .location-tagline {
      max-width: 720px;
      margin: 0 auto 3rem;
      font-size: 1.18rem;
      font-weight: 500;
    }

    .location-visuals {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
      gap: 2rem;
      align-items: center;
      max-width: 1040px;
      margin: 0 auto 2.25rem;
    }

    .location-card {
      background: #f8f2e8;
      border: 10px solid rgba(255,255,255,0.82);
      border-radius: 28px;
      box-shadow: 0 20px 55px rgba(47,79,79,0.09);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      aspect-ratio: 4 / 3;
    }

    .location-card img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
    }

    .building-card,
    .map-card {
      padding: 0;
      background: #f8f2e8;
    }

    .map-card {
      aspect-ratio: 4 / 5;
    }

    .map-card img {
      object-fit: contain;
      object-position: center;
    }

    .location-line {
      max-width: 720px;
      margin: 0 auto;
      color: var(--muted);
      font-size: 1.12rem;
    }

    .visit-section {
      background: var(--pale-green);
    }

    .visit-header {
      max-width: 820px;
      margin: 0 auto;
    }

    .visit-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
      max-width: 1040px;
      margin: 2.25rem auto 0;
      align-items: stretch;
    }

    .visit-card {
      margin-top: 1.25rem;
      background: rgba(255,255,255,0.92);
      border-radius: 28px;
      padding: 1.75rem;
      border: 1px solid rgba(47,79,79,0.10);
      box-shadow: var(--shadow-card);
      text-align: left;
      scroll-margin-top: 2rem;
    }

    .visit-card.primary {
      border: 1px solid rgba(244,166,192,0.55);
      box-shadow: 0 18px 46px rgba(47,79,79,0.08);
    }

    .visit-card.secondary {
      background: rgba(244,239,230,0.68);
      border: 1px solid rgba(47,79,79,0.08);
    }

    .visit-card h3,
    .visit-card p,
    .visit-card ul,
    .visit-card li {
      text-align: left;
    }

    .visit-card h3 {
      font-size: 1.42rem;
      margin-bottom: 0.6rem;
    }

    .visit-card p {
      max-width: none;
      margin-left: 0;
      margin-right: 0;
      font-size: 1rem;
      line-height: 1.58;
      color: var(--muted);
    }

    .visit-card ul {
      list-style: none;
      padding: 0;
      margin: 1.15rem 0 1.25rem 0;
    }

    .visit-card li {
      position: relative;
      padding-left: 1.35rem;
      margin-bottom: 0.55rem;
      line-height: 1.48;
      color: var(--ink);
      font-size: 0.98rem;
    }

    .visit-card li::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--pale-pink);
      font-weight: bold;
    }

    .visit-card .button {
      width: auto;
      max-width: none;
      min-width: 260px;
      box-sizing: border-box;
      margin: 0.75rem 0 0;
      padding: 0.95rem 1.5rem;
      text-align: center;
    }

    .small-purpose {
      background: var(--cream);
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

    .relief-section,
    .swap-section {
      background: var(--pale-green);
    }

    relief-section p:not(.eyebrow) {
      font-size: 1.2rem;
      max-width: 820px;
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

    .reviews-section {
      background: var(--pale-blue);
      color: white;
    }


    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 2rem;
    }

    .review-card {
      background: var(--sand);
      border-radius: 26px;
      padding: 1.65rem;
      border: 1px solid rgba(47,79,79,0.1);
      box-shadow: var(--shadow-card);
      text-align: left;
    }

    .review-card p {
      max-width: none;
      margin: 0 0 1rem 0;
      color: var(--ink);
      font-size: 1rem;
      line-height: 1.6;
    }

    .review-card span {
      display: block;
      color: var(--muted);
      font-size: 0.82rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .pricing-section {
      background: var(--pale-green);
    }

    .pricing-section .section-intro {
      max-width: 620px;
      margin: 0 auto 2rem;
      font-size: 1.05rem;
      line-height: 1.62;
      color: var(--ink);
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
      box-sizing: border-box;
    }

    .price-card h3 {
      font-size: 1.32rem;
      margin: 0.5rem 0 0.75rem;
    }

    .featured {
      border: 3px solid var(--pale-pink);
      box-shadow: 0 22px 58px rgba(244,166,192,0.18);
    }

    .trial-card,
    .monthly-membership-card {
      max-width: 620px;
      margin: 2rem auto 2rem;
      padding: 2rem;
      border-radius: 30px;
      background: rgba(255,255,255,0.95);
      border: 3px solid var(--pale-pink);
      box-shadow: var(--shadow-soft);
      text-align: left;
    }

    .monthly-membership-card {
      margin-top: 0;
    }

    #membership,
    #trial,
    #open-play,
    #visit {
      scroll-margin-top: 2rem;
    }

    .membership-total {
      margin: 1rem 0 0;
      padding: 1.25rem;
      border-radius: 22px;
      background: var(--cream);
      border: 1px solid rgba(47,79,79,0.08);
      text-align: center;
    }

    .membership-total-topline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      margin-bottom: 0.65rem;
      flex-wrap: wrap;
    }

    .membership-total-label {
      display: inline-block;
      margin: 0;
      color: var(--muted);
      font-size: 0.78rem;
      line-height: 1.1;
      font-weight: 850;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .membership-total-price {
      display: block;
      color: var(--ink);
      font-size: 3rem;
      line-height: 1;
      font-weight: 850;
      letter-spacing: -0.04em;
      margin-top: 0.45rem;
    }

    .membership-weekly-price {
      margin-top: 0.45rem;
      color: var(--heather-dark);
      font-size: 1.22rem;
      line-height: 1.2;
      font-weight: 850;
    }

    .membership-cancel-note {
      max-width: none;
      margin: 1rem auto 0;
      padding: 0.85rem 1rem;
      border-radius: 16px;
      background: rgba(255,255,255,0.72);
      color: var(--ink);
      font-size: 0.96rem;
      line-height: 1.45;
      font-weight: 750;
    }

    .membership-child-control {
      margin: 1rem 0 0;
      padding: 1rem;
      border-radius: 20px;
      background: rgba(255,255,255,0.62);
      border: 1px solid rgba(47,79,79,0.08);
      text-align: left;
    }

    .membership-child-label {
      display: block;
      margin-bottom: 0.55rem;
      color: var(--muted);
      font-size: 0.82rem;
      line-height: 1.1;
      font-weight: 850;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .membership-total-select {
      width: auto;
      min-width: 7.9rem;
      max-width: 10.5rem;
      margin: 0;
      padding: 0.48rem 2rem 0.48rem 0.85rem;
      border-radius: 999px;
      border: 1px solid rgba(47,79,79,0.12);
      background-color: rgba(255,255,255,0.78);
      color: var(--ink);
      font-size: 0.92rem;
      font-weight: 850;
      line-height: 1.1;
      cursor: pointer;

      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image:
        linear-gradient(45deg, transparent 50%, var(--muted) 50%),
        linear-gradient(135deg, var(--muted) 50%, transparent 50%);
      background-position:
        calc(100% - 1.08rem) 50%,
        calc(100% - 0.82rem) 50%;
      background-size:
        0.28rem 0.28rem,
        0.28rem 0.28rem;
      background-repeat: no-repeat;
    }

    .membership-total-select:focus {
      outline: none;
      border-color: var(--pale-pink);
      box-shadow: 0 0 0 4px rgba(244,166,192,0.18);
    }

    .membership-total small,
    .membership-total-note {
      display: block;
      margin-top: 0.65rem;
      color: var(--muted);
      font-size: 0.86rem;
      line-height: 1.45;
    }

    .trial-card h3,
    .monthly-membership-card h3 {
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

    .trial-card .small-note {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .trial-card .button {
      width: 100%;
      box-sizing: border-box;
      margin: 0.5rem 0 0;
    }

    .membership-benefits-list {
      margin-top: 1.25rem;
      color: var(--muted);
    }

    .label {
      display: inline-block;
      font-size: 0.68rem;
      padding: 0.32rem 0.68rem;
      border-radius: 999px;
      margin-bottom: 1rem;
      background: rgba(244,166,192,0.72);
      color: white;
      text-transform: uppercase;
      font-weight: 850;
      letter-spacing: 0.09em;
    }

    .quiet-label,
    .popular {
      background: rgba(209,236,230,0.82);
      color: var(--heather-dark);
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

    .price-card ul,
    .trial-card ul {
      list-style: none;
      padding: 0;
      margin: 1.15rem 0 0 0;
      text-align: left;
    }

    .price-card li,
    .trial-card li {
      position: relative;
      padding-left: 1.4rem;
      margin-bottom: 0.65rem;
      line-height: 1.5;
      color: var(--ink);
      font-size: 0.98rem;
    }

    .price-card li::before,
    .trial-card li::before {
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

    .membership-actions {
      margin-top: 1.15rem;
    }

    .subscribe-button {
      width: 100%;
      box-sizing: border-box;
      margin: 0.85rem 0 0;
    }

    .membership-actions .small-note {
      margin-top: 0.65rem;
      margin-bottom: 0;
      font-size: 0.86rem;
      line-height: 1.45;
      text-align: center;
    }

    .child-count-select {
      width: 100%;
      padding: 0.95rem 3rem 0.95rem 1rem;
      border-radius: 18px;
      border: 1px solid rgba(47,79,79,0.14);
      background-color: var(--cream);
      color: var(--ink);
      font-size: 1rem;
      font-weight: 750;
      line-height: 1.2;
      cursor: pointer;

      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image:
        linear-gradient(45deg, transparent 50%, var(--muted) 50%),
        linear-gradient(135deg, var(--muted) 50%, transparent 50%);
      background-position:
        calc(100% - 1.35rem) 50%,
        calc(100% - 1.05rem) 50%;
      background-size:
        0.32rem 0.32rem,
        0.32rem 0.32rem;
      background-repeat: no-repeat;
    }

    .child-count-select:hover {
      border-color: rgba(143,100,164,0.32);
    }

    .child-count-select:focus {
      outline: none;
      border-color: var(--pale-pink);
      box-shadow: 0 0 0 4px rgba(244,166,192,0.22);
    }

    .child-count-select:focus-visible {
      outline: none;
    }

    .setup-link-disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .setup-link-disabled:hover {
      background: var(--pale-pink);
      transform: none;
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

    .day-section {
      background: var(--beige);
    }

    .cta-section {
      background: var(--pale-blue);
      color: var(--cream);
    }

    .cta-section h2,
    .cta-section p {
      color: var(--cream);
    }

    .cta-actions {
      justify-content: center;
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

    .footer a {
      font-weight: 800;
    }

    .footer-social {
      margin-top: 1.4rem;
    }

    .footer-social a {
      font-weight: 800;
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
      .hero-subtitle {
        margin-left: auto;
        margin-right: auto;
      }

      .hero-actions {
        justify-content: center;
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
      .included-grid,
      .visit-grid,
      .reviews-grid {
        grid-template-columns: 1fr;
      }

      .location-visuals {
        grid-template-columns: 1fr;
        max-width: 620px;
      }

      .location-card {
        min-height: auto;
        aspect-ratio: 4 / 3;
      }

      .map-card {
        aspect-ratio: 4 / 5;
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

      .included-grid {
        grid-template-columns: 1fr;
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

      .included-card,
      .price-card,
      .trial-card,
      .monthly-membership-card,
      .visit-card,
      .faq-item,
      .review-card {
        border-radius: 22px;
        padding: 1.35rem;
      }

      .monthly-membership-card {
        max-width: 620px;
      }

      .visit-section,
      .reviews-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .visit-section .content-wide,
      .reviews-section .content-wide,
      .pricing-section .content-wide {
        max-width: 100%;
      }

      .visit-header {
        text-align: left;
        max-width: 100%;
      }

      .visit-header h2,
      .visit-header p,
      .visit-header .eyebrow,
      .reviews-section h2,
      .reviews-section p,
      .reviews-section .eyebrow,
      .pricing-section h2,
      .pricing-section p,
      .pricing-section .eyebrow {
        text-align: left;
        margin-left: 0;
        margin-right: 0;
      }

      .visit-header .section-intro,
      .reviews-section .section-intro,
      .pricing-section .section-intro {
        max-width: none;
        margin-bottom: 1.5rem;
      }

      .visit-grid,
      .reviews-grid {
        display: block;
        max-width: 100%;
        margin-top: 1.5rem;
      }

      .visit-card,
      .review-card {
        width: 100%;
        margin: 0 0 1rem 0;
        padding: 1.25rem;
        border-radius: 22px;
      }

      .visit-card.primary {
        border-width: 2px;
      }

      .visit-card .label {
        font-size: 0.64rem;
        line-height: 1.1;
        padding: 0.34rem 0.62rem;
        margin-bottom: 0.8rem;
      }

      .visit-card h3 {
        font-size: 1.28rem;
        line-height: 1.15;
        margin-bottom: 0.65rem;
      }

      .visit-card p,
      .review-card p {
        font-size: 0.96rem;
        line-height: 1.55;
        margin-bottom: 0.9rem;
      }

      .visit-card ul {
        margin: 0.9rem 0 0;
      }

      .visit-card li {
        font-size: 0.94rem;
        line-height: 1.45;
        padding-left: 1.15rem;
        margin-bottom: 0.55rem;
      }

      .visit-card li::before {
        top: 0;
      }

      .visit-card a {
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .visit-card .button {
        width: 100%;
        min-width: 0;
        max-width: none;
        margin: 1rem 0 0;
      }

      .membership-total {
        padding: 1rem;
        border-radius: 20px;
      }

      .membership-total-label {
        display: block;
        text-align: center;
        margin-bottom: 0.45rem;
      }

      .membership-total-price {
        font-size: 2.25rem;
        text-align: center;
      }

      .membership-weekly-price {
        font-size: 1.08rem;
        text-align: center;
      }

      .membership-cancel-note {
        font-size: 0.92rem;
        line-height: 1.42;
        text-align: center;
        padding: 0.8rem 0.85rem;
      }

      .membership-child-control {
        padding: 0.9rem;
        border-radius: 18px;
      }

      .membership-child-label {
        font-size: 0.74rem;
      }

      .membership-total-note {
        font-size: 0.84rem;
        line-height: 1.42;
      }

      .membership-benefits-list {
        margin-top: 1rem;
      }

      .membership-benefits-list li {
        font-size: 0.94rem;
        line-height: 1.45;
      }

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

      .hero-actions {
        width: 100%;
        gap: 0;
      }

      .subscribe-button,
      .visit-card .button,
      .trial-card .button {
        max-width: none;
        margin: 0.85rem 0 0;
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
        padding: 3.5rem 1rem;
        text-align: center;
      }

      .footer-logo {
        height: 78px;
        max-width: 240px;
        margin: -12px auto 1.4rem auto;
      }

      .footer p {
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
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

      .trial-card .price,
      .membership-total-price {
        font-size: 2.25rem;
      }

      .location-tagline {
        margin-bottom: 2rem;
      }

      .location-visuals {
        gap: 1rem;
      }

      .location-card {
        border-width: 9px;
        border-radius: 22px;
      }

      .map-card {
        aspect-ratio: 4 / 5;
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

      .visit-section {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
      }

      .visit-card,
      .review-card {
        padding: 1.1rem;
        border-radius: 20px;
      }

      .visit-card h3 {
        font-size: 1.2rem;
      }

      .visit-card p,
      .visit-card li,
      .review-card p {
        font-size: 0.92rem;
      }

      .review-card p {
        line-height: 1.52;
      }

      .review-card span {
        font-size: 0.74rem;
      }

      .membership-total {
        padding: 0.95rem;
        border-radius: 18px;
      }

      .membership-weekly-price {
        font-size: 1rem;
      }

      .membership-cancel-note {
        font-size: 0.88rem;
        padding: 0.75rem;
      }

      .membership-child-control {
        padding: 0.85rem;
      }

      .membership-child-label {
        font-size: 0.7rem;
      }

      .membership-benefits-list li {
        font-size: 0.92rem;
      }

      .footer {
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