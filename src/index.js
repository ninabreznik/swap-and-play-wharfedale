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
