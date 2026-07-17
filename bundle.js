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

const get_theme = require('get_theme')

const SUMMER_PASS_PAYMENT_URL = 'https://buy.stripe.com/4gM9ASbsmeDDeg95ZP0Ba00'
const ILKLEY_GAZETTE_ARTICLE_URL = 'https://www.ilkleygazette.co.uk/news/26265760.new-family-play-swap-space-opens-wharfedale'
const WHARFEDALE_OBSERVER_ARTICLE_URL = 'https://www.wharfedaleobserver.co.uk/news/26265760.new-family-play-swap-space-opens-wharfedale'
const FREE_TRIAL_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe3HZA6pof7I7m4diGGWerDKkNo0uKZVCql5Szl741bPu2aIg/viewform?usp=header'

function page(cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const buy = document.createElement('button')
  buy.innerText = 'Buy Summer Flexi Week Pass'
  buy.onclick = scroll_to_summer_pass

  shadow.innerHTML = `
    <div class="page">

      <section class="hero">
        <div class="hero-inner">
          <div class="logo hero-copy">
            <img src="./assets/logo.png" alt="Swap & Play Wharfedale logo">
            <p class="eyebrow">Summer passes now available</p>
            <h1>A calmer way to do play time</h1>
            <p class="hero-subtitle">
              A small members-style community space where children can play and parents can breathe.
            </p>
            <div class="hero-actions">
              <buy-pass></buy-pass>
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
            <p class="eyebrow dark">More than a playroom</p>
            <h2>A shared resource for local families</h2>
          </div>

          <div>
            <p>
              Swap & Play is somewhere children can play, but it is also a place where families
              can meet, share useful things and gradually become familiar faces.
            </p>

            <p>
              Low numbers help it feel calmer than a conventional play centre.
              Children can move between pretend play, books, focused toys and movement,
              while adults supervise, sit, talk or make a drink.
            </p>

            <p>
              There is also a Swap Room for passing on children’s clothes, books and useful items,
              plus a changing space, kitchenette, toilets and a parent table for eating,
              feeding or light work.
            </p>

            <p>
              The aim is not to fill every visit with organised entertainment.
              It is to give local families a comfortable place they can use as part of ordinary life.
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
        <h2>Flexible access, without another timetable</h2>

        <p class="included-intro">
          A calm play-and-swap space you can use as part of ordinary family life.
        </p>

          <div class="included-grid calm-cards">
            <div class="included-card">
              <h3>No fixed sessions</h3>
              <p>
                Come during opening hours without planning your day around a timetable.
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
              <h3>Unlimited visits</h3>
              <p>
                Use the space regularly without treating every visit as a separate purchase.
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
              <h3>A familiar local space</h3>
              <p>
                Visit regularly and begin to recognise other families without joining another formal class.
              </p>
            </div>
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

      <section class="section weekly-calendar-section" id="calendar">
        <div class="content content-wide center">
          <p class="eyebrow dark">Our weekly rhythm</p>

          <h2>Come when it suits you — or join a social time</h2>

          <p class="section-intro">
            Swap &amp; Play remains open for flexible visits throughout the week.
            These optional gathering times make it easier to arrive when other
            families are likely to be here.
          </p>

          <div class="calendar-legend" aria-label="Calendar key">
            <span class="calendar-key">
              <span class="calendar-key-dot public-dot"></span>
              Open to everyone
            </span>

            <span class="calendar-key">
              <span class="calendar-key-dot member-dot"></span>
              Members and active pass holders
            </span>

            <span class="calendar-key">
              <span class="calendar-key-dot flexible-dot"></span>
              Flexible visits
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
                    data-access="Members and active pass holders"
                    data-description="Visit independently at any point during opening hours. The Afternoon Playdate is optional, and you can visit before, during or after it."
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
                    data-end="18:00"
                    data-title="Afternoon Playdate"
                    data-time="Monday, 3–6pm"
                    data-access="Members and active pass holders"
                    data-description="An informal afternoon playdate for families who would like to visit when other children and carers are likely to be around."
                    data-member-only="true"
                    aria-label="Afternoon Playdate, Monday from 3 to 6pm. Open event details."
                  >
                    <span class="week-event-time">3–6pm</span>
                    <strong class="week-event-title">Afternoon Playdate</strong>
                  </button>
                </div>

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
                    data-access="Members and active pass holders"
                    data-description="Visit independently at any point during opening hours. Cowork & Play is optional, and you can visit before, during or after it."
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
                    data-access="Members and active pass holders"
                    data-description="Bring a laptop for some light work while your child plays nearby. This is an informal shared time rather than supervised childcare or a structured coworking session."
                    data-member-only="true"
                    aria-label="Cowork and Play, Tuesday from 11am to 2pm. Open event details."
                  >
                    <span class="week-event-time">11am–2pm</span>
                    <strong class="week-event-title">Cowork &amp; Play</strong>
                  </button>
                </div>

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
                    data-access="Members and active pass holders"
                    data-description="Members and active pass holders can visit independently throughout the day. Both Open Play sessions are also open to families without a pass."
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
                    data-access="Open to everyone · No pass required"
                    data-description="A relaxed public session for seeing the space, letting children play and meeting other local families. You do not need a pass to attend."
                    data-member-only="false"
                    aria-label="Open Play, Wednesday from 10am to 12pm. Open to everyone. Open event details."
                  >
                    <span class="week-event-time">10am–12pm</span>
                    <strong class="week-event-title">Open Play</strong>
                  </button>
                </div>

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
                    data-access="Members and active pass holders"
                    data-description="Visit independently at any point during opening hours. The Under-1s Afternoon Playdate is optional, and you can visit before, during or after it."
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
                    data-end="18:00"
                    data-title="Under-1s Afternoon Playdate"
                    data-time="Thursday, 3–6pm"
                    data-access="Members and active pass holders · For babies under 1"
                    data-description="A calmer afternoon playdate for babies under one and their grown-ups, with space to chat, feed and let little ones explore at their own pace."
                    data-member-only="true"
                    aria-label="Under-1s Afternoon Playdate, Thursday from 3 to 6pm. Open event details."
                  >
                    <span class="week-event-time">3–6pm</span>
                    <strong class="week-event-title">Under-1s Playdate</strong>
                  </button>
                </div>

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
                    data-access="Members and active pass holders"
                    data-description="Visit independently at any point during opening hours. Grandparents’ Morning and the Afternoon Playdate are optional social times."
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
                    data-end="13:00"
                    data-title="Grandparents’ Morning"
                    data-time="Friday, 10am–1pm"
                    data-access="Members and active pass holders"
                    data-description="A relaxed social morning for grandparents and little ones. Come for the full morning or simply visit for as long as it suits you."
                    data-member-only="true"
                    aria-label="Grandparents’ Morning, Friday from 10am to 1pm. Open event details."
                  >
                    <span class="week-event-time">10am–1pm</span>
                    <strong class="week-event-title">Grandparents’ Morning</strong>
                  </button>

                  <button
                    class="week-event member-event social-event"
                    type="button"
                    data-start="15:00"
                    data-end="18:00"
                    data-title="Afternoon Playdate"
                    data-time="Friday, 3–6pm"
                    data-access="Members and active pass holders"
                    data-description="An easy end-of-week playdate with free play, tea and coffee. Families can arrive or leave at any point."
                    data-member-only="true"
                    aria-label="Afternoon Playdate, Friday from 3 to 6pm. Open event details."
                  >
                    <span class="week-event-time">3–6pm</span>
                    <strong class="week-event-title">Afternoon Playdate</strong>
                  </button>
                </div>

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
                    data-access="Members and active pass holders"
                    data-description="Visit independently whenever it works for your family. The Swap Event is an optional social time within the normal flexible-access day."
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
                    data-end="20:00"
                    data-title="Swap Event"
                    data-time="Saturday, 5–8pm"
                    data-access="Members and active pass holders"
                    data-description="Bring along good-quality children’s clothes, books, toys or useful family items, browse what others have brought and take home anything your family can use."
                    data-member-only="true"
                    aria-label="Swap Event, Saturday from 5 to 8pm. Open event details."
                  >
                    <span class="week-event-time">5–8pm</span>
                    <strong class="week-event-title">Swap Event</strong>
                  </button>
                </div>

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
                    data-access="Members and active pass holders"
                    data-description="Visit independently whenever it works for your family. Coffee & Cake is an optional social time within the normal flexible-access day."
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
                    data-access="Members and active pass holders"
                    data-description="A relaxed Sunday bring-and-share gathering with coffee, free play and something sweet. Bring a cake, biscuits or another treat to add to the table, then help yourself and share with everyone."
                    data-member-only="true"
                    aria-label="Coffee and Cake, Sunday from 11am to 2pm. Open event details."
                  >
                    <span class="week-event-time">11am–2pm</span>
                    <strong class="week-event-title">Coffee &amp; Cake</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="calendar-summary">
            <p>
              <strong>Social times are optional.</strong>
              Members and active pass holders can still visit independently
              from 6am to 9pm every day. Select a session to see more details.
            </p>

            <a
              class="calendar-pass-link"
              href="#summer-pass"
              data-scroll-to-summer-pass
            >
              View the Summer Flexi Week Pass →
            </a>
          </div>
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
              <p class="event-modal-invitation">
                Included with an active membership, free trial week
                or Flexi Week Pass.
              </p>

              <a
                class="button event-modal-trial"
                href="${FREE_TRIAL_URL}"
                target="_blank"
                rel="noopener noreferrer"
                data-event-modal-trial
              >
                New here? Apply for a free trial week
              </a>

              <button
                class="button event-modal-pass"
                type="button"
                data-event-modal-pass
              >
                Buy a Flexi Week Pass
              </button>
            </div>
          </div>
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

      <section class="section soft pricing-section summer-pricing-section">
        <div class="content content-wide center">
          <p class="eyebrow dark">Summer offer</p>
          <h2>Summer Flexi Week Pass</h2>

          <p class="section-intro">
            Until the start of school, Swap & Play is available through a simple summer pass:
            one week of flexible access built around naps, weather, visitors and changing plans. Come as often as you like during your seven days—without booking another activity.
          </p>

          <div class="summer-offer-card price-card featured membership-card" id="summer-pass">
            <span class="summer-shape summer-sun" aria-hidden="true"></span>
            <span class="summer-shape summer-strawberry-one" aria-hidden="true"></span>
            <span class="summer-shape summer-strawberry-two" aria-hidden="true"></span>

            <div class="label popular">Summer offer</div>
            <h3>Summer Flexi Week Pass</h3>

            <p class="small summer-card-intro">
              A flexible 7-day pass for families who want a calm place to land during the summer holidays.
            </p>

            <div class="membership-total summer-total">
              <span class="membership-total-label">Per household</span>
              <strong class="membership-total-price">£15</strong>
              <div class="membership-weekly-price">7 days of unlimited visits</div>
              <p class="membership-cancel-note">
                Buy now. Activate anytime.
              </p>
            </div>

            <ul class="membership-benefits-list">
              <li>Unlimited visits for your household for 7 days</li>
              <li>No booking slots</li>
              <li>Join any member social session</li>
              <li>Use of the play rooms and Swap Room</li>
              <li>Tea and coffee included</li>
              <li>Bring your own snacks</li>
              <li>Your 7 days start when you first visit</li>
            </ul>

            <p class="small-note summer-activation-note">
              Passes can be activated from the day after purchase and no later than 31 August 2026.
              After your first visit, your pass is valid for 7 consecutive days.
            </p>

            <a
              class="button summer-button"
              href="${SUMMER_PASS_PAYMENT_URL}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Summer Flexi Week Pass
            </a>

            <p class="small-note membership-link-note">
              You will be taken to Stripe to pay securely by card.
            </p>
          </div>

          <p class="summer-after-note">
            Available until the start of school. Autumn membership options will be announced later.
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

      <section class="section light faq-section">
        <div class="content center">
          <p class="eyebrow dark">Good to know</p>
          <h2>A few useful details</h2>

          <div class="faq-list">
            <div class="faq-item">
              <h3>How does the Summer Flexi Week Pass work?</h3>
              <p>Buy your pass online. It can be activated from the next day onwards, and your 7 days start when you first visit.</p>
            </div>
            <div class="faq-item">
              <h3>Is this a playgroup, class or soft play?</h3>
              <p>
                No. There is no led activity, fixed programme or large soft-play structure.
                Children play freely while their accompanying adults supervise them.
                Your pass gives you flexible access during opening hours.
              </p>
            </div>
            <div class="faq-item">
              <h3>Do I need to book?</h3>
              <p>No. Summer Flexi Week Pass holders can come during opening hours without booking a slot.</p>
            </div>
            <div class="faq-item">
              <h3>Can I visit before buying a pass?</h3>
              <p>Yes. Wednesday Open Play is there for families who would like to see the space before buying a summer pass.</p>
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
              <p>Yes. You are welcome to bring a laptop and get some work done while your little one plays nearby. Parents and carers remain responsible for supervising their children at all times.</p>
            </div>
            <div class="faq-item">
              <h3>What happens after summer?</h3>
              <p>The Summer Flexi Week Pass is a seasonal offer available until the start of school. Autumn membership options will be announced later.</p>
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
        <img src="./assets/main-room.jpg" alt="Parents drawing with their children" class="photo">
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
    const trial = shadow.querySelector('[data-event-modal-trial]')

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

    close_buttons.forEach(button => {
      button.addEventListener('click', close_modal)
    })

    trial.addEventListener('click', close_modal)

    pass.addEventListener('click', () => {
      close_modal()
      scroll_to_summer_pass()
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
    btn.onclick = scroll_to_summer_pass
    node.replaceWith(btn)
  })

  shadow.querySelectorAll('[data-scroll-to-summer-pass]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault()
      scroll_to_summer_pass()
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
      path.endsWith('/trial') ||
      path.endsWith('/summer') ||
      hash === '#trial' ||
      hash === '#apply' ||
      hash === '#membership' ||
      hash === '#pricing' ||
      hash === '#summer-pass'
    ) {
      scroll_to_target('#summer-pass')
      return
    }

    if (hash === '#calendar' || hash === '#events') {
      scroll_to_target('#calendar')
    }
  }

  function scroll_to_summer_pass() {
    history.replaceState(null, '', '#summer-pass')
    scroll_to_target('#summer-pass')
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

},{"get_theme":3}],3:[function(require,module,exports){
module.exports = get_theme

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
      --heather-dark: #8f64a4;
      --summer-yellow: #f7d879;
      --summer-strawberry: #e85f73;
      --summer-leaf: #7fbf8f;
      --ink: #2f4f4f;
      --muted: #6f8079;
      --line-soft: rgba(47, 79, 79, 0.1);
      --shadow-card: 0 16px 44px rgba(47, 79, 79, 0.075);
    }

    * {
      box-sizing: border-box;
    }

    [hidden] {
      display: none !important;
    }

    .page {
      overflow-x: hidden;
      background: var(--cream);
      color: var(--ink);
      line-height: 1.7;
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
      color: var(--cream);
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
      font-size: 1.08rem;
      line-height: 1.72;
    }

    a {
      color: var(--heather-dark);
      text-underline-offset: 0.18em;
    }

    .eyebrow {
      margin-bottom: 0.9rem;
      color: rgba(255, 255, 255, 0.86);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .eyebrow.dark {
      color: var(--heather-dark);
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

    button:hover,
    .button:hover {
      background: var(--heather-dark);
      transform: translateY(-1px);
    }

    button:focus-visible,
    .button:focus-visible,
    a:focus-visible {
      outline: 3px solid rgba(143, 100, 164, 0.4);
      outline-offset: 3px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.85rem;
    }

    .hero-actions button,
    .hero-actions .button {
      margin-right: 0;
    }

    .wave {
      display: block;
      width: 100%;
      height: 118px;
      margin: -1px 0;
      line-height: 0;
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
      display: grid;
      grid-template-columns: 0.85fr 1.15fr;
      align-items: start;
      gap: 4rem;
      max-width: 1180px;
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

    .swap-section .photo {
      width: auto;
      object-fit: contain;
    }

    .photo-strip {
      padding: 0 1.5rem 4rem;
      background: var(--beige);
    }

    .photo-strip .photo {
      margin: 0 auto;
      border-color: var(--cream);
    }

    /* Hero */

    .hero {
      padding: 3rem 1.5rem 1rem;
      background: var(--pale-blue);
      text-align: left;
    }

    .hero-inner {
      display: grid;
      grid-template-columns: minmax(0, 680px) minmax(320px, 540px);
      align-items: center;
      justify-content: center;
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
      filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.08));
    }

    .hero .logo img {
      opacity: 0.96;
      filter:
        brightness(0)
        invert(1)
        drop-shadow(0 2px 10px rgba(0, 0, 0, 0.08));
    }

    .hero-subtitle {
      max-width: 600px;
      margin-bottom: 1rem;
      color: var(--cream);
      font-size: clamp(1.18rem, 2vw, 1.5rem);
      line-height: 1.45;
    }

    .hero-photo {
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

    .hero-photo .photo {
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

    /* Location */

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
      align-items: center;
      gap: 2rem;
      max-width: 1040px;
      margin: 0 auto 2.25rem;
    }

    .location-card {
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

    .location-card img {
      display: block;
      width: 100%;
      height: 100%;
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

    /* Purpose and photo sections */

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
      display: block;
      width: 100%;
      height: 420px;
      border: 8px solid rgba(255, 255, 255, 0.7);
      border-radius: 26px;
      box-shadow: 0 18px 50px rgba(47, 79, 79, 0.1);
      object-fit: cover;
      transition: transform 0.25s ease;
    }

    .story-photo:hover {
      transform: translateY(-3px);
    }

    .relief-section,
    .swap-section {
      background: var(--pale-green);
    }

    .relief-section p:not(.eyebrow) {
      max-width: 820px;
      font-size: 1.2rem;
    }

    /* Included cards */

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
      padding: 1.65rem;
      border: 1px solid rgba(47, 79, 79, 0.1);
      border-radius: 24px;
      background: white;
      box-shadow: var(--shadow-card);
      text-align: left;
    }

    .included-card h3 {
      margin-bottom: 0.65rem;
      font-size: 1.12rem;
    }

    .included-card p {
      margin: 0;
      color: var(--muted);
      font-size: 0.98rem;
      line-height: 1.58;
    }

    /* Weekly calendar */

    .weekly-calendar-section {
      position: relative;
      padding-right: 1rem;
      padding-left: 1rem;
      background: var(--cream);
    }

    .weekly-calendar-section .content-wide {
      max-width: 1600px;
    }

    .weekly-calendar-section h2 {
      max-width: 820px;
      margin-left: auto;
      margin-right: auto;
    }

    .weekly-calendar-section .section-intro {
      max-width: 790px;
      margin-bottom: 1.5rem;
    }

    .calendar-legend {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.75rem 1.35rem;
      margin: 1.8rem auto 2.5rem;
      color: var(--muted);
    }

    .calendar-key {
      display: inline-flex;
      align-items: center;
      gap: 0.48rem;
      font-size: 0.86rem;
      font-weight: 750;
      line-height: 1.3;
    }

    .calendar-key-dot {
      width: 11px;
      height: 11px;
      flex: 0 0 11px;
      border-radius: 50%;
    }

    .public-dot {
      background: var(--pale-blue);
    }

    .member-dot {
      background: var(--pale-pink);
    }

    .flexible-dot {
      border: 1px solid rgba(47, 79, 79, 0.16);
      background: var(--pale-green);
    }

    .calendar-scroll {
      width: 100%;
      padding-bottom: 0.8rem;
      overflow-x: auto;
      scrollbar-width: thin;
      scrollbar-color:
        rgba(47, 79, 79, 0.24)
        rgba(47, 79, 79, 0.06);
      -webkit-overflow-scrolling: touch;
    }

    .calendar-scroll:focus-visible {
      outline: 3px solid rgba(143, 100, 164, 0.3);
      outline-offset: 5px;
      border-radius: 24px;
    }

    .calendar-scroll::-webkit-scrollbar {
      height: 8px;
    }

    .calendar-scroll::-webkit-scrollbar-track {
      border-radius: 999px;
      background: rgba(47, 79, 79, 0.06);
    }

    .calendar-scroll::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: rgba(47, 79, 79, 0.24);
    }

    .week-calendar {
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

    .calendar-header-row,
    .calendar-body-row {
      display: grid;
      grid-template-columns: repeat(7, minmax(205px, 1fr));
    }

    .calendar-header-row {
      border-bottom: 1px solid rgba(47, 79, 79, 0.13);
      background: var(--sand);
    }

    .calendar-day-heading {
      padding: 1rem 1.1rem;
      border-right: 1px solid rgba(47, 79, 79, 0.12);
      color: var(--ink);
      font-size: 0.78rem;
      font-weight: 850;
      line-height: 1;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .calendar-day-heading:last-child {
      border-right: none;
    }

    .public-heading {
      background: rgba(111, 168, 220, 0.15);
      color: #456f92;
    }

    .weekend-heading {
      background: rgba(209, 236, 230, 0.34);
    }

    .calendar-body-row {
      min-height: 0;
      align-items: stretch;
    }

    .calendar-day-cell {
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

    .calendar-day-cell:last-child {
      border-right: none;
    }

    .public-cell {
      background-color: rgba(111, 168, 220, 0.035);
    }

    .weekend-cell {
      background-color: rgba(244, 239, 230, 0.42);
    }

    /*
     * Every event occupies the same grid column.
     * The full-day access event sits behind timed social events.
     */

    .week-event {
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
      padding: 0.5rem 0.65rem;
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

    .week-event:hover {
      box-shadow: none;
      transform: none;
      filter: brightness(0.98);
    }

    .week-event:focus-visible {
      z-index: 4;
      outline: 3px solid rgba(143, 100, 164, 0.44);
      outline-offset: 2px;
    }

    .member-event {
      border: 1px solid rgba(244, 166, 192, 0.76);
      background: rgba(244, 166, 192, 0.94);
    }

    .member-event:hover {
      background: var(--pale-pink);
    }

    .public-event {
      border: 1px solid rgba(77, 128, 173, 0.35);
      background: var(--pale-blue);
      color: white;
    }

    .public-event:hover {
      background: #639ed3;
    }

    .flexible-event {
      border: 1px dashed rgba(47, 79, 79, 0.18);
      background: rgba(209, 236, 230, 0.28);
    }

    .flexible-event:hover {
      background: rgba(209, 236, 230, 0.42);
    }

    /* Full-day flexible-access layer */

    .availability-event {
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

    .availability-event:hover {
      background: rgba(209, 236, 230, 0.38);
      box-shadow: none;
      filter: none;
    }

    .availability-event .week-event-time {
      margin-bottom: 0.12rem;
      color: var(--muted);
      font-size: 0.61rem;
    }

    .availability-event .week-event-title {
      color: var(--ink);
      font-size: 0.72rem;
      line-height: 1.1;
    }

    /* Timed event layer */

    .social-event {
      z-index: 2;
      grid-column: 1;
      width: auto;
      margin: 2px 0.5rem;
      box-shadow: 0 6px 18px rgba(47, 79, 79, 0.14);
    }

    .social-event:hover {
      box-shadow: 0 8px 22px rgba(47, 79, 79, 0.18);
    }

    .weekend-cell .availability-event {
      background: rgba(209, 236, 230, 0.54);
    }

    .weekend-cell .availability-event:hover {
      background: rgba(209, 236, 230, 0.72);
    }

    .week-event-time {
      display: block;
      margin-bottom: 0.22rem;
      color: var(--heather-dark);
      font-size: 0.68rem;
      font-weight: 850;
      line-height: 1.15;
      letter-spacing: 0.01em;
    }

    .week-event-title {
      display: block;
      margin: 0;
      color: var(--ink);
      font-size: 0.84rem;
      font-weight: 800;
      line-height: 1.12;
      letter-spacing: -0.01em;
      overflow-wrap: break-word;
    }

    .public-event .week-event-time,
    .public-event .week-event-title {
      color: white;
    }

    .calendar-summary {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 1.5rem;
      max-width: 1000px;
      margin: 2rem auto 2rem;
      padding: 1.25rem 1.35rem;
      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 20px;
      background: rgba(209, 236, 230, 0.48);
      text-align: left;
    }

    .calendar-summary p {
      max-width: none;
      margin: 0;
      color: var(--muted);
      font-size: 0.96rem;
      line-height: 1.55;
    }

    .calendar-summary strong {
      color: var(--ink);
    }

    .calendar-pass-link {
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

    .calendar-pass-link:hover {
      background: var(--heather-dark);
      color: white;
      transform: translateY(-1px);
    }

  /* Event modal */

  .event-modal {
    position: fixed;
    z-index: 10000;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 1rem;
    text-align: left;
  }

  .event-modal-backdrop {
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
  .event-modal-backdrop:focus {
    background: rgba(30, 48, 48, 0.6);
    box-shadow: none;
    transform: none;
  }

  .event-modal-panel {
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

  .event-modal-close {
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

  .event-modal-close:hover {
    background: rgba(47, 79, 79, 0.14);
    box-shadow: none;
    color: var(--ink);
    transform: none;
  }

  .event-modal-close:focus-visible {
    outline: 3px solid rgba(143, 100, 164, 0.4);
    outline-offset: 2px;
  }

  .event-modal-time {
    max-width: none;
    margin: 0 3.25rem 0.35rem 0;
    color: var(--heather-dark);
    font-size: 0.86rem;
    font-weight: 850;
    line-height: 1.3;
  }

  .event-modal-panel h3 {
    margin: 0 3.25rem 0.65rem 0;
    color: var(--ink);
    font-size: 1.55rem;
    line-height: 1.12;
  }

  .event-modal-access {
    display: inline-flex;
    width: fit-content;
    max-width: 100%;
    margin: 0 0 1rem;
    padding: 0.38rem 0.68rem;
    border-radius: 999px;
    background: rgba(244, 166, 192, 0.22);
    color: var(--heather-dark);
    font-size: 0.75rem;
    font-weight: 800;
    line-height: 1.3;
  }

  .event-modal-description {
    max-width: none;
    margin: 0;
    color: var(--muted);
    font-size: 0.96rem;
    line-height: 1.5;
  }

  .event-modal-actions {
    display: grid;
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .event-modal-actions[hidden] {
    display: none;
  }

  .event-modal-invitation {
    max-width: none;
    margin: 0 0 0.1rem;
    color: var(--ink);
    font-size: 0.92rem;
    line-height: 1.42;
  }

  .event-modal-actions .button {
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

  .event-modal-pass {
    border: 2px solid var(--pale-pink);
    background: transparent;
    box-shadow: none;
    color: var(--heather-dark);
  }

  .event-modal-pass:hover {
    background: var(--pale-pink);
    color: white;
  }

    /* Reviews and press */

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
      padding: 1.65rem;
      border: 1px solid rgba(47, 79, 79, 0.1);
      border-radius: 26px;
      background: var(--sand);
      box-shadow: var(--shadow-card);
      text-align: left;
    }

    .review-card p {
      max-width: none;
      margin: 0 0 1rem;
      color: var(--ink);
      font-size: 1rem;
      line-height: 1.6;
    }

    .review-card span {
      display: block;
      color: var(--muted);
      font-size: 0.82rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .press-mentions {
      max-width: 920px;
      margin: 3.5rem auto 0;
      padding-top: 2.75rem;
      border-top: 1px solid rgba(255, 255, 255, 0.32);
    }

    .press-eyebrow {
      margin-bottom: 0.7rem;
      color: rgba(255, 255, 255, 0.88);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .press-intro {
      max-width: 690px;
      margin: 0 auto 1.75rem;
      color: white;
      font-size: 1.08rem;
      line-height: 1.6;
    }

    .press-links {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .press-link {
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

    .press-link:hover {
      box-shadow: 0 20px 52px rgba(47, 79, 79, 0.14);
      transform: translateY(-2px);
    }

    .press-publication {
      display: block;
      margin-bottom: 0.8rem;
      color: var(--heather-dark);
      font-size: 0.76rem;
      font-weight: 850;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .press-title {
      display: block;
      margin-bottom: 1.25rem;
      color: var(--ink);
      font-size: 1.18rem;
      font-weight: 750;
      line-height: 1.35;
    }

    .press-read {
      display: block;
      margin-top: auto;
      color: var(--heather-dark);
      font-size: 0.94rem;
      font-weight: 800;
    }

    /* Summer pass */

    .pricing-section {
      background: var(--pale-green);
    }

    .summer-pricing-section {
      background:
        radial-gradient(
          circle at 14% 10%,
          rgba(247, 216, 121, 0.4) 0,
          rgba(247, 216, 121, 0.4) 110px,
          transparent 112px
        ),
        radial-gradient(
          circle at 87% 18%,
          rgba(244, 166, 192, 0.28) 0,
          rgba(244, 166, 192, 0.28) 96px,
          transparent 98px
        ),
        linear-gradient(180deg, var(--pale-green), #dff3ee);
    }

    .pricing-section .section-intro {
      max-width: 660px;
      margin: 0 auto 2rem;
      color: var(--ink);
      font-size: 1.05rem;
      line-height: 1.62;
    }

    .price-card {
      position: relative;
      padding: 1.8rem;
      border: 1px solid var(--line-soft);
      border-radius: 26px;
      background: rgba(255, 255, 255, 0.94);
      box-shadow: var(--shadow-card);
      font-size: 1rem;
      text-align: left;
    }

    .price-card h3 {
      margin: 0.5rem 0 0.75rem;
      font-size: 1.32rem;
    }

    .featured {
      border: 3px solid var(--pale-pink);
      box-shadow: 0 22px 58px rgba(244, 166, 192, 0.18);
    }

    .summer-offer-card {
      isolation: isolate;
      max-width: 660px;
      margin: 2rem auto 1.2rem;
      padding: 2.15rem;
      overflow: hidden;
      border: 3px solid rgba(244, 166, 192, 0.82);
      border-radius: 34px;
      background:
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.96),
          rgba(251, 250, 246, 0.96)
        ),
        var(--cream);
      box-shadow: 0 26px 68px rgba(47, 79, 79, 0.13);
      text-align: left;
    }

    .summer-offer-card::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 0;
      background:
        radial-gradient(
          circle at 16% 18%,
          rgba(247, 216, 121, 0.22) 0,
          rgba(247, 216, 121, 0.22) 84px,
          transparent 86px
        ),
        radial-gradient(
          circle at 88% 82%,
          rgba(209, 236, 230, 0.55) 0,
          rgba(209, 236, 230, 0.55) 120px,
          transparent 122px
        );
    }

    .summer-offer-card h3 {
      margin: 0.5rem 0 0.75rem;
      font-size: 1.82rem;
      line-height: 1.06;
    }

    .summer-card-intro {
      max-width: none;
      margin: 0 0 1rem;
      color: var(--muted);
    }

    .summer-total {
      margin: 1rem 0 0;
      padding: 1.35rem;
      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.72);
      text-align: center;
    }

    .summer-activation-note {
      margin-top: 1rem;
      margin-bottom: 0.9rem;
    }

    .summer-button {
      width: 100%;
      margin: 0.75rem 0 0;
      background: var(--summer-strawberry);
      box-shadow: 0 15px 38px rgba(232, 95, 115, 0.24);
    }

    .summer-button:hover {
      background: var(--heather-dark);
    }

    .summer-after-note {
      max-width: 620px;
      margin: 1rem auto 0;
      color: var(--muted);
      font-size: 0.98rem;
      line-height: 1.55;
    }

    .summer-shape {
      position: absolute;
      z-index: 0;
      pointer-events: none;
    }

    .summer-sun {
      top: 1.1rem;
      right: 1.1rem;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: var(--summer-yellow);
      box-shadow: 0 0 0 12px rgba(247, 216, 121, 0.23);
      opacity: 0.78;
    }

    .summer-strawberry-one,
    .summer-strawberry-two {
      width: 28px;
      height: 34px;
      border-radius: 55% 55% 60% 60%;
      background: var(--summer-strawberry);
      opacity: 0.78;
      transform: rotate(-16deg);
    }

    .summer-strawberry-one::before,
    .summer-strawberry-two::before {
      content: "";
      position: absolute;
      top: -8px;
      left: 7px;
      width: 14px;
      height: 10px;
      border-radius: 60% 60% 30% 30%;
      background: var(--summer-leaf);
    }

    .summer-strawberry-one::after,
    .summer-strawberry-two::after {
      content: "";
      position: absolute;
      inset: 7px 8px;
      background:
        radial-gradient(
          circle,
          rgba(255, 255, 255, 0.65) 0 1.2px,
          transparent 1.4px
        );
      background-size: 8px 8px;
    }

    .summer-strawberry-one {
      bottom: 1.5rem;
      left: 1.25rem;
    }

    .summer-strawberry-two {
      right: 5.8rem;
      bottom: 2.2rem;
      opacity: 0.58;
      transform: rotate(14deg) scale(0.82);
    }

    .membership-total {
      margin: 1rem 0 0;
      padding: 1.25rem;
      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 22px;
      background: var(--cream);
      text-align: center;
    }

    .membership-total-label {
      display: inline-block;
      margin: 0;
      color: var(--muted);
      font-size: 0.78rem;
      font-weight: 850;
      line-height: 1.1;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .membership-total-price {
      display: block;
      margin-top: 0.45rem;
      color: var(--ink);
      font-size: 3.4rem;
      font-weight: 850;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .membership-weekly-price {
      margin-top: 0.45rem;
      color: var(--heather-dark);
      font-size: 1.22rem;
      font-weight: 850;
      line-height: 1.2;
    }

    .membership-cancel-note {
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

    .membership-benefits-list {
      margin-top: 1.25rem;
      color: var(--muted);
    }

    .label {
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
    }

    .popular {
      background: rgba(247, 216, 121, 0.72);
      color: var(--heather-dark);
    }

    .price-card ul {
      margin: 1.15rem 0 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    .price-card li {
      position: relative;
      margin-bottom: 0.65rem;
      padding-left: 1.4rem;
      color: var(--ink);
      font-size: 0.98rem;
      line-height: 1.5;
    }

    .price-card li::before {
      content: "•";
      position: absolute;
      top: 0;
      left: 0;
      color: var(--summer-strawberry);
      font-weight: bold;
    }

    .small {
      padding: 0;
      color: var(--muted);
      font-size: 0.98rem;
      line-height: 1.55;
      text-align: left;
    }

    .small-note {
      margin: 0.9rem 0 0;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.45;
    }

    .membership-link-note {
      margin-top: 0.65rem;
      margin-bottom: 0;
      font-size: 0.86rem;
      line-height: 1.45;
      text-align: center;
    }

    #summer-pass,
    #calendar {
      scroll-margin-top: 2rem;
    }

    /* FAQ */

    .faq-list {
      display: grid;
      gap: 1rem;
      max-width: 850px;
      margin: 2.4rem auto 0;
      text-align: left;
    }

    .faq-item {
      padding: 1.45rem 1.6rem;
      border: 1px solid rgba(47, 79, 79, 0.08);
      border-radius: 22px;
      background: var(--cream);
    }

    .faq-item p {
      margin: 0;
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.58;
    }

    .day-section {
      background: var(--beige);
    }

    /* Footer */

    .footer {
      padding: 4rem 1.5rem;
      background: var(--pale-blue);
      color: white;
    }

    .footer p {
      margin-bottom: 0.8rem;
      font-size: 0.95rem;
      opacity: 0.88;
    }

    .footer a {
      font-weight: 800;
    }

    .footer-social {
      margin-top: 1.4rem;
    }

    .footer-logo {
      display: block;
      width: auto;
      max-width: 260px;
      height: 88px;
      margin: -14px auto 1.2rem;
      object-fit: contain;
    }

    @media (max-width: 1000px) {
      .hero-inner,
      .content-split {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .hero {
        padding: 2.5rem 1.25rem 0;
        text-align: center;
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

      .content-split > div,
      .content-split p {
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media (max-width: 900px) {
      .included-grid,
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

      .calendar-summary {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .calendar-pass-link {
        justify-self: start;
      }

      .footer-logo {
        max-width: 240px;
        height: 78px;
        margin: -12px auto 1.3rem;
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

      .hero-inner {
        gap: 1.25rem;
      }

      .logo img {
        display: block;
        width: 240px;
        max-width: 78vw;
        height: auto;
        margin: 0 auto 1.8rem;
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
        aspect-ratio: 4 / 5;
        height: auto;
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
      .summer-offer-card,
      .faq-item,
      .review-card {
        padding: 1.35rem;
        border-radius: 22px;
      }

      /* Calendar */

      .week-event {
        padding: 0.38rem 0.46rem;
      }

      .availability-event {
        padding: 0.48rem;
      }

      .week-event-time {
        margin-bottom: 0.18rem;
        font-size: 0.64rem;
      }

      .week-event-title {
        font-size: 0.78rem;
        line-height: 1.1;
      }

      .availability-event .week-event-time {
        font-size: 0.59rem;
      }

      .availability-event .week-event-title {
        font-size: 0.68rem;
      }

      /* Modal */

      .event-modal {
        padding: 0.75rem;
      }

      .event-modal-panel {
        width: min(520px, 100%);
        max-height: calc(100dvh - 1.5rem);
        padding: 1.4rem;
        border-radius: 22px;
      }

      .event-modal-panel h3 {
        font-size: 1.4rem;
      }

      .event-modal-description {
        font-size: 0.93rem;
        line-height: 1.45;
      }

      .event-modal-invitation {
        font-size: 0.89rem;
        line-height: 1.38;
      }

      .event-modal-actions .button {
        padding: 0.78rem 0.9rem;
        font-size: 0.88rem;
      }

      /* Press */

      .press-mentions {
        margin-top: 2.5rem;
        padding-top: 2.25rem;
        text-align: left;
      }

      .press-eyebrow,
      .press-intro {
        margin-left: 0;
        margin-right: 0;
        text-align: left;
      }

      .press-links {
        grid-template-columns: 1fr;
      }

      .press-link {
        min-height: 0;
        padding: 1.35rem;
        border-radius: 22px;
      }

      .press-title {
        font-size: 1.08rem;
      }

      /* Pricing */

      .summer-offer-card {
        max-width: 620px;
      }

      .reviews-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .reviews-section .content-wide,
      .pricing-section .content-wide {
        max-width: 100%;
      }

      .reviews-section h2,
      .reviews-section p,
      .reviews-section .eyebrow,
      .pricing-section h2,
      .pricing-section p,
      .pricing-section .eyebrow {
        margin-left: 0;
        margin-right: 0;
        text-align: left;
      }

      .reviews-section .section-intro,
      .pricing-section .section-intro {
        max-width: none;
        margin-bottom: 1.5rem;
      }

      .reviews-grid {
        display: block;
        max-width: 100%;
        margin-top: 1.5rem;
      }

      .review-card {
        width: 100%;
        margin: 0 0 1rem;
        padding: 1.25rem;
        border-radius: 22px;
      }

      .review-card p {
        margin-bottom: 0.9rem;
        font-size: 0.96rem;
        line-height: 1.55;
      }

      .membership-total {
        padding: 1rem;
        border-radius: 20px;
      }

      .membership-total-label {
        display: block;
        margin-bottom: 0.45rem;
        text-align: center;
      }

      .membership-total-price {
        font-size: 2.45rem;
        text-align: center;
      }

      .membership-weekly-price {
        font-size: 1.08rem;
        text-align: center;
      }

      .membership-cancel-note {
        padding: 0.8rem 0.85rem;
        font-size: 0.92rem;
        line-height: 1.42;
        text-align: center;
      }

      .membership-benefits-list {
        margin-top: 1rem;
      }

      .membership-benefits-list li {
        font-size: 0.94rem;
        line-height: 1.45;
      }

      button,
      .button {
        display: flex;
        width: 100%;
        max-width: 340px;
        margin: 1rem auto;
      }

      .week-event {
        display: block;
        width: auto;
        max-width: none;
        margin-top: 1px;
        margin-bottom: 1px;
      }

      .availability-event {
        display: flex;
        width: 100%;
        margin: 0;
      }

      .social-event {
        width: auto;
        margin-top: 2px;
        margin-bottom: 2px;
      }

      .event-modal-backdrop {
        display: block;
        width: 100%;
        max-width: none;
        margin: 0;
      }

      .event-modal-close {
        display: grid;
        width: 42px;
        max-width: 42px;
        margin: 0;
      }

      .hero-actions {
        width: 100%;
        gap: 0;
      }

      .summer-button {
        max-width: none;
        margin: 0.85rem 0 0;
      }

      .summer-sun {
        top: 1rem;
        right: 1rem;
        width: 48px;
        height: 48px;
      }

      .summer-strawberry-one,
      .summer-strawberry-two {
        display: none;
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
        padding-right: 1rem;
        padding-bottom: 3rem;
        padding-left: 1rem;
        overflow: hidden;
      }

      .photo-strip .photo {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
      }

      .footer {
        padding: 3.5rem 1rem;
        text-align: center;
      }

      .footer-logo {
        max-width: 240px;
        height: 78px;
        margin: -12px auto 1.4rem;
      }

      .footer p {
        max-width: 320px;
        margin-right: auto;
        margin-left: auto;
        overflow-wrap: anywhere;
        font-size: 0.95rem;
        line-height: 1.55;
        word-break: break-word;
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
        font-size: 0.68rem;
        letter-spacing: 0.12em;
      }

      .logo img {
        width: 220px;
        max-width: 82vw;
        height: auto;
        margin: 0 auto 1.5rem;
      }

      .photo,
      .story-photo,
      .hero-photo .photo {
        aspect-ratio: auto;
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

      /* Calendar */

      .week-event {
        padding: 0.34rem 0.4rem;
        border-radius: 10px;
      }

      .availability-event {
        padding: 0.42rem;
        border-radius: 11px;
      }

      .week-event-time {
        margin-bottom: 0.14rem;
        font-size: 0.6rem;
      }

      .week-event-title {
        font-size: 0.72rem;
        line-height: 1.08;
      }

      .availability-event .week-event-time {
        font-size: 0.56rem;
      }

      .availability-event .week-event-title {
        font-size: 0.64rem;
      }

      /* Modal */

      .event-modal {
        align-items: end;
        padding: 0.65rem;
      }

      .event-modal-panel {
        width: 100%;
        max-height: calc(100dvh - 1.3rem);
        padding: 1.25rem 1.1rem 1.1rem;
        border-radius: 22px;
      }

      .event-modal-close {
        top: 0.65rem;
        right: 0.65rem;
        width: 38px;
        height: 38px;
        min-width: 38px;
        max-width: 38px;
        font-size: 1.45rem;
      }

      .event-modal-time {
        margin-right: 2.8rem;
        font-size: 0.8rem;
      }

      .event-modal-panel h3 {
        margin-right: 2.8rem;
        font-size: 1.3rem;
      }

      .event-modal-access {
        margin-bottom: 0.85rem;
        font-size: 0.7rem;
      }

      .event-modal-description {
        font-size: 0.9rem;
        line-height: 1.42;
      }

      .event-modal-actions {
        gap: 0.6rem;
        margin-top: 0.85rem;
      }

      .event-modal-invitation {
        font-size: 0.86rem;
        line-height: 1.35;
      }

      .event-modal-actions .button {
        padding: 0.72rem 0.8rem;
        font-size: 0.85rem;
      }

      /* Remaining sections */

      .membership-total-price {
        font-size: 2.35rem;
      }

      .wave {
        height: 54px;
      }

      .wave svg {
        width: 190%;
        margin-left: -45%;
      }

      .photo-strip {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      }

      .review-card {
        padding: 1.1rem;
        border-radius: 20px;
      }

      .review-card p {
        font-size: 0.92rem;
        line-height: 1.52;
      }

      .review-card span {
        font-size: 0.74rem;
      }

      .summer-offer-card {
        padding: 1.2rem;
        border-radius: 22px;
      }

      .summer-offer-card h3 {
        font-size: 1.45rem;
      }

      .membership-total {
        padding: 0.95rem;
        border-radius: 18px;
      }

      .membership-weekly-price {
        font-size: 1rem;
      }

      .membership-cancel-note {
        padding: 0.75rem;
        font-size: 0.88rem;
      }

      .membership-benefits-list li {
        font-size: 0.92rem;
      }

      .footer {
        padding: 3rem 1rem;
      }

      .footer-logo {
        max-width: 220px;
        height: 72px;
        margin: -10px auto 1.3rem;
      }

      .footer p {
        max-width: 300px;
        font-size: 0.92rem;
      }
    }

    @media (max-height: 700px) {
      .event-modal-panel {
        padding-top: 1.1rem;
        padding-bottom: 1.1rem;
      }

      .event-modal-description {
        line-height: 1.4;
      }

      .event-modal-actions {
        gap: 0.55rem;
        margin-top: 0.75rem;
      }

      .event-modal-invitation {
        line-height: 1.35;
      }

      .event-modal-actions .button {
        padding-top: 0.68rem;
        padding-bottom: 0.68rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
      }

      .story-photo:hover,
      .press-link:hover,
      .calendar-pass-link:hover,
      button:hover,
      .button:hover {
        transform: none;
      }
    }
  `
}
},{}]},{},[1]);
