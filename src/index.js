module.exports = page

const get_theme = require('get_theme')

const SINGLE_EVENT_PAYMENT_URL = 'https://buy.stripe.com/7sY00ifIC9jj4Fzag50Ba03'
const FIVE_EVENT_PACK_PAYMENT_URL = 'https://buy.stripe.com/3cI7sK7c69jjb3X73T0Ba02'
const WEEKLY_PASS_PAYMENT_URL = 'https://buy.stripe.com/4gM9ASbsmeDDeg95ZP0Ba00'
const ILKLEY_GAZETTE_ARTICLE_URL = 'https://www.ilkleygazette.co.uk/news/26265760.new-family-play-swap-space-opens-wharfedale'
const WHARFEDALE_OBSERVER_ARTICLE_URL = 'https://www.wharfedaleobserver.co.uk/news/26265760.new-family-play-swap-space-opens-wharfedale'

function page(cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const buy = document.createElement('button')
  buy.innerText = 'View pass options'
  buy.onclick = scroll_to_passes

  shadow.innerHTML = `
    <div class="page">

      <section class="hero">
        <div class="hero-inner">
          <div class="logo hero-copy">
            <img src="./assets/logo.png" alt="Swap & Play Wharfedale logo">
            <p class="eyebrow">Three flexible ways to visit</p>
            <h1>Play is ready when you are</h1>
            <p class="hero-subtitle">
              A calm, ready-to-use play space for the moments when home feels difficult, other activities are finished, or you simply want an easier change of scene.
            </p>
            <div class="hero-actions">
              <button type="button" data-scroll-to-calendar>
                View this week’s events
              </button>

              <buy-pass></buy-pass>
            </div>
          </div>
          <div class="hero-photo">
            <img src="./assets/hero-families.jpg" alt="Parent relaxing while children play nearby" class="photo">
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
          <p class="eyebrow dark">Our weekly rhythm</p>

          <h2>Come when it suits you — or join a social time</h2>

          <p class="section-intro">
            Swap &amp; Play remains open for flexible visits throughout the week.
            These optional social sessions make it easier to visit when other
            local families are likely to be here.
          </p>

          <div class="calendar-legend" aria-label="Calendar key">
            <span class="calendar-key">
              <span class="calendar-key-dot public-dot"></span>
              Free event
            </span>

            <span class="calendar-key">
              <span class="calendar-key-dot member-dot"></span>
              Paid events / free for members
            </span>

            <span class="calendar-key">
              <span class="calendar-key-dot flexible-dot"></span>
              Flexible visits / members only
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
                    data-access="Free for members and active pass holders · Tea and coffee included"
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
              <a class="button event-modal-single" href="${SINGLE_EVENT_PAYMENT_URL}" target="_blank" rel="noopener noreferrer" data-event-modal-single>
                Buy a Single Event Pass
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
            src="./assets/swap-room.jpg"
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
                Join a listed event or visit outside event times when you prefer a calmer atmosphere.
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

      <section class="section soft pricing-section visit-options-section" id="passes">
        <div class="content content-wide center">
          <p class="eyebrow dark">Choose what fits your plans</p>
          <h2>Three flexible ways to visit</h2>
          <p class="section-intro">Come for one social session, keep a small pack for occasional events, or make the space available to your family for a full week. Every option covers one household.</p>

          <div class="pass-options-grid">
            <article class="price-card visit-pass-card">
              <div class="label">One event</div>
              <h3>Single Event Pass</h3>
              <p class="small">For one scheduled social session without committing to a full week.</p>
              <div class="membership-total"><span class="membership-total-label">Per household</span><strong class="membership-total-price">£7.50</strong><div class="membership-weekly-price">One event</div></div>
              <ul class="membership-benefits-list">
                <li>Entry to one scheduled event</li><li>Play rooms and Swap Room during the event</li><li>Tea and coffee included</li><li>Drop in anytime during longer sessions</li>
              </ul>
              <a class="button" href="${SINGLE_EVENT_PAYMENT_URL}" target="_blank" rel="noopener noreferrer">Buy Single Event Pass</a>
            </article>

            <article class="price-card visit-pass-card">
              <div class="label">Five visits</div>
              <h3>5-Event Pack</h3>
              <p class="small">For families who want to join events regularly without using all visits in one week.</p>
              <div class="membership-total"><span class="membership-total-label">Per household</span><strong class="membership-total-price">£30</strong><div class="membership-weekly-price">£6 per event</div></div>
              <ul class="membership-benefits-list">
                <li>Five scheduled event visits</li><li>Use across different weeks</li><li>Play rooms and Swap Room during each event</li><li>Tea and coffee included</li>
              </ul>
              <p class="small-note">Valid for 6 weeks from the first event you attend.</p>
              <a class="button" href="${FIVE_EVENT_PACK_PAYMENT_URL}" target="_blank" rel="noopener noreferrer">Buy 5-Event Pack</a>
            </article>

            <article class="price-card featured membership-card visit-pass-card">
              <div class="label popular">Most flexible</div>
              <h3>7-Day Flexi Pass</h3>
              <p class="small">Keep a calm, ready-to-use play space available to your family for a full week.</p>
              <div class="membership-total"><span class="membership-total-label">Per household</span><strong class="membership-total-price">£15</strong><div class="membership-weekly-price">7 days of unlimited visits</div><p class="membership-cancel-note">Your week starts with your first visit.</p></div>
              <ul class="membership-benefits-list">
                <li>Unlimited visits for 7 consecutive days</li><li>Independent access every day from 6am to 9pm</li><li>All scheduled events during your active week</li><li>Play rooms and Swap Room</li><li>Tea and coffee included</li><li>Bring your own food and snacks</li>
              </ul>
              <a class="button summer-button" href="${WEEKLY_PASS_PAYMENT_URL}" target="_blank" rel="noopener noreferrer">Buy 7-Day Flexi Pass</a>
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
            <div class="faq-item"><h3>What is included with a Single Event Pass?</h3><p>It covers your household for one scheduled social session, including the play rooms, Swap Room, and tea and coffee during the event.</p></div>
            <div class="faq-item"><h3>How does the 5-Event Pack work?</h3><p>The pack gives your household entry to five separate scheduled events and is valid for 6 weeks from the first event you attend.</p></div>
            <div class="faq-item"><h3>How does the 7-Day Flexi Pass work?</h3><p>Your seven days begin with your first visit. During that week you can visit independently from 6am to 9pm every day and join any scheduled events.</p></div>
            <div class="faq-item"><h3>Are the events led classes?</h3><p>No. They are informal social sessions rather than singing, story or activity classes. Children play freely while adults supervise and socialise.</p></div>
            <div class="faq-item"><h3>Can I come when no event is running?</h3><p>Yes, with an active 7-Day Flexi Pass. Single Event Passes and 5-Event Packs are for scheduled events only.</p></div>
            <div class="faq-item"><h3>Can I see the space before buying?</h3><p>Yes. Wednesday Open Play is open to everyone and does not require a pass.</p></div>
            <div class="faq-item"><h3>Can I bring food?</h3><p>Yes. Bring your own food and drinks. Tea and coffee are included for grown-ups.</p></div>
            <div class="faq-item"><h3>Can parents use a laptop?</h3><p>Yes. You may do some light work while your child plays nearby. Parents and carers remain responsible for supervision.</p></div>
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
        scroll_to_target('#calendar')
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
      scroll_to_target('#calendar')
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
