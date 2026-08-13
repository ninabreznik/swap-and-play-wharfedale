module.exports = page

const get_theme = require('get_theme')

const DAY_PASS_PAYMENT_URL = 'https://buy.stripe.com/5kQ14m8ga9jj0pjdsh0Ba05'
const FIVE_VISIT_PACK_PAYMENT_URL = 'https://buy.stripe.com/cNieVcbsm0MNb3X5ZP0Ba06'
const WEEKLY_PASS_PAYMENT_URL = 'https://buy.stripe.com/4gM9ASbsmeDDeg95ZP0Ba00'
const PLAYDATE_PASS_PAYMENT_URL = 'https://buy.stripe.com/dRmeVc2VQeDD2xr9c10Ba07'

const ILKLEY_GAZETTE_ARTICLE_URL = 'https://www.ilkleygazette.co.uk/news/26265760.new-family-play-swap-space-opens-wharfedale'
const WHARFEDALE_OBSERVER_ARTICLE_URL = 'https://www.wharfedaleobserver.co.uk/news/26265760.new-family-play-swap-space-opens-wharfedale'
const SWAP_ROOM_ITEMS = require('../data/swap-room-items.json')

function render_swap_room_items() {
  if (!SWAP_ROOM_ITEMS.length) {
    return `
      <div class="swap-preview-empty">
        <img
          src="./assets/swap-room.jpg"
          alt="Clothes, books and toys in the Swap Room"
          class="swap-preview-room-photo"
        >
        <div class="swap-preview-empty-copy">
          <span class="swap-preview-kicker">The rails and shelves change all the time</span>
          <h3>Fresh finds are arriving now</h3>
          <p>
            We are starting to photograph recent arrivals so you can have a quick look before you visit.
            Clothes, books, toys and useful little family items are all first come, first swapped.
          </p>
        </div>
      </div>
    `
  }

  return `
    <div class="swap-items-scroll" aria-label="Recently added Swap Room items">
      ${SWAP_ROOM_ITEMS.map(item => `
        <article class="swap-item-card">
          <div class="swap-item-image-wrap">
            <img src="${item.image}" alt="${item.title}" class="swap-item-image">
          </div>
          <div class="swap-item-copy">
            <h3>${item.title}</h3>
            ${item.details ? `<p class="swap-item-details">${item.details}</p>` : ''}
            ${item.added ? `<p class="swap-item-added">${item.added}</p>` : ''}
          </div>
        </article>
      `).join('')}
    </div>
  `
}

