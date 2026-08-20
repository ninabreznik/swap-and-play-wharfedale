(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
    "image": "./assets/swap-items/purple-soft-jacket.jpg",
    "title": "Purple soft bear jacket",
    "details": "6-12 months",
    "added": "2026-08-18"
  },
  {
    "image": "./assets/swap-items/complet-trousers-blouse.jpg",
    "title": "Overalls with a butterfly",
    "details": "6-12 months",
    "added": "2026-08-18"
  },
  {
    "image": "./assets/swap-items/animal-print-dungarees.jpg",
    "title": "Animal Print Dungarees",
    "details": "3-4 years",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/star-jacket.jpg",
    "title": "Star jacket",
    "details": "12-18 months",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/blade.jpg",
    "title": "Blade & Rose knitted leggins",
    "details": "9-12 months",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/suumer-long-pants-blue.jpg",
    "title": "Light long summer trousers",
    "details": "2-3 years",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/tracksuit-set-grey.jpg",
    "title": "Cotton tracksuit set",
    "details": "3-4 years",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/skirt-and-jumper.jpg",
    "title": "Skirt and jumper with peace sign",
    "details": "3-4 years",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/baby-polo-shirt.jpg",
    "title": "Baby Polo Shirt",
    "details": "9-12 months",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/linen-dungarees-with-elephant.jpg",
    "title": "Linen dungarees with elephant",
    "details": "9-12 months",
    "added": "2026-08-08"
  },
  {
    "image": "./assets/swap-items/3-pairs-of-shorts.jpg",
    "title": "Girls shorts",
    "details": "2-3 years",
    "added": "2026-08-08"
  }
]
},{}],2:[function(require,module,exports){
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

},{"..":3}],3:[function(require,module,exports){
module.exports = page

const get_theme = require('get_theme')

const DAY_PASS_PAYMENT_URL = 'https://buy.stripe.com/5kQ14m8ga9jj0pjdsh0Ba05'
const MEMBERSHIP_PAYMENT_URL = 'https://buy.stripe.com/cNi9AS3ZU9jj4Fzewl0Ba08'
const GIFT_MONTH_PAYMENT_URL = 'https://buy.stripe.com/cNifZg0NI7bb0pjag50Ba09'

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
          data-scroll-to="#passes"
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
            These are some of the recent arrivals rather than live stock, so some items may
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
              src="./assets/role-play.jpg"
              alt="Children playing together in the role play room"
              class="photo"
            >

            <img
              src="./assets/mum-and-son.jpg"
              alt="Mother and son playing together"
              class="photo"
            >
            <img
              src="./assets/girls-playing.jpeg"
              alt="Children playing together on the floor"
              class="photo"
            >

            <img
              src="./assets/focused-play.jpg"
              alt="A child concentrating on a puzzle"
              class="photo"
            >
            <img
              src="./assets/children-playing.jpg"
              alt="A child playing"
              class="photo"
            >            

            <img
              src="./assets/quiet-coffee.jpg"
              alt="A cup of coffee beside the play space"
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

            </article>

            <article class="social-time">
              <span class="social-day">
                Tuesday
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
            </article>

            <article class="social-time">
              <span class="social-day">
                Friday
              </span>

              <strong>
                Afternoon Playdate
              </strong>

              <span>
                2–5pm
              </span>
            </article>

            <article class="social-time">
              <span class="social-day">
                Saturday
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
                2-4pm
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
              Come for a single day or make Swap & Play part of your routine
              with unlimited monthly access.
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

              <div class="summer-offer">
                <strong>Until Aug 31 - Summer Playdate Offer</strong>
                <span>
                  Bring another family and make it a playdate — one Day Pass covers two families for £10.
                </span>
              </div>

              <a
                class="button secondary-button"
                href="${DAY_PASS_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Day Pass
              </a>

            </article>


            <!-- MEMBERSHIP -->

            <article class="price-card featured">

              <p class="price-card-label">
                UNLIMITED ACCESS
              </p>

              <h3>
                Monthly Membership
              </h3>

              <div class="price">
                <strong>£35</strong>
                <span>per month</span>
              </div>

              <p>
                Unlimited visits for your household, whenever it works for you.
              </p>

              <ul>
                <li>Unlimited visits every month</li>
                <li>Come anytime from 6am–9pm</li>
                <li>Stay as long as you like</li>
                <li>Play spaces and Community Wardrobe included</li>
                <li>Tea and coffee included</li>
                <li>1 guest family per month included</li>
                <li>Cancel anytime.</li>
              </ul>

              <div class="membership-offer">
                <strong>Be one of our first 10 member families</strong>
                <span>
                  Lock in the founding rate of £35/month for as long as you remain a member.
                </span>
              </div>

              <a
                class="button primary-button"
                href="${MEMBERSHIP_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Founding Member
              </a>

            </article>

          </div>


          <!-- GIFT -->

          <div class="gift-card">

            <div class="gift-decoration gift-decoration-top">
              <span>✦</span>
            </div>

            <div class="gift-content">

              <p class="gift-eyebrow">
                Gift Voucher
              </p>

              <h2>
                Give One Month of<br>
                Swap &amp; Play
              </h2>

              <p class="gift-description">
                Know a family who would love Swap &amp; Play?
                Give them a whole month to play, swap, explore
                and enjoy the space.
              </p>

              <div class="gift-price">
                <strong>£35</strong>
              </div>

              <p class="gift-message">
                A little gift for a family you love.
              </p>

              <p class="gift-validity">
                This voucher is valid for one year
              </p>

              <a
                href="${GIFT_MONTH_PAYMENT_URL}"
                class="button primary-button gift-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gift a Month
              </a>

            </div>

            <div class="gift-decoration gift-decoration-bottom">
              <span>✦</span>
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
},{"../data/swap-room-items.json":1,"get_theme":4}],4:[function(require,module,exports){
module.exports = get_theme

function get_theme () {
  return `
    :host {
      font-family:
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Inter,
        sans-serif;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      --blue: #6fa8dc;
      --blue-dark: #4f82ae;

      --pink: #f4a6c0;
      --green: #d1ece6;

      --sand: #f4efe6;
      --cream: #fbfaf6;
      --beige: #e9e6e1;

      --heather: #8f64a4;

      --ink: #2f4f4f;
      --muted: #6f8079;

      --white: #ffffff;

      --line: rgba(47, 79, 79, 0.12);
      --line-light: rgba(47, 79, 79, 0.07);

      --shadow-small:
        0 10px 30px rgba(47, 79, 79, 0.06);

      --shadow:
        0 20px 55px rgba(47, 79, 79, 0.09);

      --shadow-large:
        0 32px 90px rgba(47, 79, 79, 0.13);
    }


    * {
      box-sizing: border-box;
    }


    .page {
      overflow-x: hidden;
      background: var(--cream);
      color: var(--ink);
      line-height: 1.65;
    }


    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }

    h1 {
      max-width: 720px;
      margin: 0 0 1.25rem;
      color: var(--white);
      font-size: clamp(2.35rem, 5vw, 4.6rem);
      font-weight: 750;
      line-height: 0.98;
      letter-spacing: -0.06em;
    }

    h2 {
      margin: 0 0 1.5rem;
      font-size: clamp(2rem, 4vw, 3.4rem);
      line-height: 1.05;
      letter-spacing: -0.045em;
    }

    h3 {
      margin: 0 0 0.55rem;
      color: var(--ink);
      font-size: 1.22rem;
      line-height: 1.18;
      letter-spacing: -0.02em;
    }


    p {
      margin-bottom: 1.15rem;

      font-size: 1.06rem;
      line-height: 1.7;
    }


    a {
      color: var(--heather);
      text-underline-offset: 0.2em;
    }


    button {
      font: inherit;
    }


    button,
    a {
      -webkit-tap-highlight-color: transparent;
    }


    button:focus-visible,
    .button:focus-visible,
    a:focus-visible {
      outline: 3px solid rgba(143, 100, 164, 0.36);
      outline-offset: 4px;
    }


    /* ---------------------------------------------------------
       LAYOUT
       --------------------------------------------------------- */

    .wave {
      display: block;
      width: 100%;
      margin: -1px 0;
      padding: 0;
      font-size: 0;
      line-height: 0;
    }

    .wave svg {
      display: block;
      width: 100%;
      height: 70px;
    }

    .section {
      padding: 7rem 1.5rem;
    }

    .content {
      width: 100%;
      max-width: 940px;
      margin: 0 auto;
    }

    .content-wide {
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
    }

    .content-xl {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .center {
      text-align: center;
    }

    .center p {
      max-width: 720px;
      margin-right: auto;
      margin-left: auto;
    }

    .section-heading {
      max-width: 860px;
      margin: 0 auto 3.6rem;
    }

    .section-heading h2 {
      max-width: 820px;
      margin-right: auto;
      margin-left: auto;
    }

    .section-intro {
      max-width: 720px;
      margin-right: auto;
      margin-bottom: 0;
      margin-left: auto;

      color: var(--muted);

      font-size: 1.14rem;
      line-height: 1.65;
    }

    .eyebrow {
      margin-bottom: 1rem;

      color: rgba(255, 255, 255, 0.84);

      font-size: 0.73rem;
      font-weight: 850;
      line-height: 1.25;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .eyebrow.dark {
      color: var(--heather);
    }


    /* ---------------------------------------------------------
       BUTTONS
       --------------------------------------------------------- */

    .button {
      display: inline-flex;
      min-height: 54px;

      align-items: center;
      justify-content: center;

      padding: 0.92rem 1.75rem;

      border: 1px solid transparent;
      border-radius: 999px;

      cursor: pointer;

      font-size: 0.96rem;
      font-weight: 800;
      line-height: 1.2;
      text-align: center;
      text-decoration: none;

      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .button:hover {
      transform: translateY(-2px);
    }

    .primary-button {
      border-color: var(--heather);

      background: var(--heather);
      box-shadow: 0 12px 28px rgba(143, 100, 164, 0.18);

      color: white;
    }

    .primary-button:hover {
      border-color: #79518d;
      background: #79518d;

      color: white;
    }

    .secondary-button {
      border-color: var(--ink);
      background: var(--ink);
      color: white;
      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .secondary-button:hover {
      transform: translateY(-2px);
    }


    /* ---------------------------------------------------------
       ANNOUNCEMENT
       --------------------------------------------------------- */

    .announcement-bar {
      padding: 0.7rem 1rem;

      background: var(--green);

      text-align: center;
    }

    .announcement-link {
      margin: 0;
      padding: 0.35rem 0.5rem;

      border: 0;
      background: transparent;

      color: var(--ink);

      cursor: pointer;

      font-size: 0.87rem;
      font-weight: 750;
      line-height: 1.35;
    }

    .announcement-link:hover {
      color: var(--heather);
    }


    /* ---------------------------------------------------------
       HERO
       --------------------------------------------------------- */

    .hero {
      padding: 5rem 1.5rem 6rem;

      background: var(--blue);
    }

    .hero-inner {
      display: grid;

      grid-template-columns:
        minmax(0, 1.12fr)
        minmax(340px, 0.88fr);

      max-width: 1240px;
      margin: 0 auto;

      align-items: center;
      gap: clamp(3rem, 6vw, 6rem);
    }

    .hero-copy {
      min-width: 0;
    }

    .hero-logo {
      display: block;

      width: 230px;
      max-width: 55%;
      height: auto;

      margin-bottom: 2.5rem;

      filter:
        brightness(0)
        invert(1)
        drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));
    }

    .hero-subtitle {
      max-width: 680px;
      margin-bottom: 1.7rem;

      color: rgba(255, 255, 255, 0.93);

      font-size: clamp(1.18rem, 2vw, 1.42rem);
      line-height: 1.55;
    }

    .hero-details {
      display: flex;
      flex-wrap: wrap;

      gap: 0.55rem 1.5rem;

      margin: 1.7rem 0 1.2rem;

      color: rgba(255, 255, 255, 0.9);

      font-size: 0.9rem;
      font-weight: 700;
    }

    .hero-details span {
      position: relative;
    }

    .hero-details span + span::before {
      position: absolute;
      top: 50%;
      left: -0.85rem;

      width: 4px;
      height: 4px;

      border-radius: 50%;

      background: rgba(255, 255, 255, 0.58);

      content: "";
      transform: translateY(-50%);
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;

      align-items: center;
      gap: 0.8rem;

      margin-top: 1.1rem;
    }

    .hero .primary-button {
      border-color: white;

      background: white;
      box-shadow: none;

      color: var(--ink);
    }

    .hero .primary-button:hover {
      background: var(--cream);

      color: var(--heather);
    }

    .hero .secondary-button {
      border-color: rgba(255, 255, 255, 0.58);

      color: white;
    }

    .hero .secondary-button:hover {
      border-color: white;
      background: white;

      color: var(--ink);
    }

    .hero-photo {
      position: relative;
      overflow: hidden;
      border-radius: 70px;
      box-shadow: var(--shadow-large);
    }

    .hero-photo .photo {
      display: block;

      width: 100%;
      height: clamp(480px, 52vw, 650px);

      margin: 0;

      object-fit: cover;
      object-position: center;

      transition: transform 0.8s ease;
    }

    .hero-photo:hover .photo {
      transform: scale(1.015);
    }


    /* ---------------------------------------------------------
       IDENTITY — PLAY / SHARE / BELONG
       --------------------------------------------------------- */

    .identity-section {
      background: var(--cream);
      padding-top: 2rem;
    }

    .identity-grid {
      display: grid;

      grid-template-columns: repeat(3, minmax(0, 1fr));

      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .identity-card {
      position: relative;

      min-height: 290px;

      padding: 2.6rem 2.5rem 2.8rem;

      border-right: 1px solid var(--line);
    }

    .identity-card:last-child {
      border-right: 0;
    }

    .identity-number {
      display: block;

      margin-bottom: 2.2rem;

      color: var(--heather);

      font-family: inherit;
      font-weight: 750;
    }

    .identity-card h3 {
      font-family: inherit;
      font-weight: 750;
    }

    .identity-card p {
      max-width: 330px;
      margin-bottom: 0;

      color: var(--muted);

      font-size: 1rem;
    }


    /* ---------------------------------------------------------
       LOCATION
       --------------------------------------------------------- */

    .location-section {
      background: var(--sand);
    }

    .location-visuals {
      display: grid;

      grid-template-columns:
        minmax(0, 1.3fr)
        minmax(300px, 0.7fr);

      max-width: 1040px;
      margin: 0 auto 3rem;

      align-items: center;
      gap: 1.8rem;
    }

    .location-card {
      overflow: hidden;

      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 18px;

      background: white;
      box-shadow: var(--shadow-small);
    }

    .location-card .photo {
      display: block;

      width: 100%;
      max-width: none;
      height: auto;

      margin: 0;

      border: 0;
      border-radius: 0;
      box-shadow: none;
    }

    .building-card {
      aspect-ratio: 4 / 3;
    }

    .building-card img {
      width: 100%;
      height: 100% !important;

      object-fit: cover;
    }

    .map-card {
      aspect-ratio: 4 / 4.2;
    }

    .map-card img {
      width: 100%;
      height: 100% !important;

      object-fit: contain;

      background: #f9f6ef;
    }

    .location-details {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      max-width: 960px;
      margin: 0 auto 2.4rem;

      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .location-detail {
      display: flex;

      min-height: 110px;

      flex-direction: column;
      justify-content: center;

      padding: 1.4rem 1.8rem;

      border-right: 1px solid var(--line);

      text-align: center;
    }

    .location-detail:last-child {
      border-right: 0;
    }

    .location-detail strong {
      display: block;

      margin-bottom: 0.3rem;

      font-size: 0.93rem;
    }

    .location-detail span {
      color: var(--muted);

      font-size: 0.9rem;
      line-height: 1.45;
    }


    /* ---------------------------------------------------------
       HOW IT WORKS
       --------------------------------------------------------- */

    .how-it-works-section {
      background: var(--cream);
    }

    .steps-grid {
      display: grid;

      grid-template-columns: repeat(3, minmax(0, 1fr));

      max-width: 1040px;
      margin: 0 auto;

      gap: 1rem;
    }

    .step-card {
      padding: 2rem;

      border: 1px solid var(--line);
      border-radius: 16px;

      background: white;
    }

    .step-number {
      display: inline-flex;

      width: 34px;
      height: 34px;

      align-items: center;
      justify-content: center;

      margin-bottom: 1.5rem;

      border: 1px solid var(--line);
      border-radius: 50%;

      color: var(--heather);

      font-family: inherit;
      font-weight: 750;
    }

    .step-card p {
      margin-bottom: 0;

      color: var(--muted);

      font-size: 0.98rem;
    }

    .big-statement {
      max-width: 820px;

      margin: 4rem auto 0 !important;

      color: var(--ink);

      font-family: inherit;
      font-weight: 750;
    }


    /* ---------------------------------------------------------
       COMMUNITY WARDROBE
       --------------------------------------------------------- */

    .swap-section {
      background: var(--green);
    }

    .swap-story-grid {
      display: grid;

      grid-template-columns:
        minmax(0, 0.95fr)
        minmax(360px, 1.05fr);

      align-items: center;
      gap: clamp(3rem, 7vw, 6rem);
    }

    .swap-story-copy {
      max-width: 590px;
    }

    .swap-story-copy h2 {
      max-width: 580px;
    }

    .swap-story-copy p {
      max-width: 570px;
    }

    .large-copy {
      font-family: inherit;
      font-weight: 750;
    }

    .swap-principle {
      margin-top: 2rem;

      font-size: 0.98rem !important;
    }

    .swap-principle-large {
      margin-top: 1.5rem;

      color: var(--heather);

      font-family: inherit;
      font-weight: 750;

      font-size: clamp(2rem, 4vw, 3.2rem) !important;
      line-height: 1.08 !important;
      letter-spacing: -0.035em;
    }

    .swap-story-photo {
      overflow: hidden;

      border-radius: 60px;

      box-shadow: var(--shadow);
    }

    .swap-story-photo .photo {
      display: block;

      width: 100%;
      max-width: none;
      height: 600px;

      margin: 0;

      object-fit: cover;
      object-position: center;

      border: 0;
      border-radius: 0;
      box-shadow: none;
    }


    /* ---------------------------------------------------------
       RECENTLY ADDED SWAP ITEMS
       --------------------------------------------------------- */

    .swap-preview-section {
      background: var(--cream);
    }

    .swap-preview-heading {
      display: grid;

      grid-template-columns:
        minmax(0, 0.9fr)
        minmax(320px, 0.65fr);

      align-items: end;
      justify-content: space-between;

      gap: 3rem;

      margin-bottom: 2.5rem;
    }

    .swap-preview-heading h2 {
      max-width: 620px;
      margin-bottom: 0;
    }

    .swap-preview-intro {
      max-width: 550px;
      margin: 0;

      color: var(--muted);

      font-size: 1rem;
      line-height: 1.65;
    }

    .swap-items-scroll {
      display: grid;

      grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));

      gap: 1rem;
    }

    .swap-item-card {
      overflow: hidden;

      border: 1px solid var(--line-light);
      border-radius: 12px;

      background: white;
    }

    .swap-item-image-wrap {
      aspect-ratio: 4 / 5;

      overflow: hidden;

      background: var(--sand);
    }

    .swap-item-image {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;

      transition: transform 0.35s ease;
    }

    .swap-item-card:hover .swap-item-image {
      transform: scale(1.025);
    }

    .swap-item-copy {
      padding: 1rem 1rem 1.1rem;
    }

    .swap-item-copy h3 {
      margin-bottom: 0.3rem;

      font-size: 1rem;
    }

    .swap-item-details,
    .swap-item-added {
      margin: 0;

      font-size: 0.84rem;
      line-height: 1.45;
    }

    .swap-item-details {
      color: var(--ink);
    }

    .swap-item-added {
      margin-top: 0.3rem;

      color: var(--muted);
    }

    .swap-stock-note {
      max-width: 700px;

      margin: 1.5rem 0 0;

      color: var(--muted);

      font-size: 0.84rem;
    }

    .swap-preview-empty {
      display: grid;

      grid-template-columns:
        minmax(300px, 1.15fr)
        minmax(280px, 0.85fr);

      overflow: hidden;

      border: 1px solid var(--line);
      border-radius: 18px;

      background: var(--sand);
    }

    .swap-preview-room-photo {
      display: block;

      width: 100%;
      height: 100%;
      min-height: 420px;

      object-fit: cover;
    }

    .swap-preview-empty-copy {
      display: flex;

      flex-direction: column;
      justify-content: center;

      padding: 3rem;
    }

    .swap-preview-kicker {
      display: block;

      margin-bottom: 0.8rem;

      color: var(--heather);

      font-size: 0.7rem;
      font-weight: 850;
      letter-spacing: 0.13em;
      text-transform: uppercase;
    }

    .swap-preview-empty-copy h3 {
      font-family: inherit;
      font-weight: 750;
    }

    .swap-preview-empty-copy p {
      margin-bottom: 0;

      color: var(--muted);

      font-size: 0.98rem;
    }


    /* ---------------------------------------------------------
       LIFE AT SWAP & PLAY
       --------------------------------------------------------- */

    .life-section {
      padding-top: 7rem;
      padding-bottom: 7rem;

      background: var(--sand);
    }

    .life-photo-grid {
      display: grid;

      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: 180px;

      gap: 1rem;
    }

    .life-photo-grid .photo {
      display: block;

      width: 100%;
      max-width: none;
      height: 100%;

      margin: 0;

      border: 0;
      border-radius: 8px;

      box-shadow: none;

      object-fit: cover;
    }

    .life-photo-grid .photo:nth-child(1) {
      grid-column: 1 / 6;
      grid-row: span 3;
      object-position: center 46%;
    }

    .life-photo-grid .photo:nth-child(2) {
      grid-column: 6 / 13;
      grid-row: span 2;
      object-position: center 45%;
    }

    .life-photo-grid .photo:nth-child(3) {
      grid-column: 6 / 10;
      grid-row: span 2;
      object-position: center 50%;
    }

    .life-photo-grid .photo:nth-child(4) {
      grid-column: 10 / 13;
      grid-row: span 2;
    }

    .life-photo-grid .photo:nth-child(5) {
      grid-column: 1 / 7;
      grid-row: span 2;
      object-position: center 67%;
    }

    .life-photo-grid .photo:nth-child(6) {
      grid-column: 7 / 13;
      grid-row: span 2;
      object-position: center 59%;
    }


    /* ---------------------------------------------------------
       REVIEWS
       --------------------------------------------------------- */

    .reviews-section {
      background: var(--cream);
    }

    .reviews-grid {
      display: grid;

      grid-template-columns: repeat(3, minmax(0, 1fr));

      gap: 1px;

      margin-top: 1rem;

      background: var(--line);
    }

    .review-card {
      min-width: 0;
      margin: 0;

      padding: 2.7rem 2.4rem;

      border: 0;

      background: var(--cream);
    }

    .review-card p {
      margin-bottom: 2rem;

      color: var(--ink);

      font-family: inherit;
      font-weight: 750;
    }

    .review-card footer {
      color: var(--muted);

      font-size: 0.72rem;
      font-weight: 850;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .press-links {
      display: grid;

      grid-template-columns: repeat(2, minmax(0, 1fr));

      max-width: 850px;
      margin: 3.5rem auto 0;

      gap: 1rem;
    }

    .press-link {
      display: flex;

      align-items: center;
      justify-content: space-between;

      gap: 1.5rem;

      padding: 1.2rem 1.4rem;

      border: 1px solid var(--line);
      border-radius: 10px;

      color: var(--ink);

      text-decoration: none;

      transition:
        border-color 0.2s ease,
        background 0.2s ease,
        transform 0.2s ease;
    }

    .press-link:hover {
      border-color: rgba(143, 100, 164, 0.35);

      background: white;

      transform: translateY(-1px);
    }

    .press-publication {
      font-size: 0.77rem;
      font-weight: 850;
      letter-spacing: 0.09em;
      text-transform: uppercase;
    }

    .press-read {
      color: var(--heather);

      font-size: 0.87rem;
      font-weight: 750;
    }


    /* ---------------------------------------------------------
       SOCIAL TIMES
       --------------------------------------------------------- */

    .social-section {
      background: var(--green);
    }

    .social-times-grid {
      display: grid;

      grid-template-columns: repeat(4, minmax(0, 1fr));

      max-width: 1080px;
      margin: 0 auto;

      border-top: 1px solid rgba(47, 79, 79, 0.16);
      border-left: 1px solid rgba(47, 79, 79, 0.16);
    }

    .social-time {
      display: flex;

      min-height: 175px;

      flex-direction: column;

      padding: 1.7rem;

      border-right: 1px solid rgba(47, 79, 79, 0.16);
      border-bottom: 1px solid rgba(47, 79, 79, 0.16);

      background: rgba(255, 255, 255, 0.2);
    }

    .social-day {
      margin-bottom: auto;

      color: var(--muted);

      font-size: 0.7rem;
      font-weight: 850;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .social-time strong {
      display: block;

      margin-top: 1.8rem;
      margin-bottom: 0.2rem;

      font-size: 1.02rem;
      line-height: 1.3;
    }

    .social-time > span:not(.social-day) {
      color: var(--muted);

      font-size: 0.9rem;
    }

    .social-time small {
      display: inline-block;

      margin-top: 0.7rem;

      color: var(--blue-dark);

      font-size: 0.72rem;
      font-weight: 750;
    }

    .public-social-time {
      background: rgba(255, 255, 255, 0.52);
    }

    .social-note {
      margin-top: 2rem !important;
      margin-bottom: 0 !important;

      color: var(--muted);

      font-size: 0.92rem;
    }


    /* ---------------------------------------------------------
       PLAYDATE
       --------------------------------------------------------- */

    .playdate-section {
      background: var(--cream);
    }

    .playdate-card {
      max-width: 840px;
      margin: 0 auto;

      padding: 4.5rem;

      border: 1px solid var(--line);
      border-radius: 18px;

      background: white;
      box-shadow: var(--shadow-small);

      text-align: center;
    }

    .playdate-copy {
      max-width: 630px;
      margin: 0 auto;
    }

    .playdate-copy h2 {
      max-width: 600px;
      margin-right: auto;
      margin-left: auto;
    }

    .playdate-lead {
      font-family: inherit;
      font-weight: 750;
    }

    .playdate-price {
      display: flex;

      flex-direction: column;
      align-items: center;

      margin: 2rem 0 1.5rem;

      gap: 0.25rem;
    }

    .playdate-price strong {
      font-family: inherit;
      font-weight: 500;

      font-size: 4.2rem;
      line-height: 1;
      letter-spacing: -0.05em;
    }

    .playdate-price span {
      color: var(--muted);

      font-size: 0.9rem;
    }

    .playdate-benefits {
      max-width: 430px;
      margin: 2rem auto;

      padding: 0;

      list-style: none;

      text-align: left;
    }

    .playdate-benefits li {
      position: relative;

      margin-bottom: 0.7rem;

      padding-left: 1.4rem;

      color: var(--muted);

      font-size: 0.95rem;
      line-height: 1.45;
    }

    .playdate-benefits li::before {
      position: absolute;
      top: 0;
      left: 0;

      color: var(--heather);

      content: "•";
    }

    .small-note {
      max-width: 550px;
      margin: 1rem auto 0;

      color: var(--muted);

      font-size: 0.84rem;
      line-height: 1.5;
    }


    /* ---------------------------------------------------------
       PRICING
       --------------------------------------------------------- */

    .pricing-section {
      background: var(--sand);
    }

    .pass-options-grid {
      display: grid;

      grid-template-columns: repeat(2, minmax(0, 1fr));

      align-items: stretch;

      max-width: 980px;
      margin: 0 auto;

      gap: 1.2rem;
    }

    .price-card {
      display: flex;

      min-width: 0;
      min-height: 540px;

      flex-direction: column;

      padding: 2.5rem;

      border: 1px solid var(--line);
      border-radius: 16px;

      background: var(--cream);
    }

    .price-card.featured {
      position: relative;

      border-color: rgba(143, 100, 164, 0.45);

      background: white;

      box-shadow: var(--shadow);
    }

    .price-card.featured::before {
      position: absolute;
      top: -1px;
      left: 2rem;
      right: 2rem;

      height: 4px;

      border-radius: 0 0 6px 6px;

      background: var(--heather);

      content: "";
    }

    .price-card-label {
      margin-bottom: 1.2rem;

      color: var(--heather);

      font-size: 0.68rem;
      font-weight: 850;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .price-card h3 {
      margin-bottom: 1.2rem;

      font-family: inherit;
      font-weight: 750;

      font-size: 1.8rem;
    }

    .price {
      display: flex;

      min-height: 88px;

      flex-direction: column;

      margin-bottom: 1.5rem;
    }

    .price strong {
      font-family: inherit;
      font-weight: 750;

      font-size: 3.3rem;
      line-height: 1;
      letter-spacing: -0.045em;
    }

    .price span {
      margin-top: 0.3rem;

      color: var(--muted);

      font-size: 0.82rem;
    }

    .price-card > p:not(.price-card-label) {
      color: var(--muted);

      font-size: 0.96rem;
    }

    .price-card ul {
      margin: 1.1rem 0 2rem;

      padding: 0;

      list-style: none;
    }

    .price-card li {
      position: relative;

      margin-bottom: 0.65rem;

      padding-left: 1.35rem;

      color: var(--ink);

      font-size: 0.9rem;
      line-height: 1.5;
    }

    .price-card li::before {
      position: absolute;
      top: 0;
      left: 0;

      color: var(--heather);

      content: "•";
    }

    .price-card .button {
      width: 100%;

      margin-top: auto;
    }


    /* ---------------------------------------------------------
       SUMMER OFFER / MEMBERSHIP DETAILS
       --------------------------------------------------------- */

    .summer-offer,
    .membership-offer {
      display: flex;

      flex-direction: column;

      margin: 0 0 1.8rem;
      padding: 1rem 1.1rem;

      border-radius: 10px;

      background: rgba(209, 236, 230, 0.62);
    }

    .summer-offer strong,
    .membership-offer strong {
      display: block;

      margin-bottom: 0.25rem;

      color: var(--ink);

      font-size: 0.84rem;
      font-weight: 850;
    }

    .summer-offer span,
    .membership-offer span {
      color: var(--muted);

      font-size: 0.82rem;
      line-height: 1.45;
    }

    .membership-offer {
      background: rgba(143, 100, 164, 0.08);
    }

    .membership-offer strong {
      color: var(--heather);
    }

    .price-card .small-note {
      margin-top: 0.9rem;
      margin-bottom: 0;

      text-align: center;
    }


    /* ---------------------------------------------------------
      GIFT VOUCHER
      --------------------------------------------------------- */

    .gift-card {
      position: relative;

      width: 100%;
      max-width: 820px;

      margin: 3rem auto 0;

      overflow: hidden;

      border: 1px solid rgba(143, 100, 164, 0.16);
      border-radius: 24px;

      background:
        radial-gradient(
          circle at 8% 18%,
          rgba(244, 166, 192, 0.22) 0,
          rgba(244, 166, 192, 0) 28%
        ),
        radial-gradient(
          circle at 92% 82%,
          rgba(209, 236, 230, 0.65) 0,
          rgba(209, 236, 230, 0) 30%
        ),
        #fff4f0;

      box-shadow:
        0 18px 50px rgba(47, 79, 79, 0.08);

      text-align: center;
    }


    /* Main content */

    .gift-content {
      position: relative;
      z-index: 2;

      max-width: 650px;

      margin: 0 auto;

      padding: 3.5rem 2rem 3.2rem;
    }


    /* Eyebrow */

    .gift-eyebrow {
      margin: 0 0 1rem;

      color: var(--heather);

      font-size: 0.72rem;
      font-weight: 850;
      line-height: 1.2;

      letter-spacing: 0.16em;
      text-transform: uppercase;
    }


    /* Heading */

    .gift-card h2 {
      max-width: 620px;

      margin: 0 auto 1.25rem;

      color: var(--ink);

      font-family: inherit;
      font-size: clamp(2.15rem, 5vw, 3.3rem);
      font-weight: 750;
      line-height: 1.02;

      letter-spacing: -0.045em;
    }


    /* Description */

    .gift-description {
      max-width: 590px;

      margin: 0 auto;

      color: var(--muted);

      font-size: 1.05rem;
      line-height: 1.65;
    }


    /* Price */

    .gift-price {
      display: inline-flex;

      align-items: baseline;
      gap: 0.55rem;

      margin: 2rem auto 1.4rem;
      padding: 0.7rem 1.25rem;
    }

    .gift-price strong {
      color: var(--ink);
      font-size: 3rem;
      font-weight: 800;
      line-height: 1;
    }

    .gift-price span {
      color: var(--muted);

      font-size: 0.8rem;
      font-weight: 700;
    }


    /* Emotional line */

    .gift-message {
      margin: 0 auto 0.5rem;

      color: var(--heather);

      font-size: 1rem;
      font-weight: 750;
    }


    /* Validity */

    .gift-validity {
      margin: 0;

      color: var(--muted);

      font-size: 0.82rem;
    }


    /* Button */

    .gift-button {
      display: inline-flex;

      min-height: 54px;

      align-items: center;
      justify-content: center;

      margin-top: 1.7rem;
      padding: 0.95rem 2rem;

      border: 1px solid var(--heather);
      border-radius: 999px;

      background: var(--heather);

      color: white !important;

      font-size: 0.96rem;
      font-weight: 800;
      line-height: 1.2;

      text-decoration: none;

      box-shadow:
        0 10px 24px rgba(143, 100, 164, 0.2);

      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .gift-button:hover {
      border-color: #79518d;

      background: #79518d;

      color: white !important;

      transform: translateY(-2px);

      box-shadow:
        0 13px 28px rgba(143, 100, 164, 0.25);
    }


    /* Decorative stars */

    .gift-decoration {
      position: absolute;

      z-index: 1;

      pointer-events: none;

      color: var(--pink);

      font-size: 1.7rem;
      line-height: 1;
    }

    .gift-decoration-top {
      top: 1.5rem;
      left: 2rem;

      transform: rotate(-12deg);
    }

    .gift-decoration-bottom {
      right: 2rem;
      bottom: 1.5rem;

      color: var(--heather);

      font-size: 1.35rem;

      transform: rotate(14deg);
    }


    /* A couple of soft decorative circles */

    .gift-card::before,
    .gift-card::after {
      position: absolute;

      width: 90px;
      height: 90px;

      border-radius: 50%;

      content: "";
      pointer-events: none;
    }

    .gift-card::before {
      top: -45px;
      right: 15%;

      background: rgba(244, 166, 192, 0.18);
    }

    .gift-card::after {
      bottom: -50px;
      left: 12%;

      background: rgba(209, 236, 230, 0.5);
    }

    /* ---------------------------------------------------------
       FIRST VISIT
       --------------------------------------------------------- */

    .first-visit-section {
      background: var(--blue);

      color: white;
    }

    .first-visit-section h2 {
      color: white;
    }

    .first-visit-section .eyebrow {
      color: rgba(255, 255, 255, 0.78);
    }

    .first-visit-section p {
      color: rgba(255, 255, 255, 0.9);
    }

    .first-visit-section .secondary-button {
      border-color: rgba(255, 255, 255, 0.65);

      color: white;
    }

    .first-visit-section .secondary-button:hover {
      border-color: white;

      background: white;

      color: var(--ink);
    }


    /* ---------------------------------------------------------
       CLOSING
       --------------------------------------------------------- */

    .closing-section {
      padding-top: 7rem;
      padding-bottom: 8rem;

      background: var(--cream);
    }

    .closing-photo {
      display: block;

      width: min(740px, 100%);
      height: auto;

      margin: 0 auto 5rem;

      border-radius: 4px;

      box-shadow: none;

      object-fit: cover;
    }

    .closing-section h2 {
      max-width: 790px;

      margin-right: auto;
      margin-left: auto;

      font-size: clamp(2.5rem, 5vw, 4.5rem);
      line-height: 1.08;
    }


    /* ---------------------------------------------------------
       FOOTER
       --------------------------------------------------------- */

    .footer {
      padding: 5rem 1.5rem;

      background: var(--ink);

      color: white;
    }

    .footer-logo {
      display: block;

      width: 230px;
      max-width: 70%;
      height: auto;

      margin: 0 auto 2rem;

      filter:
        brightness(0)
        invert(1);
    }

    .footer p {
      margin-bottom: 0.75rem;

      color: rgba(255, 255, 255, 0.75);

      font-size: 0.9rem;
      line-height: 1.55;
    }

    .footer a {
      color: white;

      font-weight: 700;
    }


    /* ---------------------------------------------------------
       SHAREABLE HASH TARGETS
       --------------------------------------------------------- */

    #location,
    #swap-room,
    #swap-new,
    #calendar,
    #playdate,
    #passes {
      scroll-margin-top: 2rem;
    }


    /* ---------------------------------------------------------
       TABLET
       --------------------------------------------------------- */

    @media (max-width: 1050px) {

      .hero-inner,
      .swap-story-grid {
        grid-template-columns: 1fr;
      }

      .hero {
        padding-top: 4rem;

        text-align: center;
      }

      .hero-logo {
        margin-right: auto;
        margin-left: auto;
      }

      h1,
      .hero-subtitle {
        margin-right: auto;
        margin-left: auto;
      }

      .hero-details,
      .hero-actions {
        justify-content: center;
      }

      .hero-photo {
        width: min(640px, 100%);
        margin: 1rem auto 0;
      }

      .hero-photo .photo {
        height: auto;
        aspect-ratio: 4 / 4.3;
      }

      .swap-story-copy {
        max-width: 760px;

        margin: 0 auto;

        text-align: center;
      }

      .swap-story-copy h2,
      .swap-story-copy p {
        margin-right: auto;
        margin-left: auto;
      }

      .swap-story-photo {
        max-width: 700px;

        margin: 0 auto;
      }

      .swap-story-photo .photo {
        height: auto;
        aspect-ratio: 4 / 3;
      }

      .pass-options-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .price-card {
        width: 100%;
        min-height: 0;
      }

      .price-card .button {
        max-width: 300px;
      }
    }


    @media (max-width: 900px) {

      .section {
        padding-top: 5.5rem;
        padding-bottom: 5.5rem;
      }

      .identity-grid,
      .steps-grid {
        grid-template-columns: 1fr;
      }

      .identity-card {
        min-height: 0;

        border-right: 0;
        border-bottom: 1px solid var(--line);
      }

      .identity-card:last-child {
        border-bottom: 0;
      }

      .identity-card p {
        max-width: 620px;
      }

      .location-visuals {
        grid-template-columns: 1fr;

        max-width: 620px;
      }

      .location-details {
        grid-template-columns: 1fr;

        max-width: 620px;
      }

      .location-detail {
        min-height: 0;

        border-right: 0;
        border-bottom: 1px solid var(--line);
      }

      .location-detail:last-child {
        border-bottom: 0;
      }

      .reviews-grid {
        grid-template-columns: 1fr;
      }

      .review-card {
        border-bottom: 1px solid var(--line);
      }

      .review-card:last-child {
        border-bottom: 0;
      }

      .social-times-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .life-photo-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
      }

      .life-photo-grid .photo:nth-child(n) {
        grid-column: auto;
        grid-row: auto;

        aspect-ratio: 4 / 3;
      }
    }


    /* ---------------------------------------------------------
       MOBILE
       --------------------------------------------------------- */

    @media (max-width: 700px) {

      .section {
        padding: 4.25rem 1rem;
      }

      h1 {
        font-size: clamp(2.8rem, 13vw, 4rem);
        line-height: 0.98;
      }

      h2 {
        font-size: clamp(2.1rem, 10vw, 3rem);
      }

      p {
        font-size: 1rem;
      }

      .section-heading {
        margin-bottom: 2.6rem;
      }

      .section-intro {
        font-size: 1.02rem;
      }

      .hero {
        padding: 3.2rem 1rem 4.2rem;
      }

      .hero-inner {
        gap: 2.5rem;
      }

      .hero-logo {
        width: 200px;

        margin-bottom: 2rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .hero-details {
        display: grid;

        gap: 0.35rem;

        font-size: 0.83rem;
      }

      .hero-details span + span::before {
        display: none;
      }

      .hero-actions {
        display: grid;

        width: min(360px, 100%);

        margin-right: auto;
        margin-left: auto;

        gap: 0.65rem;
      }

      .hero-actions .button {
        width: 100%;
      }

      .hero-photo {
        border-radius: 38px;
      }

      .identity-card {
        padding: 2rem 0.5rem;
      }

      .identity-number {
        margin-bottom: 1.2rem;
      }

      .location-visuals {
        gap: 1rem;
      }

      .location-card {
        border-radius: 10px;
      }

      .map-card {
        aspect-ratio: 4 / 4.5;
      }

      .location-detail {
        padding: 1.2rem;
      }

      .step-card {
        padding: 1.5rem;
      }

      .big-statement {
        margin-top: 3rem !important;

        font-size: 1.55rem;
      }

      .swap-story-grid {
        gap: 2.7rem;
      }

      .swap-story-photo {
        border-radius: 32px;
      }

      .swap-preview-heading {
        grid-template-columns: 1fr;

        gap: 1rem;
      }

      .swap-preview-heading h2 {
        margin-bottom: 0.5rem;
      }

      /*
       * Swap arrivals become a horizontal shelf on phones.
       */

      .swap-preview-section {
        padding-right: 0;
        padding-left: 0;
      }

      .swap-preview-heading,
      .swap-stock-note {
        margin-right: 1rem;
        margin-left: 1rem;
      }

      .swap-items-scroll {
        display: flex;

        gap: 0.8rem;

        padding: 0 1rem 0.7rem;

        overflow-x: auto;

        scroll-snap-type: x proximity;

        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
      }

      .swap-item-card {
        width: min(68vw, 245px);

        flex: 0 0 min(68vw, 245px);

        scroll-snap-align: start;
      }

      .swap-preview-empty {
        grid-template-columns: 1fr;

        margin-right: 1rem;
        margin-left: 1rem;
      }

      .swap-preview-room-photo {
        min-height: 0;

        aspect-ratio: 4 / 3;
      }

      .swap-preview-empty-copy {
        padding: 1.5rem;
      }

      .life-photo-grid {
        display: grid;

        grid-template-columns: 1fr;

        gap: 0.75rem;
      }

      .life-photo-grid .photo:nth-child(n) {
        aspect-ratio: 4 / 3;
      }

      .review-card {
        padding: 2rem 0.2rem;
      }

      .review-card p {
        font-size: 1.12rem;
      }

      .press-links {
        grid-template-columns: 1fr;

        margin-top: 2.5rem;
      }

      .social-times-grid {
        grid-template-columns: 1fr;
      }

      .social-time {
        min-height: 125px;

        padding: 1.3rem;
      }

      .social-time strong {
        margin-top: 1rem;
      }

      .playdate-card {
        padding: 2.5rem 1.3rem;

        border-radius: 12px;
      }

      .playdate-price strong {
        font-size: 3.5rem;
      }

      .pass-options-grid {
        grid-template-columns: 1fr;
      }

      .price-card {
        width: 100%;
        padding: 1.7rem;
      }

      .price-card.featured::before {
        left: 1.5rem;
        right: 1.5rem;
      }

      .price strong {
        font-size: 3rem;
      }

      .summer-offer,
      .membership-offer {
        padding: 0.9rem 1rem;
      }

      .gift-card {
        border-radius: 18px;
      }

      .gift-content {
        padding: 2.7rem 1.25rem 2.5rem;
      }

      .gift-card h2 {
        font-size: 2.25rem;
      }

      .gift-description {
        font-size: 0.98rem;
      }

      .gift-price {
        margin-top: 1.6rem;
      }

      .gift-button {
        width: 100%;
        max-width: 300px;
      }

      .gift-decoration-top {
        top: 1rem;
        left: 1rem;
      }

      .gift-decoration-bottom {
        right: 1rem;
        bottom: 1rem;
      }

      .price-card .button,
      .button,
      .first-visit-section .button,
      .closing-section .button {
        width: 100%;
        max-width: 340px;
      }

      .closing-photo {
        margin-bottom: 3.5rem;
      }

      .closing-section h2 {
        font-size: 2.5rem;
      }

      .footer {
        padding: 4rem 1rem;
      }

      .footer p {
        max-width: 330px;

        margin-right: auto;
        margin-left: auto;

        overflow-wrap: anywhere;
      }
    }


    @media (max-width: 440px) {

      h1 {
        font-size: 2.75rem;
      }

      h2 {
        font-size: 2.15rem;
      }

      .eyebrow {
        font-size: 0.67rem;
      }

      .hero-logo {
        width: 185px;
      }

      .hero-photo .photo {
        aspect-ratio: 4 / 4.8;
      }

      .swap-principle-large {
        font-size: 2.25rem !important;
      }

      .playdate-price strong {
        font-size: 3.1rem;
      }

      .price strong {
        font-size: 2.8rem;
      }

      .closing-section h2 {
        font-size: 2.15rem;
      }

      .price-card-label {
        font-size: 0.62rem;
      }

      .gift-callout {
        padding: 1.7rem 1rem;
      }
    }


    /* ---------------------------------------------------------
       WAVE — OUTSIDE THE MEDIA QUERY
       --------------------------------------------------------- */

    .wave {
      display: block;
      width: 100%;
      margin: -1px 0;
      padding: 0;
      overflow: hidden;
      font-size: 0;
      line-height: 0;
    }

    .wave svg {
      display: block;
      width: 100%;
      height: 70px;
      margin: 0;
      padding: 0;
    }
  `
}
},{}]},{},[2]);
