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