function page (cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  shadow.innerHTML = `
    <div class="page">

      <!-- AUGUST ANNOUNCEMENT -->

      <section class="announcement-bar">
        <button
          type="button"
          class="announcement-link"
          data-scroll-to="#playdate"
        >
          August: Bring a friend — one visit for two families for £10 →
        </button>
      </section>


      <!-- HERO -->

      <section class="hero">
        <div class="hero-inner">

          <div class="hero-copy">
            <img
              src="./assets/logo.png"
              alt="Swap & Play Wharfedale"
              class="hero-logo"
            >

            <p class="eyebrow">
              Play · swap · belong
            </p>

            <h1>
              A shared space for family life in Ilkley
            </h1>

            <p class="hero-subtitle">
              Play rooms for little ones, a Community Wardrobe for everything
              they outgrow, and a place for local families to meet, share and belong.
            </p>

            <div class="hero-details">
              <span>Open every day</span>
              <span>6am–9pm</span>
              <span>Just behind Booths, Ilkley</span>
            </div>

            <div class="hero-actions">
              <button
                type="button"
                class="button primary-button"
                data-scroll-to="#passes"
              >
                View Pass Options
              </button>

              <button
                type="button"
                class="button secondary-button"
                data-scroll-to="#location"
              >
                Find us
              </button>
            </div>
          </div>

          <div class="hero-photo">
            <img
              src="./assets/hero-families.jpg"
              alt="Local families spending time together at Swap & Play"
              class="photo"
            >
          </div>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#6fa8dc">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#fbfaf6">
          </path>
        </svg>
      </div>


      <!-- WHAT SWAP & PLAY IS -->

      <section class="section identity-section">
        <div class="content content-wide">

          <div class="section-heading center">
            <p class="eyebrow dark">
              More than somewhere to pass an hour
            </p>

            <h2>
              A little piece of family infrastructure
            </h2>

            <p class="section-intro">
              Swap & Play is a shared local space designed around ordinary life
              with babies and young children.
            </p>
          </div>

          <div class="identity-grid">

            <article class="identity-card">

              <h3>Play</h3>

              <p>
                Calm, thoughtfully prepared rooms where babies and young children
                can explore, move, pretend, build, read and play.
              </p>
            </article>

            <article class="identity-card">

              <h3>Share</h3>

              <p>
                Bring the good clothes, books and toys your children have outgrown,
                and take home things another local family no longer needs.
              </p>
            </article>

            <article class="identity-card">

              <h3>Belong</h3>

              <p>
                Come independently when you want somewhere calm, or overlap with
                other local families when you would like company.
              </p>
            </article>

          </div>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#fbfaf6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#f4efe6">
          </path>
        </svg>
      </div>

      <!-- LOCATION -->

      <section
        class="section location-section"
        id="location"
      >
        <div class="content content-wide">

          <div class="section-heading center">

            <p class="eyebrow dark">
              Right in the middle of Ilkley
            </p>

            <h2>
              Easy to find. Easy to drop into.
            </h2>

            <p class="section-intro">
              We are on Leeds Road, just behind Booths — close to Riverside,
              the playground and the centre of town.
            </p>

          </div>

          <div class="location-visuals">

            <div class="location-card building-card">
              <img
                src="./assets/building.png"
                alt="The entrance to Swap & Play on Leeds Road in Ilkley"
                class="photo"
              >
            </div>

            <div class="location-card map-card">
              <img
                src="./assets/map.png"
                alt="Map showing Swap & Play behind Booths in Ilkley"
                class="photo"
              >
            </div>

          </div>

          <div class="location-details">

            <div class="location-detail">
              <strong>Swap & Play Wharfedale</strong>
              <span>Leeds Road, Ilkley</span>
            </div>

            <div class="location-detail">
              <strong>Parking</strong>
              <span>Booths car park is just around the corner</span>
            </div>

            <div class="location-detail">
              <strong>Opening hours</strong>
              <span>Every day, 6am–9pm</span>
            </div>

          </div>

          <div class="center">
            <a
              class="button primary-button"
              href="https://maps.app.goo.gl/xPGPfSGdbXFYjEog6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>

        </div>
      </section>


      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#f4efe6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#fbfaf6">
          </path>
        </svg>
      </div>      

      <!-- HOW IT WORKS -->

      <section class="section how-it-works-section">
        <div class="content content-wide">

          <div class="section-heading center">

            <p class="eyebrow dark">
              No booking. No timetable to organise around.
            </p>

            <h2>
              Come when your family is ready
            </h2>

          </div>

          <div class="steps-grid">

            <article class="step-card">
              <span class="step-number">1</span>

              <h3>Choose your access</h3>

              <p>
                Pick the visit option that works for your family.
              </p>
            </article>

            <article class="step-card">
              <span class="step-number">2</span>

              <h3>Get your own door code</h3>

              <p>
                There is no reception or formal check-in. Your household gets
                its own access code.
              </p>
            </article>

            <article class="step-card">
              <span class="step-number">3</span>

              <h3>Just arrive</h3>

              <p>
                Come anytime between 6am and 9pm while your access is active.
              </p>
            </article>

          </div>

          <p class="big-statement center">
            Come for 30 minutes or stay for three hours.<br>
            No booking. No rushing. Just arrive.
          </p>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#fbfaf6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#d1ece6">
          </path>
        </svg>
      </div>      

      <!-- COMMUNITY WARDROBE -->

      <section
        class="section swap-section"
        id="swap-room"
      >
        <div class="content content-wide">

          <div class="swap-story-grid">

            <div class="swap-story-copy">

              <p class="eyebrow dark">
                The Community Wardrobe
              </p>

              <h2>
                What do you do with everything they outgrow?
              </h2>

              <p class="large-copy">
                Babies and young children move through clothes, books and toys
                astonishingly quickly.
              </p>

              <p>
                Instead of every family buying, storing, photographing and
                reselling the same things separately, we can keep useful things
                moving through our local community.
              </p>

              <p>
                Bring good-quality clothes, books, toys and useful family items
                that you no longer need. Browse what other families have brought.
                Take home something your family can genuinely use.
              </p>

              <p class="swap-principle">
                <strong>
                  No credits. No selling. No one-for-one exchange.
                </strong>
              </p>

              <p class="swap-principle-large">
                Give when you can.<br>
                Take what you need.
              </p>

            </div>

            <div class="swap-story-photo">
              <img
                src="./assets/swap-room.jpg"
                alt="Children's clothes, books and toys in the Swap Room"
                class="photo"
              >
            </div>

          </div>

        </div>
      </section>
      
      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#d1ece6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#fbfaf6">
          </path>
        </svg>
      </div>


      <!-- RECENT SWAP ITEMS -->

      <section
        class="section swap-preview-section"
        id="swap-new"
      >
        <div class="content content-wide">

          <div class="swap-preview-heading">

            <div>
              <p class="eyebrow dark">
                Recently added
              </p>

              <h2>
                Have a look before you come
              </h2>
            </div>

            <p class="swap-preview-intro">
              The Community Wardrobe changes constantly as local families bring
              in good things their children have outgrown.
            </p>

          </div>

          ${render_swap_room_items()}

          <p class="swap-stock-note">
            These are recent arrivals rather than live stock, so some items may
            already have found a new home.
          </p>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#fbfaf6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#f4efe6">
          </path>
        </svg>
      </div>
      
      <!-- LIFE AT SWAP & PLAY -->

      <section class="section life-section">
        <div class="content content-xl">

          <div class="section-heading center">

            <p class="eyebrow dark">
              Life at Swap & Play
            </p>

            <h2>
              Somewhere that can become part of your week
            </h2>

            <p class="section-intro">
              Come after breakfast, between errands, after nursery, on a rainy
              afternoon or when home has simply started to feel too small.
            </p>

          </div>

          <div class="life-photo-grid">

            <img
              src="./assets/focused-play.jpg"
              alt="A child concentrating on a puzzle"
              class="photo"
            >

            <img
              src="./assets/social-play.jpg"
              alt="Families meeting at Swap & Play"
              class="photo"
            >

            <img
              src="./assets/quiet-coffee.jpg"
              alt="A cup of coffee beside the play space"
              class="photo"
            >

            <img
              src="./assets/role-play.jpg"
              alt="Children playing together in the role play room"
              class="photo"
            >

            <img
              src="./assets/girls-playing.jpeg"
              alt="Children playing together on the floor"
              class="photo"
            >

            <img
              src="./assets/baby.jpg"
              alt="A baby exploring the baby play area"
              class="photo"
            >

          </div>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#f4efe6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#fbfaf6">
          </path>
        </svg>
      </div>

      <!-- REVIEWS -->

      <section class="section reviews-section">
        <div class="content content-wide">

          <div class="section-heading center">

            <p class="eyebrow dark">
              From local families
            </p>

            <h2>
              What it feels like to use the space
            </h2>

          </div>

          <div class="reviews-grid">

            <blockquote class="review-card">
              <p>
                “Amazing set up, absolutely everything has been thought about.
                The space is clean and well equipped with great resources for
                all ages.”
              </p>

              <footer>Mel A</footer>
            </blockquote>

            <blockquote class="review-card">
              <p>
                “I loved the toys, the space is clean and fresh, and you have
                thought of nearly everything. We brought the girls dinner and
                had a play session before bed — it was brilliant.”
              </p>

              <footer>Nancy M</footer>
            </blockquote>

            <blockquote class="review-card">
              <p>
                “The flexibility and the fact that you don’t have to pre-book
                make it so convenient to use. Our little ones love it here and
                always ask to come back.”
              </p>

              <footer>Julia R</footer>
            </blockquote>

          </div>

          <div class="press-links">

            <a
              class="press-link"
              href="${ILKLEY_GAZETTE_ARTICLE_URL}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="press-publication">
                Ilkley Gazette
              </span>

              <span class="press-read">
                Read about Swap & Play →
              </span>
            </a>

            <a
              class="press-link"
              href="${WHARFEDALE_OBSERVER_ARTICLE_URL}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="press-publication">
                Wharfedale Observer
              </span>

              <span class="press-read">
                Read about Swap & Play →
              </span>
            </a>

          </div>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#fbfaf6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#d1ece6">
          </path>
        </svg>
      </div>

      <!-- SOCIAL TIMES -->

      <section
        class="section social-section"
        id="calendar"
      >
        <div class="content content-wide">

          <div class="section-heading center">

            <p class="eyebrow dark">
              Want some company?
            </p>

            <h2>
              Come at a social time
            </h2>

            <p class="section-intro">
              You never need an event to use Swap & Play. These are simply
              regular times when other local families are more likely to be here.
            </p>

          </div>

          <div class="social-times-grid">

            <article class="social-time">
              <span class="social-day">
                Monday
              </span>

              <strong>
                Afternoon Playdate
              </strong>

              <span>
                3–5pm
              </span>
            </article>

            <article class="social-time">
              <span class="social-day">
                Tuesday
              </span>

              <strong>
                Cowork & Play
              </strong>

              <span>
                11am–2pm
              </span>
            </article>

            <article class="social-time public-social-time">
              <span class="social-day">
                Wednesday
              </span>

              <strong>
                Open Play
              </strong>

              <span>
                10am–12pm
              </span>

              <small>
                Open to everyone
              </small>
            </article>

            <article class="social-time">
              <span class="social-day">
                Thursday
              </span>

              <strong>
                Under-1s Playdate
              </strong>

              <span>
                3–5pm
              </span>
            </article>

            <article class="social-time">
              <span class="social-day">
                Friday
              </span>

              <strong>
                Grandparents' Morning
              </strong>

              <span>
                10am–12pm
              </span>
            </article>

            <article class="social-time">
              <span class="social-day">
                Friday
              </span>

              <strong>
                Afternoon Playdate
              </strong>

              <span>
                3–6pm
              </span>
            </article>

            <article class="social-time">
              <span class="social-day">
                Saturday
              </span>

              <strong>
                Swap & Social
              </strong>

              <span>
                5–7pm
              </span>
            </article>

            <article class="social-time">
              <span class="social-day">
                Sunday
              </span>

              <strong>
                Coffee & Cake
              </strong>

              <span>
                11am–2pm
              </span>
            </article>

          </div>

          <p class="social-note center">
            Outside these times, the space is often much quieter.
          </p>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#d1ece6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#fbfaf6">
          </path>
        </svg>
      </div>

      <!-- PLAYDATE CAMPAIGN -->

      <section
        class="section playdate-section"
        id="playdate"
      >
        <div class="content content-wide">

          <div class="playdate-card">

            <div class="playdate-copy">

              <p class="eyebrow dark">
                Special August offer
              </p>

              <h2>
                Bring a friend to Swap & Play
              </h2>

              <p class="playdate-lead">
                One £10 Playdate Pass = one visit for two families.
              </p>

              <p>
                Pick a friend, choose a time and enjoy a playdate without
                having to host it at home.
              </p>

              <div class="playdate-price">
                <strong>£10</strong>
                <span>total for both families</span>
              </div>

              <ul class="playdate-benefits">
                <li>One visit for two families</li>
                <li>Come anytime from 6am to 9pm</li>
                <li>Stay for as long as you like</li>
                <li>Play spaces and Community Wardrobe included</li>
                <li>Tea and coffee included</li>
                <li>Bring your own food and snacks</li>
              </ul>

              <a
                class="button primary-button"
                href="${PLAYDATE_PASS_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Playdate Pass — £10
              </a>

              <p class="small-note">
                Only one family needs to buy the pass.
                Available until the end of August.
              </p>

            </div>

          </div>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#fbfaf6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#f4efe6">
          </path>
        </svg>
      </div>      

      <!-- VISIT OPTIONS -->

      <section
        class="section pricing-section"
        id="passes"
      >
        <div class="content content-wide">

          <div class="section-heading center">

            <p class="eyebrow dark">
              Visit Swap & Play
            </p>

            <h2>
              Choose what works for your family
            </h2>

            <p class="section-intro">
              Every option includes the play spaces, Community Wardrobe,
              tea and coffee, and access to any social time happening while
              your pass is active.
            </p>

          </div>

          <div class="pass-options-grid">


            <!-- DAY PASS -->

            <article class="price-card">

              <p class="price-card-label">
                One visit
              </p>

              <h3>
                Day Pass
              </h3>

              <div class="price">
                <strong>£10</strong>
                <span>per household</span>
              </div>

              <p>
                For a spontaneous day when you simply need somewhere easy to go.
              </p>

              <ul>
                <li>Access from 6am–9pm</li>
                <li>Stay as long as you like</li>
                <li>Play spaces included</li>
                <li>Community Wardrobe included</li>
                <li>Tea and coffee included</li>
              </ul>

              <a
                class="button secondary-button"
                href="${DAY_PASS_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Day Pass
              </a>

            </article>


            <!-- WEEK PASS -->

            <article class="price-card featured">

              <p class="price-card-label">
                Summer favourite
              </p>

              <h3>
                7-Day Flexi Pass
              </h3>

              <div class="price">
                <strong>£15</strong>
                <span>per household</span>
              </div>

              <p>
                Keep Swap & Play available to your family for a whole week.
              </p>

              <ul>
                <li>Unlimited visits for 7 consecutive days</li>
                <li>Your week starts with your first visit</li>
                <li>Come anytime from 6am–9pm</li>
                <li>All social times included</li>
                <li>Community Wardrobe included</li>
              </ul>

              <a
                class="button primary-button"
                href="${WEEKLY_PASS_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy 7-Day Flexi Pass
              </a>

            </article>


            <!-- 5 VISITS -->

            <article class="price-card">

              <p class="price-card-label">
                Flexible
              </p>

              <h3>
                5-Visit Pack
              </h3>

              <div class="price">
                <strong>£40</strong>
                <span>£8 per visit</span>
              </div>

              <p>
                Five visits to use when you need them without fitting everything
                into one week.
              </p>

              <ul>
                <li>Five flexible visits</li>
                <li>Come anytime from 6am–9pm</li>
                <li>Stay as long as you like</li>
                <li>Community Wardrobe included</li>
                <li>Valid for 6 weeks from first visit</li>
              </ul>

              <a
                class="button secondary-button"
                href="${FIVE_VISIT_PACK_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy 5-Visit Pack
              </a>

            </article>

          </div>

        </div>
      </section>

      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#f4efe6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#6fa8dc">
          </path>
        </svg>
      </div>      


      <!-- FIRST VISIT -->

      <section class="section first-visit-section">
        <div class="content center">

          <p class="eyebrow dark">
            Never been before?
          </p>

          <h2>
            Come and have a look on Wednesday
          </h2>

          <p>
            Wednesday Open Play from 10am–12pm is open to everyone.
            No pass is required, so you can see the space, let your child
            explore and get a feel for how Swap & Play works.
          </p>

          <button
            type="button"
            class="button secondary-button"
            data-scroll-to="#location"
          >
            Find us
          </button>

        </div>
      </section>


      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#6fa8dc">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#fbfaf6">
          </path>
        </svg>
      </div>   

      <!-- FINAL STATEMENT -->

      <section class="section closing-section">
        <div class="content center">

          <img
            src="./assets/shoes-at-door.jpg"
            alt="Children's shoes at the entrance to Swap & Play"
            class="closing-photo photo"
          >

          <p class="eyebrow dark">
            A place to keep coming back to
          </p>

          <h2>
            Come when your child is ready.<br>
            Stay while it works.<br>
            Leave when it doesn't.
          </h2>

          <button
            type="button"
            class="button primary-button"
            data-scroll-to="#passes"
          >
            Visit Swap & Play
          </button>

        </div>
      </section>


      <!-- WAVE -->

      <div class="wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect
            width="1200"
            height="120"
            fill="#fbfaf6">
          </rect>

          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            fill="#2f4f4f">
          </path>
        </svg>
      </div>  

      <!-- FOOTER -->

      <footer class="footer">
        <div class="content center">

          <img
            src="./assets/logo.png"
            alt="Swap & Play Wharfedale"
            class="footer-logo"
          >

          <p>
            Swap & Play Wharfedale<br>
            A shared space for family life in Ilkley
          </p>

          <p>
            Open every day · 6am–9pm
          </p>

          <p>
            <a href="mailto:nina@swapandplaywharfedale.co.uk">
              nina@swapandplaywharfedale.co.uk
            </a>
          </p>

          <p>
            <a
              href="https://www.instagram.com/swap_and_play_wharfedale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @swap_and_play_wharfedale
            </a>
          </p>

          <p>
            <a
              href="https://maps.app.goo.gl/xPGPfSGdbXFYjEog6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on Google Maps
            </a>
          </p>

        </div>
      </footer>

    </div>
  `


  // INTERNAL PAGE LINKS

  shadow.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', () => {
      const selector = button.dataset.scrollTo

      if (!selector) return

      history.replaceState(null, '', selector)
      scroll_to_target(selector)
    })
  })


  // EXTERNAL THEME / CSS

  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)


  // SHAREABLE URLS

  window.addEventListener('hashchange', scroll_to_hash_target)
  window.addEventListener('load', scroll_to_hash_target)

  requestAnimationFrame(scroll_to_hash_target)
  setTimeout(scroll_to_hash_target, 100)
  setTimeout(scroll_to_hash_target, 600)


  if (cb) cb()

  return el


  function scroll_to_hash_target () {
    const path = window.location.pathname.replace(/\/$/, '')
    const hash = window.location.hash

    if (
      path.endsWith('/playdate') ||
      hash === '#playdate'
    ) {
      scroll_to_target('#playdate')
      return
    }

    if (
      path.endsWith('/trial') ||
      path.endsWith('/passes') ||
      hash === '#trial' ||
      hash === '#apply' ||
      hash === '#membership' ||
      hash === '#pricing' ||
      hash === '#passes'
    ) {
      scroll_to_target('#passes')
      return
    }

    if (
      hash === '#calendar' ||
      hash === '#events' ||
      hash === '#social'
    ) {
      scroll_to_target('#calendar')
      return
    }

    if (
      hash === '#swap' ||
      hash === '#swap-new'
    ) {
      scroll_to_target('#swap-new')
      return
    }

    if (
      hash === '#swap-room' ||
      hash === '#wardrobe' ||
      hash === '#community-wardrobe'
    ) {
      scroll_to_target('#swap-room')
      return
    }

    if (
      hash === '#location' ||
      hash === '#find-us'
    ) {
      scroll_to_target('#location')
    }
  }


  function scroll_to_target (selector) {
    const target = shadow.querySelector(selector)

    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}