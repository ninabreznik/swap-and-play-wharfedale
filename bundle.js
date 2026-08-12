(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
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

function page(cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const buy = document.createElement('button')
  buy.innerText = 'View pass options'
  buy.className = 'hero-pass-button'
  buy.onclick = scroll_to_passes

  shadow.innerHTML = `
    <div class="page">

    <section class="hero">
      <div class="hero-inner">
        <div class="logo hero-copy">
          <img src="./assets/logo.png" alt="Swap & Play Wharfedale logo">

          <p class="eyebrow">Play · swap · belong</p>

          <h1>A calm place to play, whenever you need it</h1>

          <p class="hero-subtitle">
            Come when your child is ready. Play, have a coffee, meet other families and browse the Swap Room — open every day from 6am to 9pm.
          </p>

          <div class="hero-actions">
            <button
              type="button"
              class="hero-swap-button"
              data-scroll-to-swap
            >
              See what’s new in the Swap Room
            </button>

            <buy-pass></buy-pass>
          </div>
        </div>

        <div class="hero-photo">
          <img
            src="./assets/hero-families.jpg"
            alt="Parent relaxing while children play nearby"
            class="photo"
          >
        </div>
      </div>
    </section>

    <div class="wave" style="background:#6fa8dc;">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
          style="fill:#fbfaf6;">
        </path>
      </svg>
    </div>

    <section class="section swap-preview-section" id="swap-new">
      <div class="content content-wide">

        <div class="swap-preview-heading">
          <div>
            <p class="eyebrow dark">New in the Swap Room</p>
            <h2>Have a look before you come</h2>
          </div>

          <p class="swap-preview-intro">
            The Swap Room changes every week as local families bring in good things their children have outgrown.
            Here is a peek at some of the most recent arrivals.
          </p>
        </div>

        ${render_swap_room_items()}

        <div class="swap-preview-footer">
          <p>
            No credits and no one-for-one swapping. Give when you can, take what your family can use.
            This is a peek at recent arrivals rather than live stock, so items may already have found a new home.
          </p>

          <button
            type="button"
            class="swap-preview-link"
            data-scroll-to-swap-room
          >
            How the Swap Room works →
          </button>
        </div>

        </div>
      </section>

      <div class="wave" style="background:#fbfaf6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#f4efe6;">
          </path>
        </svg>
      </div>

      <section class="section light location-section">
        <div class="content content-wide center">
          <p class="eyebrow dark">Built around real family life</p>
            <h2>A place that works around your day</h2>

            <p class="location-intro">
              Most children’s activities happen at a fixed time. Young children often do not.
              Naps shift, meals run late, the weather changes, and some days simply do not go to plan.
            </p>

            <p class="location-intro">
              Swap & Play works differently. Once you have access, you can come when your child is ready,
              without booking a session or rushing to arrive on time.
            </p>

            <p class="location-tagline">
              Come for 30 minutes or stay for three hours.<br>
              No booking. No rushing. Just arrive.
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
            <p class="eyebrow dark">Everything is already set up</p>
            <h2>Leave the play preparation to us</h2>
          </div>
          <div>
            <p>At home, play can mean finding the right toys, opening boxes, setting something up and tidying it all away again. Here, the rooms are ready when you arrive.</p>
            <p>Children can move between pretend play, puzzles, books, building toys and movement, while adults supervise, sit down, make a drink or talk to another grown-up.</p>
            <p>Come for a social session when you would like company, or visit outside event times when you prefer a quieter, calmer atmosphere.</p>
            <p>We are open every day from 6am to 9pm, including the late-afternoon and early-evening hours when most children’s activities have already finished.</p>
          </div>
        </div>
      </section>

      <section class="photo-story expanded-photo-story">
        <div class="content content-xl">
          <div class="photo-grid photo-grid-clean">
            <img src="./assets/focused-play.jpg" alt="A child concentrating on a puzzle at a table" class="story-photo">
            <img src="./assets/social-play.jpg" alt="Families meeting for a relaxed social play session" class="story-photo">            <img src="./assets/quiet-coffee.jpg" alt="A quiet play room with a cup of coffee in the foreground" class="story-photo">
            <img src="./assets/role-play.jpg" alt="Two children playing together in the role-play shop" class="story-photo">
            <img src="./assets/girls-playing.jpeg" alt="Two girls playing together on the floor" class="story-photo">
            <img src="./assets/baby.jpg" alt="A baby sitting on a mat with toys around and looking into the camera" class="story-photo">
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

      <section class="section weekly-calendar-section soft-calendar" id="calendar">
        <div class="content content-wide center">
        <p class="eyebrow dark">Optional social times</p>

        <h2>Want company? Come at a social time</h2>

        <p class="section-intro">
          You never need an event to use Swap & Play. Members and active pass holders can visit
          independently from 6am to 9pm every day. These regular times simply make it easier to
          come when other local families are likely to be here.
        </p>

        <details class="calendar-details" data-calendar-details open>
          <summary>Weekly social schedule</summary>

          <div class="calendar-details-body">
          <div class="calendar-legend" aria-label="Calendar key">
            <span class="calendar-key">
              <span class="calendar-key-dot public-dot"></span>
              Open to everyone
            </span>

            <span class="calendar-key">
              <span class="calendar-key-dot member-dot"></span>
              Social time
            </span>

            <span class="calendar-key">
              <span class="calendar-key-dot flexible-dot"></span>
              Flexible access
            </span>
          </div>

          <div
            class="calendar-scroll"
            tabindex="0"
            aria-label="Weekly events calendar. Scroll horizontally to see all days."
          >
            <div
              class="week-calendar"
              role="table"
              aria-label="Weekly schedule"
            >
              <div class="calendar-header-row" role="row">
                <div class="calendar-day-heading" role="columnheader">
                  Monday
                </div>

                <div class="calendar-day-heading" role="columnheader">
                  Tuesday
                </div>

                <div
                  class="calendar-day-heading public-heading"
                  role="columnheader"
                >
                  Wednesday
                </div>

                <div class="calendar-day-heading" role="columnheader">
                  Thursday
                </div>

                <div class="calendar-day-heading" role="columnheader">
                  Friday
                </div>

                <div
                  class="calendar-day-heading weekend-heading"
                  role="columnheader"
                >
                  Saturday
                </div>

                <div
                  class="calendar-day-heading weekend-heading"
                  role="columnheader"
                >
                  Sunday
                </div>
              </div>

              <div class="calendar-body-row" role="row">

                <!-- MONDAY -->
                <div
                  class="calendar-day-cell"
                  role="cell"
                  aria-label="Monday"
                >
                  <button
                    class="week-event flexible-event availability-event"
                    type="button"
                    data-start="06:00"
                    data-end="21:00"
                    data-title="Flexible access"
                    data-time="Monday, 6am–9pm"
                    data-access="Members and valid pass holders"
                    data-description="Visit independently at any point during opening hours. The Afternoon Playdate is an optional social session, and you can visit before, during or after it."
                    data-member-only="true"
                    aria-label="Flexible access, Monday from 6am to 9pm. Open event details."
                  >
                    <span class="week-event-time">6am–9pm</span>
                    <strong class="week-event-title">Flexible access</strong>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="15:00"
                    data-end="17:00"
                    data-title="Afternoon Playdate"
                    data-time="Monday, 3–5pm"
                    data-access="Open to everyone · No pass required · Tea and coffee included"
                    data-description="An informal afternoon playdate for families who would like to visit when other children and carers are likely to be around. Tea and coffee are included."
                    data-member-only="true"
                    aria-label="Afternoon Playdate, Monday from 3 to 5pm. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">3–5pm</span>
                    <strong class="week-event-title">
                      Afternoon Playdate
                    </strong>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>
                </div>

                <!-- TUESDAY -->
                <div
                  class="calendar-day-cell"
                  role="cell"
                  aria-label="Tuesday"
                >
                  <button
                    class="week-event flexible-event availability-event"
                    type="button"
                    data-start="06:00"
                    data-end="21:00"
                    data-title="Flexible access"
                    data-time="Tuesday, 6am–9pm"
                    data-access="Members and valid pass holders"
                    data-description="Visit independently at any point during opening hours. Cowork & Play is an optional social session, and you can visit before, during or after it."
                    data-member-only="true"
                    aria-label="Flexible access, Tuesday from 6am to 9pm. Open event details."
                  >
                    <span class="week-event-time">6am–9pm</span>
                    <strong class="week-event-title">Flexible access</strong>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="11:00"
                    data-end="14:00"
                    data-title="Cowork & Play"
                    data-time="Tuesday, 11am–2pm"
                    data-access="Free for members and active pass holders · Drop in anytime · Tea and coffee included"
                    data-description="A relaxed three-hour drop-in for parents who would like to do some light work while their child plays nearby. Come at any point between 11am and 2pm and stay for as long as it works for your family. This is not supervised childcare. Tea and coffee are included."
                    data-member-only="true"
                    aria-label="Cowork and Play, Tuesday from 11am to 2pm. Drop in anytime. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">11am–2pm</span>
                    <strong class="week-event-title">
                      Cowork &amp; Play
                    </strong>
                    <span class="week-event-extra">
                      Drop in anytime
                    </span>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>
                </div>

                <!-- WEDNESDAY -->
                <div
                  class="calendar-day-cell public-cell"
                  role="cell"
                  aria-label="Wednesday"
                >
                  <button
                    class="week-event flexible-event availability-event"
                    type="button"
                    data-start="06:00"
                    data-end="21:00"
                    data-title="Flexible access"
                    data-time="Wednesday, 6am–9pm"
                    data-access="Members and valid pass holders"
                    data-description="Members and valid pass holders can visit independently throughout the day. Both Open Play sessions are also open to families without a pass."
                    data-member-only="true"
                    aria-label="Flexible access, Wednesday from 6am to 9pm. Open event details."
                  >
                    <span class="week-event-time">6am–9pm</span>
                    <strong class="week-event-title">Flexible access</strong>
                  </button>

                  <button
                    class="week-event public-event social-event"
                    type="button"
                    data-start="10:00"
                    data-end="12:00"
                    data-title="Open Play"
                    data-time="Wednesday, 10am–12pm"
                    data-access="Open to everyone · No pass required · Tea and coffee included"
                    data-description="A relaxed public session for seeing the space, letting children play and meeting other local families. You do not need a pass to attend. Tea and coffee are included."
                    data-member-only="false"
                    aria-label="Open Play, Wednesday from 10am to 12pm. Open to everyone. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">10am–12pm</span>
                    <strong class="week-event-title">Open Play</strong>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>
                </div>

                <!-- THURSDAY -->
                <div
                  class="calendar-day-cell"
                  role="cell"
                  aria-label="Thursday"
                >
                  <button
                    class="week-event flexible-event availability-event"
                    type="button"
                    data-start="06:00"
                    data-end="21:00"
                    data-title="Flexible access"
                    data-time="Thursday, 6am–9pm"
                    data-access="Members and valid pass holders"
                    data-description="Visit independently at any point during opening hours. The Under-1s Playdate is an optional social session, and you can visit before, during or after it."
                    data-member-only="true"
                    aria-label="Flexible access, Thursday from 6am to 9pm. Open event details."
                  >
                    <span class="week-event-time">6am–9pm</span>
                    <strong class="week-event-title">Flexible access</strong>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="15:00"
                    data-end="17:00"
                    data-title="Under-1s Afternoon Playdate"
                    data-time="Thursday, 3–5pm"
                    data-access="Members and valid pass holders · For babies under 1 · Tea and coffee included"
                    data-description="A calm afternoon playdate for babies under one and their grown-ups, with space to chat, feed and let little ones explore at their own pace. Tea and coffee are included."
                    data-member-only="true"
                    aria-label="Under-1s Afternoon Playdate, Thursday from 3 to 5pm. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">3–5pm</span>
                    <strong class="week-event-title">
                      Under-1s Playdate
                    </strong>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>
                </div>

                <!-- FRIDAY -->
                <div
                  class="calendar-day-cell"
                  role="cell"
                  aria-label="Friday"
                >
                  <button
                    class="week-event flexible-event availability-event"
                    type="button"
                    data-start="06:00"
                    data-end="21:00"
                    data-title="Flexible access"
                    data-time="Friday, 6am–9pm"
                    data-access="Members and valid pass holders"
                    data-description="Visit independently at any point during opening hours. Grandparents’ Morning and the Afternoon Playdate are optional social sessions."
                    data-member-only="true"
                    aria-label="Flexible access, Friday from 6am to 9pm. Open event details."
                  >
                    <span class="week-event-time">6am–9pm</span>
                    <strong class="week-event-title">Flexible access</strong>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="10:00"
                    data-end="12:00"
                    data-title="Grandparents’ Morning"
                    data-time="Friday, 10am–12pm"
                    data-access="Free for members and active pass holders · Tea and coffee included"
                    data-description="A relaxed social morning for grandparents and little ones. Come for the full session or stay for as long as suits your family. Tea and coffee are included."
                    data-member-only="true"
                    aria-label="Grandparents’ Morning, Friday from 10am to 12pm. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">10am–12pm</span>
                    <strong class="week-event-title">
                      Grandparents’ Morning
                    </strong>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="15:00"
                    data-end="18:00"
                    data-title="Afternoon Playdate"
                    data-time="Friday, 3–6pm"
                    data-access="Free for members and active pass holders · Drop in anytime · Tea and coffee included"
                    data-description="A relaxed three-hour end-of-week playdate. Come at any point between 3pm and 6pm and stay for 30 minutes or the whole afternoon. Tea and coffee are included."
                    data-member-only="true"
                    aria-label="Afternoon Playdate, Friday from 3 to 6pm. Drop in anytime. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">3–6pm</span>
                    <strong class="week-event-title">
                      Afternoon Playdate
                    </strong>
                    <span class="week-event-extra">
                      Drop in anytime
                    </span>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>
                </div>

                <!-- SATURDAY -->
                <div
                  class="calendar-day-cell weekend-cell"
                  role="cell"
                  aria-label="Saturday"
                >
                  <button
                    class="week-event flexible-event availability-event"
                    type="button"
                    data-start="06:00"
                    data-end="21:00"
                    data-title="Flexible access"
                    data-time="Saturday, 6am–9pm"
                    data-access="Members and valid pass holders"
                    data-description="Visit independently whenever it works for your family. The Swap Event is an optional social session within the normal flexible-access day."
                    data-member-only="true"
                    aria-label="Flexible access, Saturday from 6am to 9pm. Open event details."
                  >
                    <span class="week-event-time">6am–9pm</span>
                    <strong class="week-event-title">Flexible access</strong>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="17:00"
                    data-end="19:00"
                    data-title="Swap Event"
                    data-time="Saturday, 5–7pm"
                    data-access="Free for members and active pass holders · Tea and coffee included"
                    data-description="Bring along good-quality children’s clothes, books, toys or useful family items, browse what others have brought and take home anything your family can use. Tea and coffee are included."
                    data-member-only="true"
                    aria-label="Swap Event, Saturday from 5 to 7pm. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">5–7pm</span>
                    <strong class="week-event-title">Swap Event</strong>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>
                </div>

                <!-- SUNDAY -->
                <div
                  class="calendar-day-cell weekend-cell"
                  role="cell"
                  aria-label="Sunday"
                >
                  <button
                    class="week-event flexible-event availability-event"
                    type="button"
                    data-start="06:00"
                    data-end="21:00"
                    data-title="Flexible access"
                    data-time="Sunday, 6am–9pm"
                    data-access="Members and valid pass holders"
                    data-description="Visit independently whenever it works for your family. Coffee & Cake is an optional social session within the normal flexible-access day."
                    data-member-only="true"
                    aria-label="Flexible access, Sunday from 6am to 9pm. Open event details."
                  >
                    <span class="week-event-time">6am–9pm</span>
                    <strong class="week-event-title">Flexible access</strong>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="11:00"
                    data-end="14:00"
                    data-title="Coffee & Cake"
                    data-time="Sunday, 11am–2pm"
                    data-access="Free for members and active pass holders · Drop in anytime · Tea and coffee included"
                    data-description="A relaxed three-hour Sunday bring-and-share gathering. Bring a cake, biscuits or another sweet treat for the table, then help yourself to what everyone has brought. Come at any point between 11am and 2pm and stay for as long as suits you. Tea and coffee are included."
                    data-member-only="true"
                    aria-label="Coffee and Cake, Sunday from 11am to 2pm. Drop in anytime. Tea and coffee included. Open event details."
                  >
                    <span class="week-event-time">11am–2pm</span>
                    <strong class="week-event-title">
                      Coffee &amp; Cake
                    </strong>
                    <span class="week-event-extra">
                      Drop in anytime
                    </span>
                    <span class="week-event-extra">
                      Tea &amp; coffee included
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="calendar-summary">
            <p>
              <strong>Social sessions are optional.</strong>
              Members and valid pass holders can also visit independently
              from 6am to 9pm every day. Select a session to see more details.
            </p>

            <a
              class="calendar-pass-link"
              href="#passes"
              data-scroll-to-passes
            >
              View pass options →
            </a>
          </div>
          </div>
        </details>
        </div>

        <div
          class="event-modal"
          data-event-modal
          hidden
        >
          <button
            class="event-modal-backdrop"
            type="button"
            data-close-event-modal
            aria-label="Close event details"
          ></button>

          <div
            class="event-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            aria-describedby="event-modal-description"
          >
            <button
              class="event-modal-close"
              type="button"
              data-close-event-modal
              aria-label="Close event details"
            >
              ×
            </button>

            <p
              class="event-modal-time"
              data-event-modal-time
            ></p>

            <h3
              id="event-modal-title"
              data-event-modal-title
            ></h3>

            <p
              class="event-modal-access"
              data-event-modal-access
            ></p>

            <p
              class="event-modal-description"
              id="event-modal-description"
              data-event-modal-description
            ></p>

            <div
              class="event-modal-actions"
              data-event-modal-actions
              hidden
            >
            <a
              class="button event-modal-single"
              href="${DAY_PASS_PAYMENT_URL}"
              target="_blank"
              rel="noopener noreferrer"
              data-event-modal-single
            >
              Get a Day Pass — £10
            </a>
              <button class="button event-modal-pass" type="button" data-event-modal-pass>
                Compare all pass options
              </button>
            </div>
          </div>
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


      <section
        class="section soft relief-section swap-section"
        id="swap-room"
      >
        <div class="content center">

          <p class="eyebrow dark">Give what you can. Take what you need</p>

          <h2>The Swap Room is part of every visit</h2>

          <p>
            Browse children’s clothing, books, toys and useful little bits of family gear whenever you visit.
            Things come and go all the time, so there is usually something different to discover.
          </p>

          <img
            src="./assets/swap-room.jpg"
            alt="Children’s clothes, books and toys being shared and reused through the Swap Room"
            class="photo"
          >

          <p>
            You are welcome to bring good things your family has outgrown. It is not a one-for-one system:
            simply give when you can and take what your family can genuinely use.
          </p>

          <p>
            Donations can be left in the designated bins for sorting. We ask that they are new or like-new,
            stain-free, and items you would be happy to give to a friend.
          </p>

        </div>
      </section>

      <div class="wave" style="background:#fbfaf6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#f4efe6;">
          </path>
        </svg>
      </div>

      <section class="section included-section">
        <div class="content center">
        <p class="eyebrow dark">Designed for ordinary family days</p>
        <h2>Come for company, calm, or simply somewhere ready</h2>

        <p class="included-intro">
          A ready-to-use play-and-swap space for spontaneous visits, social sessions and the gaps between other plans.
        </p>

          <div class="included-grid calm-cards">
            <div class="included-card">
              <h3>No preparation needed</h3>
              <p>
                The toys, books, play areas and movement room are ready when you arrive.
              </p>
            </div>

            <div class="included-card">
              <h3>Stay as long as it works</h3>
              <p>
                Pop in for 30 minutes or settle in for a longer morning or afternoon.
              </p>
            </div>

            <div class="included-card">
              <h3>Open every day</h3>
              <p>
                Available from 6am to 9pm, 365 days a year.
              </p>
            </div>

            <div class="included-card">
              <h3>Social or quiet</h3>
              <p>
                Visit independently when it suits you, or use the optional social times when you would like company.
              </p>
            </div>

            <div class="included-card">
              <h3>Self check-in</h3>
              <p>
                Come and go independently once you have access.
              </p>
            </div>

            <div class="included-card">
              <h3>Tea and coffee included</h3>
              <p>
                Make a drink without needing to buy something every time you visit.
              </p>
            </div>

            <div class="included-card">
              <h3>Bring your own food</h3>
              <p>
                Pack what your child actually eats and stay while the day is going well.
              </p>
            </div>

            <div class="included-card">
              <h3>Space for adults too</h3>
              <p>
                Sit, talk, read, feed your child or do a little light laptop catch-up.
              </p>
            </div>

            <div class="included-card">
              <h3>Open when others are not</h3>
              <p>
                Use the space from 6am to 9pm, including late afternoons and early evenings.
              </p>
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
               “I loved the toys, the space is clean and fresh, and you have thought of nearly everything. We brought the girls dinner and had a play session before bed — it was brilliant.”
              </p>
              <span>Nancy M</span>
            </div>

            <div class="review-card">
              <p>
                “The flexibility and the fact that you don’t have to pre-book make it so convenient to use. Our little ones love it here and always ask to come back.”
              </p>
              <span>Julia R</span>
            </div>
          </div>
          <div class="press-mentions">
            <p class="press-eyebrow">Featured in the local press</p>

            <p class="press-intro">
              Local newspapers described Swap & Play as a flexible alternative
              to traditional playgroups and organised activities.
            </p>

            <div class="press-links">
              <a
                class="press-link"
                href="${ILKLEY_GAZETTE_ARTICLE_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="press-publication">Ilkley Gazette</span>
                <span class="press-title">
                  Read about the opening of Swap & Play Wharfedale
                </span>
                <span class="press-read">Read the article →</span>
              </a>

              <a
                class="press-link"
                href="${WHARFEDALE_OBSERVER_ARTICLE_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="press-publication">Wharfedale Observer</span>
                <span class="press-title">
                  Read about our new flexible play-and-swap space
                </span>
                <span class="press-read">Read the article →</span>
              </a>
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
                Bring a friend to Swap &amp; Play 💜
              </h2>

              <p class="playdate-lead">
                <strong>One £10 Playdate Pass = one visit for two families.</strong>
              </p>

              <p>
                Fancy a playdate without having to host at home?
                Pick a friend, choose a time and come to Swap &amp; Play together.
              </p>

              <div class="playdate-price">
                <strong>£10</strong>
                <span>total for both families</span>
              </div>

              <ul class="membership-benefits-list playdate-benefits">
                <li>One visit for two families</li>
                <li>Come anytime from 6am to 9pm</li>
                <li>Stay for as long as you like</li>
                <li>Play rooms and Swap Room included</li>
                <li>Tea and coffee included</li>
                <li>Bring your own food and snacks</li>
              </ul>

              <p class="playdate-note">
                Only one family needs to buy the pass.
                Your friend does not need to buy a separate pass.
              </p>

              <a
                class="button playdate-button"
                href="${PLAYDATE_PASS_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Playdate Pass — £10
              </a>

              <p class="small-note">
                Available until the end of August.
              </p>

            </div>

          </div>

        </div>
      </section>

      <div class="wave" style="background:#d1ece6;">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,75 C220,35 420,95 640,60 C860,25 1030,80 1200,55 L1200,120 L0,120 Z"
            style="fill:#d1ece6;">
          </path>
        </svg>
      </div>

      <section
        class="section soft pricing-section visit-options-section"
        id="passes"
      >
        <div class="content content-wide center">

          <p class="eyebrow dark">Choose what works for your family</p>

          <h2>Come once, come a few times, or make a week of it</h2>

          <p class="section-intro">
            All passes give you access to the play spaces and Swap Room.
            Come whenever suits you between 6am and 9pm — and if a social time is happening while you are here, simply join in.
          </p>

          <div class="playdate-pricing-callout">
            <div>
              <strong>Coming with a friend?</strong>
              <span>
                Our August Playdate Pass gives two families one visit together for £10 total.
              </span>
            </div>

            <a href="/#playdate">
              See Playdate Pass →
            </a>
          </div>

          <div class="pass-options-grid">

            <!-- DAY PASS -->

            <article class="price-card visit-pass-card secondary-pass-card">

              <div class="label">One day</div>

              <h3>Day Pass</h3>

              <p class="small">
                Perfect when you just want somewhere easy to go for the day.
                Come when it suits you and stay for as long as it works.
              </p>

              <div class="membership-total">
                <span class="membership-total-label">Per household</span>

                <strong class="membership-total-price">£10</strong>

                <div class="membership-weekly-price">
                  Flexible access for one day
                </div>

                <p class="membership-cancel-note">
                  Activates on your first visit and is valid until 9pm that day.
                </p>
              </div>

              <ul class="membership-benefits-list">
                <li>Come anytime from 6am to 9pm</li>
                <li>Stay for as long as you like</li>
                <li>Play rooms and Swap Room included</li>
                <li>Join any social time happening that day</li>
                <li>Tea and coffee included</li>
                <li>Bring your own food and snacks</li>
              </ul>

              <a
                class="button"
                href="${DAY_PASS_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Day Pass
              </a>

            </article>


            <!-- 7-DAY FLEXI PASS -->

            <article class="price-card featured membership-card visit-pass-card">

              <div class="label popular">Best value</div>

              <div class="label popular">Summer offer</div>

              <h3>Summer Flexi Week Pass</h3>

              <p class="small">
                Keep Swap &amp; Play available to your family for a full week this summer.
                Come whenever it suits you and return as often as you like.
              </p>

              <div class="membership-total">
                <span class="membership-total-label">Per household</span>

                <strong class="membership-total-price">£15</strong>

                <div class="membership-weekly-price">
                  Flexible visits of swap and play room for a week
                </div>

                <p class="membership-cancel-note">
                  Your seven days start with your first visit.
                </p>
              </div>

              <ul class="membership-benefits-list">
                <li>Flexible access for 7 consecutive days</li>
                <li>Come anytime from 6am to 9pm</li>
                <li>Play rooms and Swap Room included</li>
                <li>All social times during your active week</li>
                <li>Tea and coffee included</li>
                <li>Bring your own food and snacks</li>
              </ul>

              <a
                class="button summer-button"
                href="${WEEKLY_PASS_PAYMENT_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy 7-Day Flexi Pass
              </a>

            </article>


            <!-- 5-VISIT PACK -->

            <article class="price-card visit-pass-card secondary-pass-card">

              <div class="label">Flexible</div>

              <h3>5-Visit Pack</h3>

              <p class="small">
                Five visits to use when you need them, without having to fit them into one week.
              </p>

              <div class="membership-total">
                <span class="membership-total-label">Per household</span>

                <strong class="membership-total-price">£40</strong>

                <div class="membership-weekly-price">
                  £8 per visit
                </div>

                <p class="membership-cancel-note">
                  Your pack starts with your first visit.
                </p>
              </div>

              <ul class="membership-benefits-list">
                <li>Five flexible visits</li>
                <li>Come anytime from 6am to 9pm</li>
                <li>Stay for as long as you like each visit</li>
                <li>Play rooms and Swap Room included</li>
                <li>Join a social time if one is happening</li>
                <li>Tea and coffee included</li>
              </ul>

              <p class="small-note">
                Valid for 6 weeks from your first visit.
              </p>

              <a
                class="button"
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
          <p class="eyebrow dark">Good to know</p><h2>A few useful details</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3>How does the 7-Day Flexi Pass work?</h3>
              <p>
                Your seven days begin with your first visit. During that week you can visit independently from 6am to 9pm every day and join any scheduled events.
              </p>
            </div>

            <div class="faq-item">
              <h3>Can I come when no event is running?</h3>
              <p>
                Yes, with an active 7-Day Flexi Pass. Single Event Passes and 5-Event Packs are for scheduled events only.
              </p>
            </div>

            <div class="faq-item">
              <h3>How does the Swap Room work?</h3>
              <p>
                Browse whenever you visit, bring good-quality things your family has outgrown, and take what your family can use. It is not a one-for-one exchange.
              </p>
            </div>

            <div class="faq-item">
              <h3>Can I see the space before buying?</h3>
              <p>
                Yes. Wednesday Open Play is open to everyone and does not require a pass.
              </p>
            </div>

            <div class="faq-item">
              <h3>What is included with a Single Event Pass?</h3>
              <p>
                It covers your household for one scheduled social session, including the play rooms, Swap Room, and tea and coffee during the event.
              </p>
            </div>

            <div class="faq-item">
              <h3>How does the 5-Event Pack work?</h3>
              <p>
                The pack gives your household entry to five separate scheduled events and is valid for 6 weeks from the first event you attend.
              </p>
            </div>

            <div class="faq-item">
              <h3>Are the social times led classes?</h3>
              <p>
                No. They are informal gatherings rather than singing, story or activity classes. Children play freely while adults supervise and socialise.
              </p>
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
          <p class="eyebrow dark">For the gaps between organised activities</p>
          <h2>Not another thing to fit into your week</h2>

          <p>
            Swap & Play is there when your family needs somewhere to go:
            after breakfast, between errands, on a rainy afternoon,
            or when home has started to feel too small.
          </p>

          <p>
            Come when your child is ready. Stay while it works.
            Leave when it does not.
          </p>
        </div>
      </section>

      <section class="photo-strip">
        <img src="./assets/shoes-at-door.jpg" alt="Small children’s shoes lined up at the entrance" class="photo">
      </section>

      <div class="wave" style="background:#e9e6e1;">
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
  function setup_calendar_event_modal() {
    const modal = shadow.querySelector('[data-event-modal]')
    const title = shadow.querySelector('[data-event-modal-title]')
    const time = shadow.querySelector('[data-event-modal-time]')
    const access = shadow.querySelector('[data-event-modal-access]')
    const description = shadow.querySelector('[data-event-modal-description]')
    const pass = shadow.querySelector('[data-event-modal-pass]')
    const close_buttons = shadow.querySelectorAll('[data-close-event-modal]')
    const actions = shadow.querySelector('[data-event-modal-actions]')
    const single = shadow.querySelector('[data-event-modal-single]')

    if (!modal) return

    shadow.querySelectorAll('.week-event').forEach(event => {
      event.addEventListener('click', () => {
        title.textContent = event.dataset.title || ''
        time.textContent = event.dataset.time || ''
        access.textContent = event.dataset.access || ''
        description.textContent = event.dataset.description || ''

        actions.hidden = event.dataset.memberOnly !== 'true'
        modal.hidden = false

        shadow.querySelector('.event-modal-close')?.focus()
      })
    })

    shadow.querySelectorAll('[data-scroll-to-calendar]').forEach(button => {
      button.addEventListener('click', () => {
        history.replaceState(null, '', '#calendar')
        open_calendar_details()
        scroll_to_target('#calendar')
      })
    })

    shadow.querySelectorAll('[data-scroll-to-swap]').forEach(button => {
      button.addEventListener('click', () => {
        history.replaceState(null, '', '#swap-new')
        scroll_to_target('#swap-new')
      })
    })

    shadow.querySelectorAll('[data-scroll-to-swap-room]').forEach(button => {
      button.addEventListener('click', () => {
        history.replaceState(null, '', '#swap-room')
        scroll_to_target('#swap-room')
      })
    })

    close_buttons.forEach(button => {
      button.addEventListener('click', close_modal)
    })

    single?.addEventListener('click', close_modal)

    pass.addEventListener('click', () => {
      close_modal()
      scroll_to_passes()
    })

    modal.addEventListener('keydown', event => {
      if (event.key === 'Escape') close_modal()
    })

    function close_modal() {
      modal.hidden = true
    }
  }

  function position_calendar_events() {
    const calendar_start = to_minutes('06:00')
    const calendar_end = to_minutes('21:00')
    const slot_minutes = 15

    shadow
      .querySelectorAll('.week-event[data-start][data-end]')
      .forEach(event => {
        const start = to_minutes(event.dataset.start)
        const end = to_minutes(event.dataset.end)

        if (
          !Number.isFinite(start) ||
          !Number.isFinite(end) ||
          end <= start
        ) {
          console.warn('Invalid calendar event time', event)
          return
        }

        const visible_start = Math.max(calendar_start, start)
        const visible_end = Math.min(calendar_end, end)

        if (visible_start >= visible_end) {
          event.hidden = true
          return
        }

        const row_start =
          Math.floor(
            (visible_start - calendar_start) / slot_minutes
          ) + 1

        const row_end =
          Math.ceil(
            (visible_end - calendar_start) / slot_minutes
          ) + 1

        event.style.setProperty('--row-start', row_start)
        event.style.setProperty('--row-end', row_end)
      })
  }

  function to_minutes(value) {
    const parts = String(value).split(':')
    const hour = Number(parts[0])
    const minute = Number(parts[1])

    if (
      parts.length !== 2 ||
      !Number.isInteger(hour) ||
      !Number.isInteger(minute) ||
      hour < 0 ||
      hour > 23 ||
      minute < 0 ||
      minute > 59
    ) {
      return NaN
    }

    return hour * 60 + minute
  }

  shadow.querySelectorAll('buy-pass').forEach(node => {
    const btn = buy.cloneNode(true)
    btn.onclick = scroll_to_passes
    node.replaceWith(btn)
  })

  shadow.querySelectorAll('[data-scroll-to-passes]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault()
      scroll_to_passes()
    })
  })

  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)
  position_calendar_events()
  setup_calendar_event_modal()
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

    if (hash === '#calendar' || hash === '#events') {
      open_calendar_details()
      scroll_to_target('#calendar')
      return
    }

    if (
      hash === '#swap' ||
      hash === '#swap-new' ||
      hash === '#swap-room'
    ) {
      scroll_to_target(
        hash === '#swap-room'
          ? '#swap-room'
          : '#swap-new'
      )
    }
  }

  function open_calendar_details() {
    const details = shadow.querySelector('[data-calendar-details]')

    if (details) {
      details.open = true
    }
  }

  function scroll_to_passes() {
    history.replaceState(null, '', '#passes')
    scroll_to_target('#passes')
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

},{"../data/swap-room-items.json":1,"get_theme":4}],4:[function(require,module,exports){
module.exports = get_theme

function get_theme() {
  return `
    :host{
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      --pale-blue: #6fa8dc;
      --pale-pink: #f4a6c0;
      --pale-green: #d1ece6;
      --sand: #f4efe6;
      --cream: #fbfaf6;
      --beige: #e9e6e1;
      --heather-dark: #8f64a4;

      --summer-strawberry: #e85f73;

      --ink: #2f4f4f;
      --muted: #6f8079;
      --line-soft: rgba(47, 79, 79, 0.1);
      --shadow-card: 0 16px 44px rgba(47, 79, 79, 0.075);
    }

    *{
      box-sizing: border-box;
    }

    [hidden]{
      display: none !important;
    }

    .page{
      overflow-x: hidden;
      background: var(--cream);
      color: var(--ink);
      line-height: 1.7;
    }

    h1, h2, h3, p{
      margin-top: 0;
    }

    h1{
      max-width: 720px;
      margin: 0 0 1.25rem;
      color: var(--cream);
      font-size: clamp(2.35rem, 5vw, 4.6rem);
      font-weight: 750;
      line-height: 0.98;
      letter-spacing: -0.06em;
    }

    h2{
      margin: 0 0 1.5rem;
      font-size: clamp(2rem, 4vw, 3.4rem);
      line-height: 1.05;
      letter-spacing: -0.045em;
    }

    h3{
      margin: 0 0 0.55rem;
      color: var(--ink);
      font-size: 1.22rem;
      line-height: 1.18;
      letter-spacing: -0.02em;
    }

    p{
      margin-bottom: 1.15rem;
      font-size: 1.08rem;
      line-height: 1.72;
    }

    a{
      color: var(--heather-dark);
      text-underline-offset: 0.18em;
    }

    .eyebrow{
      margin-bottom: 0.9rem;
      color: rgba(255, 255, 255, 0.86);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .eyebrow.dark{
      color: var(--heather-dark);
    }

    button, .button{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      padding: 1rem 2.1rem;
      border: none;
      border-radius: 999px;
      background: var(--pale-pink);
      box-shadow: 0 14px 35px rgba(143, 100, 164, 0.22);
      color: white;
      cursor: pointer;
      font: inherit;
      font-size: 1rem;
      font-weight: 800;
      line-height: 1.1;
      text-decoration: none;
      transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }

    button:hover, .button:hover{
      background: var(--heather-dark);
      transform: translateY(-1px);
    }

    button:focus-visible, .button:focus-visible, a:focus-visible{
      outline: 3px solid rgba(143, 100, 164, 0.4);
      outline-offset: 3px;
    }

    .hero-actions{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.85rem;
    }

    .hero-actions button, .hero-actions .button{
      margin-right: 0;
    }

    .wave{
      display: block;
      width: 100%;
      height: 118px;
      margin: -1px 0;
      line-height: 0;
    }

    .wave svg{
      display: block;
      width: 100%;
      height: 100%;
    }

    .section{
      padding: 5rem 1.5rem;
    }

    .light{
      background: var(--sand);
    }

    .soft{
      background: var(--pale-green);
    }

    .content{
      max-width: 960px;
      margin: 0 auto;
      letter-spacing: 0.1px;
    }

    .content p + p{
      margin-top: -0.35rem;
    }

    .content-wide{
      max-width: 1320px;
      margin: 0 auto;
    }

    .content-xl{
      max-width: 1480px;
      margin: 0 auto;
    }

    .content-split{
      display: grid;
      grid-template-columns: 0.85fr 1.15fr;
      align-items: start;
      gap: 4rem;
      max-width: 1180px;
    }

    .center{
      text-align: center;
    }

    .center p{
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
    }

    .section-intro{
      max-width: 720px;
      margin: 0 auto 2.2rem;
      font-size: 1.08rem;
      line-height: 1.62;
    }

    .photo{
      display: block;
      width: 100%;
      max-width: 820px;
      height: 560px;
      margin: 2rem auto;
      border: 14px solid rgba(255, 255, 255, 0.72);
      border-radius: 28px;
      background: white;
      box-shadow: 0 24px 70px rgba(47, 79, 79, 0.12);
      object-fit: cover;
      object-position: center 30%;
    }

    .swap-section .photo{
      width: auto;
      object-fit: contain;
    }

    .photo-strip{
      padding: 0 1.5rem 4rem;
      background: var(--beige);
    }

    .photo-strip .photo{
      margin: 0 auto;
      border-color: var(--cream);
    }

    /* Hero */

    .hero{
      padding: 3rem 1.5rem 1rem;
      background: var(--pale-blue);
      text-align: left;
    }

    .hero-inner{
      display: grid;
      grid-template-columns: minmax(0, 680px) minmax(320px, 540px);
      align-items: center;
      justify-content: center;
      gap: 4rem;
      max-width: 1320px;
      margin: 0 auto;
    }

    .hero-copy{
      padding: 2rem 0 4rem;
    }

    .logo img{
      height: 340px;
      margin-bottom: 2rem;
      filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.08));
    }

    .hero .logo img{
      opacity: 0.96;
      filter:
        brightness(0)
        invert(1)
        drop-shadow(0 2px 10px rgba(0, 0, 0, 0.08));
    }

    .hero-subtitle{
      max-width: 600px;
      margin-bottom: 1rem;
      color: var(--cream);
      font-size: clamp(1.18rem, 2vw, 1.5rem);
      line-height: 1.45;
    }

    .hero-photo{
      width: 100%;
      max-width: 540px;
      margin: 0 auto;
      padding: 16px;
      overflow: hidden;
      border: 14px solid rgba(255, 255, 255, 0.75);
      border-radius: 44px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 28px 80px rgba(47, 79, 79, 0.16);
      transform: rotate(-1deg);
    }

    .hero-photo .photo{
      display: block;
      width: 100%;
      max-width: none;
      height: 560px;
      margin: 0;
      border: none;
      border-radius: 28px;
      box-shadow: none;
      object-fit: cover;
    }

    .hero-swap-button{
      border: 2px solid rgba(255, 255, 255, 0.78);
      background: rgba(255, 255, 255, 0.94);
      box-shadow: none;
      color: var(--ink);
    }

    .hero-swap-button:hover{
      border-color: white;
      background: white;
      color: var(--heather-dark);
    }

    .hero-pass-button{
      border: 2px solid var(--pale-pink);
    }

    /* Swap Room preview */

    .swap-preview-section{
      background: var(--cream);
    }

    .swap-preview-heading{
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.8fr);
      align-items: end;
      justify-content: space-between;
      gap: 3rem;
      margin-bottom: 2.25rem;
    }

    .swap-preview-heading h2{
      max-width: 650px;
      margin-bottom: 0;
    }

    .swap-preview-intro{
      max-width: 620px;
      margin: 0;
      color: var(--muted);
      font-size: 1.08rem;
      line-height: 1.62;
    }

    .swap-items-scroll{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 1.15rem;
    }

    .swap-item-card{
      overflow: hidden;
      border: 1px solid var(--line-soft);
      border-radius: 22px;
      background: white;
      box-shadow: var(--shadow-card);
    }

    .swap-item-image-wrap{
      aspect-ratio: 4 / 5;
      overflow: hidden;
      background: var(--sand);
    }

    .swap-item-image{
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swap-item-copy{
      padding: 1rem;
    }

    .swap-item-copy h3{
      margin-bottom: 0.35rem;
      font-size: 1rem;
    }

    .swap-item-details, .swap-item-added{
      max-width: none;
      margin: 0;
      font-size: 0.86rem;
      line-height: 1.45;
    }

    .swap-item-details{
      color: var(--ink);
    }

    .swap-item-added{
      margin-top: 0.35rem;
      color: var(--muted);
    }

    .swap-preview-empty{
      display: grid;
      grid-template-columns: minmax(300px, 1.2fr) minmax(280px, 0.8fr);
      align-items: stretch;
      overflow: hidden;
      border: 1px solid var(--line-soft);
      border-radius: 30px;
      background: var(--sand);
      box-shadow: var(--shadow-card);
    }

    .swap-preview-room-photo{
      display: block;
      width: 100%;
      height: 100%;
      min-height: 430px;
      object-fit: cover;
      object-position: center;
    }

    .swap-preview-empty-copy{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2.5rem;
    }

    .swap-preview-kicker{
      margin-bottom: 0.8rem;
      color: var(--heather-dark);
      font-size: 0.72rem;
      font-weight: 850;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .swap-preview-empty-copy h3{
      margin-bottom: 0.9rem;
      font-size: 1.7rem;
    }

    .swap-preview-empty-copy p{
      max-width: 520px;
      margin: 0;
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.6;
    }

    .swap-preview-footer{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      margin-top: 1.5rem;
      padding-top: 1.35rem;
      border-top: 1px solid var(--line-soft);
    }

    .swap-preview-footer p{
      max-width: 720px;
      margin: 0;
      color: var(--muted);
      font-size: 0.94rem;
    }

    .swap-preview-link{
      flex: 0 0 auto;
      margin: 0;
      padding: 0.75rem 1rem;
      border: 1px solid rgba(143, 100, 164, 0.22);
      background: white;
      box-shadow: none;
      color: var(--heather-dark);
      font-size: 0.9rem;
    }

    .swap-preview-link:hover{
      background: var(--heather-dark);
      color: white;
    }

    /* Location */

    .location-section{
      background: var(--sand);
    }

    .location-section h2{
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
    }

    .location-intro{
      max-width: 760px;
      margin: 0 auto 1rem;
      font-size: 1.18rem;
    }

    .location-tagline{
      max-width: 720px;
      margin: 0 auto 3rem;
      font-size: 1.18rem;
      font-weight: 500;
    }

    .location-visuals{
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
      align-items: center;
      gap: 2rem;
      max-width: 1040px;
      margin: 0 auto 2.25rem;
    }

    .location-card{
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      border: 10px solid rgba(255, 255, 255, 0.82);
      border-radius: 28px;
      background: #f8f2e8;
      box-shadow: 0 20px 55px rgba(47, 79, 79, 0.09);
    }

    .location-card img{
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .building-card, .map-card{
      padding: 0;
      background: #f8f2e8;
    }

    .map-card{
      aspect-ratio: 4 / 5;
    }

    .map-card img{
      object-fit: contain;
      object-position: center;
    }

    .location-line{
      max-width: 720px;
      margin: 0 auto;
      color: var(--muted);
      font-size: 1.12rem;
    }

    /* Purpose and photo sections */

    .small-purpose{
      background: var(--cream);
    }

    .photo-story{
      padding: 1rem 1.5rem 3.5rem;
      background: var(--cream);
    }

    .photo-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .story-photo{
      display: block;
      width: 100%;
      height: 420px;
      border: 8px solid rgba(255, 255, 255, 0.7);
      border-radius: 26px;
      box-shadow: 0 18px 50px rgba(47, 79, 79, 0.1);
      object-fit: cover;
      transition: transform 0.25s ease;
    }

    .story-photo:hover{
      transform: translateY(-3px);
    }

    .relief-section, .swap-section{
      background: var(--cream);
    }

    .relief-section p:not(.eyebrow){
      max-width: 820px;
      font-size: 1.2rem;
    }

    /* Included cards */

    .included-section{
      background: var(--sand);
    }

    .included-intro{
      max-width: 700px;
      margin: 0 auto 2rem;
    }

    .included-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 2rem;
    }

    .included-card{
      padding: 1.65rem;
      border: 1px solid rgba(47, 79, 79, 0.1);
      border-radius: 24px;
      background: white;
      box-shadow: var(--shadow-card);
      text-align: left;
    }

    .included-card h3{
      margin-bottom: 0.65rem;
      font-size: 1.12rem;
    }

    .included-card p{
      margin: 0;
      color: var(--muted);
      font-size: 0.98rem;
      line-height: 1.58;
    }

    /* Weekly calendar */

    .weekly-calendar-section{
      position: relative;
      padding-right: 1rem;
      padding-left: 1rem;
      background: var(--pale-green);
    }

    .weekly-calendar-section .content-wide{
      max-width: 1600px;
    }

    .weekly-calendar-section h2{
      max-width: 820px;
      margin-left: auto;
      margin-right: auto;
    }

    .weekly-calendar-section .section-intro{
      max-width: 790px;
      margin-bottom: 1.5rem;
    }

    .calendar-details{
      max-width: 1600px;
      margin: 2rem auto 0;
      border: 1px solid rgba(47, 79, 79, 0.1);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.58);
      text-align: left;
    }

    .calendar-details summary{
      display: flex;
      min-height: 58px;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.3rem;
      color: var(--ink);
      cursor: pointer;
      font-size: 1rem;
      font-weight: 850;
      list-style: none;
    }

    .calendar-details summary::-webkit-details-marker{
      display: none;
    }

    .calendar-details summary::after{
      content: "+";
      display: grid;
      width: 32px;
      height: 32px;
      flex: 0 0 32px;
      place-items: center;
      border-radius: 50%;
      background: var(--cream);
      color: var(--heather-dark);
      font-size: 1.35rem;
      line-height: 1;
    }

    .calendar-details[open] summary::after{
      content: "−";
    }

    .calendar-details-body{
      padding: 0 1rem 0.25rem;
      border-top: 1px solid rgba(47, 79, 79, 0.08);
    }

    .calendar-legend{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.75rem 1.35rem;
      margin: 1.8rem auto 2.5rem;
      color: var(--muted);
    }

    .calendar-key{
      display: inline-flex;
      align-items: center;
      gap: 0.48rem;
      font-size: 0.86rem;
      font-weight: 750;
      line-height: 1.3;
    }

    .calendar-key-dot{
      width: 11px;
      height: 11px;
      flex: 0 0 11px;
      border-radius: 50%;
    }

    .public-dot{
      background: var(--pale-blue);
    }

    .member-dot{
      background: var(--pale-pink);
    }

    .flexible-dot{
      border: 1px solid rgba(47, 79, 79, 0.16);
      background: var(--pale-green);
    }

    .calendar-scroll{
      width: 100%;
      padding-bottom: 0.8rem;
      overflow-x: auto;
      scrollbar-width: thin;
      scrollbar-color:
        rgba(47, 79, 79, 0.24)
        rgba(47, 79, 79, 0.06);
      -webkit-overflow-scrolling: touch;
    }

    .calendar-scroll:focus-visible{
      outline: 3px solid rgba(143, 100, 164, 0.3);
      outline-offset: 5px;
      border-radius: 24px;
    }

    .calendar-scroll::-webkit-scrollbar{
      height: 8px;
    }

    .calendar-scroll::-webkit-scrollbar-track{
      border-radius: 999px;
      background: rgba(47, 79, 79, 0.06);
    }

    .calendar-scroll::-webkit-scrollbar-thumb{
      border-radius: 999px;
      background: rgba(47, 79, 79, 0.24);
    }

    .week-calendar{
      width: 100%;
      min-width: 1435px;
      max-width: 1600px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid rgba(47, 79, 79, 0.14);
      border-radius: 24px;
      background: white;
      box-shadow: 0 16px 42px rgba(47, 79, 79, 0.07);
      text-align: left;
    }

    .calendar-header-row, .calendar-body-row{
      display: grid;
      grid-template-columns: repeat(7, minmax(205px, 1fr));
    }

    .calendar-header-row{
      border-bottom: 1px solid rgba(47, 79, 79, 0.13);
      background: var(--sand);
    }

    .calendar-day-heading{
      padding: 1rem 1.1rem;
      border-right: 1px solid rgba(47, 79, 79, 0.12);
      color: var(--ink);
      font-size: 0.78rem;
      font-weight: 850;
      line-height: 1;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .calendar-day-heading:last-child{
      border-right: none;
    }

    .public-heading{
      background: rgba(111, 168, 220, 0.15);
      color: #456f92;
    }

    .weekend-heading{
      background: rgba(209, 236, 230, 0.34);
    }

    .calendar-body-row{
      min-height: 0;
      align-items: stretch;
    }

    .calendar-day-cell{
      position: relative;
      isolation: isolate;
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: repeat(60, 11px);
      grid-auto-rows: 11px;
      align-content: start;
      min-height: 660px;
      padding: 0.65rem;
      border-right: 1px solid rgba(47, 79, 79, 0.11);
      background-color: rgba(255, 255, 255, 0.94);
      background-image:
        repeating-linear-gradient(
          to bottom,
          transparent 0,
          transparent 43px,
          rgba(47, 79, 79, 0.07) 43px,
          rgba(47, 79, 79, 0.07) 44px
        );
    }

    .calendar-day-cell:last-child{
      border-right: none;
    }

    .public-cell{
      background-color: rgba(111, 168, 220, 0.035);
    }

    .weekend-cell{
      background-color: rgba(244, 239, 230, 0.42);
    }

    /*
     * Every event occupies the same grid column.
     * The full-day access event sits behind timed social events.
     */

    .week-event{
      position: relative;
      z-index: 1;
      display: block;
      grid-column: 1;
      grid-row: var(--row-start, 1) / var(--row-end, 2);
      align-self: stretch;
      width: auto;
      min-width: 0;
      max-width: none;
      min-height: 0;
      margin: 1px 0;
      padding: 0.34rem 0.46rem;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: none;
      color: var(--ink);
      cursor: pointer;
      font: inherit;
      text-align: left;
      transform: none;
      appearance: none;
      -webkit-appearance: none;
    }

    .week-event:hover{
      box-shadow: none;
      transform: none;
      filter: brightness(0.98);
    }

    .week-event:focus-visible{
      z-index: 4;
      outline: 3px solid rgba(143, 100, 164, 0.44);
      outline-offset: 2px;
    }

    .member-event{
      border: 1px solid rgba(244, 166, 192, 0.76);
      background: rgba(244, 166, 192, 0.94);
    }

    .member-event:hover{
      background: var(--pale-pink);
    }

    .public-event{
      border: 1px solid rgba(77, 128, 173, 0.35);
      background: var(--pale-blue);
      color: white;
    }

    .public-event:hover{
      background: #639ed3;
    }

    .flexible-event{
      border: 1px dashed rgba(47, 79, 79, 0.18);
      background: rgba(209, 236, 230, 0.28);
    }

    .flexible-event:hover{
      background: rgba(209, 236, 230, 0.42);
    }

    /* Full-day flexible-access layer */

    .availability-event{
      z-index: 0;
      grid-column: 1;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 0;
      padding: 0.7rem 0.75rem;
      border: 1px dashed rgba(47, 79, 79, 0.16);
      border-radius: 14px;
      background: rgba(209, 236, 230, 0.24);
      box-shadow: none;
    }

    .availability-event:hover{
      background: rgba(209, 236, 230, 0.38);
      box-shadow: none;
      filter: none;
    }

    .availability-event .week-event-time{
      margin-bottom: 0.12rem;
      color: var(--muted);
      font-size: 0.61rem;
    }

    .availability-event .week-event-title{
      color: var(--ink);
      font-size: 0.72rem;
      line-height: 1.1;
    }

    /* Timed event layer */

    .social-event{
      z-index: 2;
      grid-column: 1;
      width: auto;
      margin: 2px 0.42rem;
      box-shadow: 0 6px 18px rgba(47, 79, 79, 0.14);
    }

    .social-event:hover{
      box-shadow: 0 8px 22px rgba(47, 79, 79, 0.18);
    }

    .weekend-cell .availability-event{
      background: rgba(209, 236, 230, 0.54);
    }

    .weekend-cell .availability-event:hover{
      background: rgba(209, 236, 230, 0.72);
    }

    .week-event-time{
      display: block;
      margin-bottom: 0.1rem;
      color: var(--heather-dark);
      font-size: 0.62rem;
      font-weight: 850;
      line-height: 1.05;
      letter-spacing: 0.01em;
    }

    .week-event-extra{
      display: block;
      margin-top: 0.12rem;
      font-size: 0.52rem;
      font-weight: 700;
      line-height: 1.08;
      opacity: 0.82;
    }

    .week-event-extra + .week-event-extra{
      margin-top: 0.05rem;
    }

    .week-event-title{
      display: block;
      margin: 0;
      color: var(--ink);
      font-size: 0.76rem;
      font-weight: 800;
      line-height: 1.03;
      letter-spacing: -0.01em;
      overflow-wrap: break-word;
    }

    .public-event .week-event-time,
    .public-event .week-event-title,
    .public-event .week-event-extra{
      color: white;
    }

    .calendar-summary{
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 1.5rem;
      max-width: 1000px;
      margin: 2rem auto 2rem;
      padding: 1.25rem 1.35rem;
      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 20px;
      background: var(--cream);
      text-align: left;
    }

    .calendar-summary p{
      max-width: none;
      margin: 0;
      color: var(--muted);
      font-size: 0.96rem;
      line-height: 1.55;
    }

    .calendar-summary strong{
      color: var(--ink);
    }

    .calendar-pass-link{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0.7rem 1rem;
      border: 1px solid rgba(143, 100, 164, 0.2);
      border-radius: 999px;
      background: white;
      color: var(--heather-dark);
      font-size: 0.88rem;
      font-weight: 850;
      line-height: 1.25;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
    }

    .calendar-pass-link:hover{
      background: var(--heather-dark);
      color: white;
      transform: translateY(-1px);
    }

    /* Event modal */

    .event-modal{
      position: fixed;
      z-index: 10000;
      inset: 0;
      display: grid;
      place-items: center;
      padding: 1rem;
      text-align: left;
    }

    .event-modal-backdrop{
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      max-width: none;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: rgba(30, 48, 48, 0.6);
      box-shadow: none;
      cursor: default;
      transform: none;
      appearance: none;
      -webkit-appearance: none;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    .event-modal-backdrop:hover,
    .event-modal-backdrop:focus{
      background: rgba(30, 48, 48, 0.6);
      box-shadow: none;
      transform: none;
    }

    .event-modal-panel{
      position: relative;
      z-index: 1;
      width: min(520px, 100%);
      max-height: calc(100dvh - 2rem);
      padding: 1.75rem;
      overflow-y: auto;
      overscroll-behavior: contain;
      border: 1px solid rgba(47, 79, 79, 0.1);
      border-radius: 26px;
      background: var(--cream);
      box-shadow: 0 30px 90px rgba(22, 42, 42, 0.34);
      color: var(--ink);
      text-align: left;
      scrollbar-width: thin;
    }

    .event-modal-close{
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      display: grid;
      width: 40px;
      height: 40px;
      min-width: 40px;
      max-width: 40px;
      margin: 0;
      padding: 0;
      place-items: center;
      border: 0;
      border-radius: 50%;
      background: rgba(47, 79, 79, 0.07);
      box-shadow: none;
      color: var(--ink);
      cursor: pointer;
      font-size: 1.55rem;
      font-weight: 500;
      line-height: 1;
      transform: none;
      appearance: none;
      -webkit-appearance: none;
    }

    .event-modal-close:hover{
      background: rgba(47, 79, 79, 0.14);
      box-shadow: none;
      color: var(--ink);
      transform: none;
    }

    .event-modal-close:focus-visible{
      outline: 3px solid rgba(143, 100, 164, 0.4);
      outline-offset: 2px;
    }

    .event-modal-time{
      max-width: none;
      margin: 0 3.25rem 0.35rem 0;
      color: var(--heather-dark);
      font-size: 0.86rem;
      font-weight: 850;
      line-height: 1.3;
    }

    .event-modal-panel h3{
      margin: 0 3.25rem 0.65rem 0;
      color: var(--ink);
      font-size: 1.55rem;
      line-height: 1.12;
    }

    .event-modal-access{
      display: flex;
      width: auto;
      max-width: none;
      align-items: flex-start;
      gap: 0.5rem;
      margin: 0 0 1.15rem;
      padding: 0;
      border-radius: 0;
      background: transparent;
      color: var(--muted);
      font-size: 0.8rem;
      font-weight: 750;
      line-height: 1.4;
    }

    .event-modal-access::before{
      content: "";
      width: 8px;
      height: 8px;
      flex: 0 0 8px;
      align-self: center;
      margin-top: 0;
      border-radius: 50%;
      background: var(--pale-pink);
    }

    .event-modal-description{
      max-width: none;
      margin: 0;
      color: var(--muted);
      font-size: 0.96rem;
      line-height: 1.5;
    }

    .event-modal-actions{
      display: grid;
      gap: 0.7rem;
      margin-top: 1rem;
    }

    .event-modal-actions[hidden]{
      display: none;
    }

    .event-modal-actions .button{
      display: flex;
      width: 100%;
      max-width: none;
      min-height: 0;
      margin: 0;
      padding: 0.82rem 1rem;
      font-size: 0.92rem;
      line-height: 1.2;
      text-align: center;
    }

    .event-modal-pass{
      border: 2px solid var(--pale-pink);
      background: transparent;
      box-shadow: none;
      color: var(--heather-dark);
    }

    .event-modal-pass:hover{
      background: var(--pale-pink);
      color: white;
    }

    /* Reviews and press */

    .reviews-section{
      background: var(--pale-blue);
      color: white;
    }

    .reviews-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 2rem;
    }

    .review-card{
      padding: 1.65rem;
      border: 1px solid rgba(47, 79, 79, 0.1);
      border-radius: 26px;
      background: var(--sand);
      box-shadow: var(--shadow-card);
      text-align: left;
    }

    .review-card p{
      max-width: none;
      margin: 0 0 1rem;
      color: var(--ink);
      font-size: 1rem;
      line-height: 1.6;
    }

    .review-card span{
      display: block;
      color: var(--muted);
      font-size: 0.82rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .press-mentions{
      max-width: 920px;
      margin: 3.5rem auto 0;
      padding-top: 2.75rem;
      border-top: 1px solid rgba(255, 255, 255, 0.32);
    }

    .press-eyebrow{
      margin-bottom: 0.7rem;
      color: rgba(255, 255, 255, 0.88);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .press-intro{
      max-width: 690px;
      margin: 0 auto 1.75rem;
      color: white;
      font-size: 1.08rem;
      line-height: 1.6;
    }

    .press-links{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .press-link{
      display: flex;
      min-height: 190px;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.65rem;
      border: 1px solid rgba(47, 79, 79, 0.1);
      border-radius: 24px;
      background: var(--sand);
      box-shadow: var(--shadow-card);
      color: var(--ink);
      text-align: left;
      text-decoration: none;
      transition:
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .press-link:hover{
      box-shadow: 0 20px 52px rgba(47, 79, 79, 0.14);
      transform: translateY(-2px);
    }

    .press-publication{
      display: block;
      margin-bottom: 0.8rem;
      color: var(--heather-dark);
      font-size: 0.76rem;
      font-weight: 850;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .press-title{
      display: block;
      margin-bottom: 1.25rem;
      color: var(--ink);
      font-size: 1.18rem;
      font-weight: 750;
      line-height: 1.35;
    }

    .press-read{
      display: block;
      margin-top: auto;
      color: var(--heather-dark);
      font-size: 0.94rem;
      font-weight: 800;
    }

    /* Playdate */

    .playdate-section {
      background: #d1ece6;
    }

    .playdate-card {
      max-width: 860px;
      margin: 0 auto;
      padding: 48px;
      border-radius: 28px;
      background: #fbfaf6;
      text-align: center;
    }

    .playdate-copy {
      max-width: 680px;
      margin: 0 auto;
    }

    .playdate-copy h2 {
      margin-bottom: 18px;
    }

    .playdate-lead {
      font-size: 1.25rem;
      margin-bottom: 18px;
    }

    .playdate-price {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      margin: 28px 0 20px;
    }

    .playdate-price strong {
      font-size: 3rem;
      line-height: 1;
    }

    .playdate-price span {
      font-size: 0.95rem;
    }

    .playdate-benefits {
      max-width: 430px;
      margin: 24px auto;
      text-align: left;
    }

    .playdate-note {
      margin: 22px auto;
      max-width: 520px;
      font-weight: 600;
    }

    .playdate-button {
      display: inline-block;
      margin-top: 8px;
    }

    .playdate-pricing-callout {
      max-width: 900px;
      margin: 0 auto 28px;
      padding: 18px 22px;
      border-radius: 16px;
      background: #fbfaf6;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      text-align: left;
    }

    .playdate-pricing-callout div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .playdate-pricing-callout a {
      white-space: nowrap;
      font-weight: 600;
    }

    @media (max-width: 700px) {
      .playdate-pricing-callout {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    @media (max-width: 700px) {
      .playdate-card {
        padding: 32px 22px;
        border-radius: 20px;
      }

      .playdate-price strong {
        font-size: 2.5rem;
      }
    }

    /* Summer pass */

    .pricing-section{
      background: var(--pale-green);
    }

    .pricing-section .section-intro{
      max-width: 660px;
      margin: 0 auto 2rem;
      color: var(--ink);
      font-size: 1.05rem;
      line-height: 1.62;
    }

    .price-card{
      position: relative;
      padding: 1.8rem;
      border: 1px solid var(--line-soft);
      border-radius: 26px;
      background: rgba(255, 255, 255, 0.94);
      box-shadow: var(--shadow-card);
      font-size: 1rem;
      text-align: left;
    }

    .price-card h3{
      margin: 0.5rem 0 0.75rem;
      font-size: 1.32rem;
    }

    .featured{
      border: 3px solid var(--pale-pink);
      box-shadow: 0 22px 58px rgba(244, 166, 192, 0.18);
    }

    .summer-button{
      width: 100%;
      margin: 0.75rem 0 0;
      background: var(--summer-strawberry);
      box-shadow: 0 15px 38px rgba(232, 95, 115, 0.24);
    }

    .summer-button:hover{
      background: var(--heather-dark);
    }

    .membership-total{
      margin: 1rem 0 0;
      padding: 1.25rem;
      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 22px;
      background: var(--cream);
      text-align: center;
    }

    .membership-total-label{
      display: inline-block;
      margin: 0;
      color: var(--muted);
      font-size: 0.78rem;
      font-weight: 850;
      line-height: 1.1;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .membership-total-price{
      display: block;
      margin-top: 0.45rem;
      color: var(--ink);
      font-size: 3.4rem;
      font-weight: 850;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .membership-weekly-price{
      margin-top: 0.45rem;
      color: var(--heather-dark);
      font-size: 1.22rem;
      font-weight: 850;
      line-height: 1.2;
    }

    .membership-cancel-note{
      max-width: none;
      margin: 1rem auto 0;
      padding: 0.85rem 1rem;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.72);
      color: var(--ink);
      font-size: 0.96rem;
      font-weight: 750;
      line-height: 1.45;
    }

    .membership-benefits-list{
      margin-top: 1.25rem;
      color: var(--muted);
    }

    .label{
      display: inline-block;
      margin-bottom: 1rem;
      padding: 0.32rem 0.68rem;
      border-radius: 999px;
      background: rgba(244, 166, 192, 0.72);
      color: white;
      font-size: 0.68rem;
      font-weight: 850;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      text-align: center;
    }

    .popular{
      background: rgba(247, 216, 121, 0.72);
      color: var(--heather-dark);
    }

    .price-card ul{
      margin: 1.15rem 0 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    .price-card li{
      position: relative;
      margin-bottom: 0.65rem;
      padding-left: 1.4rem;
      color: var(--ink);
      font-size: 0.98rem;
      line-height: 1.5;
    }

    .price-card li::before{
      content: "•";
      position: absolute;
      top: 0;
      left: 0;
      color: var(--summer-strawberry);
      font-weight: bold;
    }

    .small{
      padding: 0;
      color: var(--muted);
      font-size: 0.98rem;
      line-height: 1.55;
      text-align: left;
    }

    .small-note{
      margin: 0.9rem 0 0;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.45;
    }

    #passes, #calendar, #swap-new, #swap-room{
      scroll-margin-top: 2rem;
    }

    /* Pass options */

    .pass-options-grid{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
      align-items: stretch;
      margin-top: 36px;
    }

    .visit-pass-card{
      display: flex;
      height: 100%;
      flex-direction: column;
      text-align: left;
    }

    .visit-pass-card .button{
      width: 100%;
      margin-top: auto;
      text-align: center;
    }

    .visit-pass-card .membership-total{
      text-align: center;
    }

    /* Clean photo gallery */

    .photo-grid-clean{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      margin-top: 10px;
    }

    .photo-grid-clean .story-photo{
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 3.5;
      border: 8px solid rgba(255, 255, 255, 0.7);
      border-radius: 22px;
      background: white;
      box-shadow: 0 12px 34px rgba(50, 61, 72, 0.08);
      object-fit: cover;
      object-position: center;
    }

    /* FAQ */

    .faq-list{
      display: grid;
      gap: 1rem;
      max-width: 850px;
      margin: 2.4rem auto 0;
      text-align: left;
    }

    .faq-item{
      padding: 1.45rem 1.6rem;
      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 22px;
      background: var(--cream);
    }

    .faq-item p{
      margin: 0;
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.58;
    }

    .day-section{
      background: var(--beige);
    }

    /* Footer */

    .footer{
      padding: 4rem 1.5rem;
      background: var(--pale-blue);
      color: white;
    }

    .footer p{
      margin-bottom: 0.8rem;
      font-size: 0.95rem;
      opacity: 0.88;
    }

    .footer a{
      font-weight: 800;
    }

    .footer-social{
      margin-top: 1.4rem;
    }

    .footer-logo{
      display: block;
      width: auto;
      max-width: 260px;
      height: 88px;
      margin: -14px auto 1.2rem;
      object-fit: contain;
    }

    @media (max-width: 1000px) {
      .hero-inner, .content-split{
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .swap-preview-heading, .swap-preview-empty{
        grid-template-columns: 1fr;
      }

      .swap-preview-heading{
        gap: 1rem;
      }

      .swap-preview-room-photo{
        min-height: 0;
        aspect-ratio: 16 / 9;
      }

      .hero{
        padding: 2.5rem 1.25rem 0;
        text-align: center;
      }

      .hero-copy{
        padding: 1rem 0 2rem;
      }

      h1, .hero-subtitle{
        margin-left: auto;
        margin-right: auto;
      }

      .hero-actions{
        justify-content: center;
      }

      .photo-grid{
        grid-template-columns: repeat(2, 1fr);
      }

      .content-split{
        text-align: center;
      }

      .content-split > div, .content-split p{
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media (max-width: 980px) {
      .pass-options-grid{
        grid-template-columns: 1fr;
      }

      .visit-pass-card{
        max-width: 680px;
        width: 100%;
        margin-inline: auto;
      }

      .photo-grid-clean{
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 900px) {
      .included-grid, .reviews-grid{
        grid-template-columns: 1fr;
      }

      .location-visuals{
        grid-template-columns: 1fr;
        max-width: 620px;
      }

      .location-card{
        min-height: auto;
        aspect-ratio: 4 / 3;
      }

      .map-card{
        aspect-ratio: 4 / 5;
      }

      .calendar-summary{
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .calendar-pass-link{
        justify-self: start;
      }

      .footer-logo{
        max-width: 240px;
        height: 78px;
        margin: -12px auto 1.3rem;
      }
    }

    @media (max-width: 768px) {
      h1{
        font-size: clamp(2.15rem, 11vw, 3.2rem);
        line-height: 1.02;
        letter-spacing: -0.055em;
      }

      h2{
        font-size: clamp(1.8rem, 8vw, 2.45rem);
        line-height: 1.08;
      }

      h3{
        font-size: 1.12rem;
      }

      p{
        font-size: 1rem;
        line-height: 1.62;
      }

      .section, .hero, .photo-story{
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .section{
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
      }

      .hero-inner{
        gap: 1.25rem;
      }

      .logo img{
        display: block;
        width: 240px;
        max-width: 78vw;
        height: auto;
        margin: 0 auto 1.8rem;
      }

      .hero-subtitle{
        font-size: 1.12rem;
        line-height: 1.5;
      }

      .hero-photo{
        max-width: 100%;
        padding: 10px;
        border-width: 9px;
        border-radius: 30px;
        transform: none;
      }

      .hero-photo .photo{
        aspect-ratio: 4 / 5;
        height: auto;
        border-radius: 22px;
        object-fit: cover;
      }

      .photo, .story-photo{
        width: 100%;
        max-width: 100%;
        height: auto;
      }

      .photo{
        aspect-ratio: 4 / 3;
        margin: 1rem auto;
        border-width: 9px;
      }

      .story-photo{
        border-width: 6px;
      }

      .photo-grid-clean .story-photo {
        aspect-ratio: 4 / 3.5;
      }

      .photo-grid{
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .included-card, .price-card, .faq-item, .review-card{
        padding: 1.35rem;
        border-radius: 22px;
      }

      .swap-preview-section{
        padding-right: 0;
        padding-left: 0;
      }

      .swap-preview-heading,
      .swap-preview-footer,
      .swap-preview-empty{
        margin-right: 1rem;
        margin-left: 1rem;
      }

      .swap-preview-heading{
        margin-bottom: 1.5rem;
      }

      .swap-preview-empty{
        border-radius: 24px;
      }

      .swap-preview-empty-copy{
        padding: 1.5rem;
      }

      .swap-preview-empty-copy h3{
        font-size: 1.4rem;
      }

      .swap-items-scroll{
        display: flex;
        gap: 0.9rem;
        padding: 0 1rem 0.5rem;
        overflow-x: auto;
        scroll-snap-type: x proximity;
        scrollbar-width: thin;
        -webkit-overflow-scrolling: touch;
      }

      .swap-item-card{
        width: min(68vw, 250px);
        flex: 0 0 min(68vw, 250px);
        scroll-snap-align: start;
      }

      .swap-preview-footer{
        align-items: stretch;
        flex-direction: column;
      }

      .swap-preview-link{
        width: 100%;
        max-width: none;
      }

      /* Calendar */

      .weekly-calendar-section{
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      }

      .calendar-legend{
        gap: 0.55rem 0.9rem;
        margin-bottom: 1.75rem;
      }

      .calendar-key{
        font-size: 0.78rem;
      }

      .calendar-details{
        margin-top: 1.5rem;
        border-radius: 20px;
      }

      .calendar-details summary{
        min-height: 54px;
        padding: 0.9rem 1rem;
        font-size: 0.94rem;
      }

      .calendar-details-body{
        padding-right: 0.35rem;
        padding-left: 0.35rem;
      }

      .week-calendar{
        min-width: 1435px;
      }

      .week-event{
        padding: 0.38rem 0.48rem;
      }

      .social-event{
        margin: 2px 0.4rem;
      }

      .availability-event{
        padding: 0.5rem;
      }

      .week-event-time{
        margin-bottom: 0.1rem;
        font-size: 0.62rem;
      }

      .week-event-title{
        font-size: 0.76rem;
        line-height: 1.04;
      }

      .week-event-extra{
        margin-top: 0.12rem;
        font-size: 0.52rem;
        line-height: 1.1;
      }

      .availability-event .week-event-time{
        font-size: 0.56rem;
      }

      .availability-event .week-event-title{
        font-size: 0.64rem;
      }

      /* Modal */

      .event-modal{
        padding: 0.75rem;
      }

      .event-modal-panel{
        width: min(520px, 100%);
        max-height: calc(100dvh - 1.5rem);
        padding: 1.4rem;
        border-radius: 22px;
      }

      .event-modal-panel h3{
        font-size: 1.4rem;
      }

      .event-modal-description{
        font-size: 0.93rem;
        line-height: 1.45;
      }

      .event-modal-actions .button{
        padding: 0.78rem 0.9rem;
        font-size: 0.88rem;
      }

      /* Press */

      .press-mentions{
        margin-top: 2.5rem;
        padding-top: 2.25rem;
        text-align: left;
      }

      .press-eyebrow, .press-intro{
        margin-left: 0;
        margin-right: 0;
        text-align: left;
      }

      .press-links{
        grid-template-columns: 1fr;
      }

      .press-link{
        min-height: 0;
        padding: 1.35rem;
        border-radius: 22px;
      }

      .press-title{
        font-size: 1.08rem;
      }

      /* Pricing */

      .reviews-section{
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .reviews-section .content-wide,
      .pricing-section .content-wide{
        max-width: 100%;
      }

      .reviews-section h2,
      .reviews-section p,
      .reviews-section .eyebrow,
      .pricing-section h2,
      .pricing-section p,
      .pricing-section .eyebrow{
        margin-left: 0;
        margin-right: 0;
        text-align: left;
      }

      .reviews-section .section-intro,
      .pricing-section .section-intro{
        max-width: none;
        margin-bottom: 1.5rem;
      }

      .reviews-grid{
        display: block;
        max-width: 100%;
        margin-top: 1.5rem;
      }

      .review-card{
        width: 100%;
        margin: 0 0 1rem;
        padding: 1.25rem;
        border-radius: 22px;
      }

      .review-card p{
        margin-bottom: 0.9rem;
        font-size: 0.96rem;
        line-height: 1.55;
      }

      .membership-total{
        padding: 1rem;
        border-radius: 20px;
      }

      .membership-total-label{
        display: block;
        margin-bottom: 0.45rem;
        text-align: center;
      }

      .membership-total-price{
        font-size: 2.45rem;
        text-align: center;
      }

      .membership-weekly-price{
        font-size: 1.08rem;
        text-align: center;
      }

      .membership-cancel-note{
        padding: 0.8rem 0.85rem;
        font-size: 0.92rem;
        line-height: 1.42;
        text-align: center;
      }

      .membership-benefits-list{
        margin-top: 1rem;
      }

      .membership-benefits-list li{
        font-size: 0.94rem;
        line-height: 1.45;
      }

      button, .button{
        display: flex;
        width: 100%;
        max-width: 340px;
        margin: 1rem auto;
      }

      .week-event{
        display: block;
        width: auto;
        max-width: none;
        margin-top: 1px;
        margin-bottom: 1px;
      }

      .availability-event{
        display: flex;
        width: 100%;
        margin: 0;
      }

      .social-event{
        width: auto;
        margin-top: 2px;
        margin-bottom: 2px;
      }

      .event-modal-backdrop{
        display: block;
        width: 100%;
        max-width: none;
        margin: 0;
      }

      .event-modal-close{
        display: grid;
        width: 42px;
        max-width: 42px;
        margin: 0;
      }

      .hero-actions{
        width: 100%;
        gap: 0;
      }

      .summer-button{
        max-width: none;
        margin: 0.85rem 0 0;
      }

      .wave{
        height: 72px;
        overflow: hidden;
      }

      .wave svg{
        width: 160%;
        margin-left: -30%;
      }

      .photo-strip{
        padding-right: 1rem;
        padding-bottom: 3rem;
        padding-left: 1rem;
        overflow: hidden;
      }

      .photo-strip .photo{
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
      }

      .footer{
        padding: 3.5rem 1rem;
        text-align: center;
      }

      .footer-logo{
        max-width: 240px;
        height: 78px;
        margin: -12px auto 1.4rem;
      }

      .footer p{
        max-width: 320px;
        margin-right: auto;
        margin-left: auto;
        overflow-wrap: anywhere;
        font-size: 0.95rem;
        line-height: 1.55;
        word-break: break-word;
      }
    }

    @media (max-width: 640px) {
      .pass-options-grid{
        gap: 16px;
        margin-top: 24px;
      }

      .photo-grid-clean{
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }

    @media (max-width: 480px) {
      h1{
        font-size: 2.25rem;
      }

      h2{
        font-size: 1.9rem;
      }

      .eyebrow{
        font-size: 0.68rem;
        letter-spacing: 0.12em;
      }

      .logo img{
        width: 220px;
        max-width: 82vw;
        height: auto;
        margin: 0 auto 1.5rem;
      }

      .photo, .story-photo, .hero-photo .photo{
        aspect-ratio: auto;
      }

      .location-tagline{
        margin-bottom: 2rem;
      }

      .location-visuals{
        gap: 1rem;
      }

      .location-card{
        border-width: 9px;
        border-radius: 22px;
      }

      .map-card{
        aspect-ratio: 4 / 5;
      }

      /* Calendar */

      .week-event{
        padding: 0.34rem 0.4rem;
        border-radius: 10px;
      }

      .availability-event{
        padding: 0.42rem;
        border-radius: 11px;
      }

      .week-event-time{
        margin-bottom: 0.14rem;
        font-size: 0.6rem;
      }

      .week-event-title{
        font-size: 0.72rem;
        line-height: 1.08;
      }

      .availability-event .week-event-time{
        font-size: 0.56rem;
      }

      .availability-event .week-event-title{
        font-size: 0.64rem;
      }

      /* Modal */

      .event-modal{
        align-items: end;
        padding: 0.65rem;
      }

      .event-modal-panel{
        width: 100%;
        max-height: calc(100dvh - 1.3rem);
        padding: 1.25rem 1.1rem 1.1rem;
        border-radius: 22px;
      }

      .event-modal-close{
        top: 0.65rem;
        right: 0.65rem;
        width: 38px;
        height: 38px;
        min-width: 38px;
        max-width: 38px;
        font-size: 1.45rem;
      }

      .event-modal-time{
        margin-right: 2.8rem;
        font-size: 0.8rem;
      }

      .event-modal-panel h3{
        margin-right: 2.8rem;
        font-size: 1.3rem;
      }

      .event-modal-access{
        margin-bottom: 0.85rem;
        font-size: 0.7rem;
      }

      .event-modal-description{
        font-size: 0.9rem;
        line-height: 1.42;
      }

      .event-modal-actions{
        gap: 0.6rem;
        margin-top: 0.85rem;
      }

      .event-modal-actions .button{
        padding: 0.72rem 0.8rem;
        font-size: 0.85rem;
      }

      /* Remaining sections */

      .membership-total-price{
        font-size: 2.35rem;
      }

      .wave{
        height: 54px;
      }

      .wave svg{
        width: 190%;
        margin-left: -45%;
      }

      .photo-strip{
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      }

      .review-card{
        padding: 1.1rem;
        border-radius: 20px;
      }

      .review-card p{
        font-size: 0.92rem;
        line-height: 1.52;
      }

      .review-card span{
        font-size: 0.74rem;
      }

      .membership-total{
        padding: 0.95rem;
        border-radius: 18px;
      }

      .membership-weekly-price{
        font-size: 1rem;
      }

      .membership-cancel-note{
        padding: 0.75rem;
        font-size: 0.88rem;
      }

      .membership-benefits-list li{
        font-size: 0.92rem;
      }

      .footer{
        padding: 3rem 1rem;
      }

      .footer-logo{
        max-width: 220px;
        height: 72px;
        margin: -10px auto 1.3rem;
      }

      .footer p{
        max-width: 300px;
        font-size: 0.92rem;
      }
    }

    @media (max-height: 700px) {
      .event-modal-panel{
        padding-top: 1.1rem;
        padding-bottom: 1.1rem;
      }

      .event-modal-description{
        line-height: 1.4;
      }

      .event-modal-actions{
        gap: 0.55rem;
        margin-top: 0.75rem;
      }

      .event-modal-actions .button{
        padding-top: 0.68rem;
        padding-bottom: 0.68rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after{
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
      }

      .story-photo:hover,
      .press-link:hover,
      .calendar-pass-link:hover,
      button:hover,
      .button:hover{
        transform: none;
      }
    }
  `
}
},{}]},{},[2]);
