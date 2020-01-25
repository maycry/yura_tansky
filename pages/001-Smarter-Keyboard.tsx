import Header from './components/header';
import Footer from './components/footer';

function SmarterKeyboard() {
  return (
    <div>
      <Header />
      <article className="wrapper">
        <h1>Designing a Smarter Keyboard</h1>
        <img src="img/001-Design-Keyboard/001-Intro.png" />
        <section>
          <p>
            <b>Grammarly Keyboard</b> replaces native mobile keyboard on iOS
            devices and augments writing with advanced grammar and punctuation
            suggestions, tone detection, and contextual synonyms.
          </p>
        </section>
        {/* <!-- <img src="img/001-Design-Keyboard/002-Keyboard.png"> --> */}
        <div className="gallery gallery-2-2">
          <img src="img/001-Design-Keyboard/002-Keyboard-01.png" />
          <img src="img/001-Design-Keyboard/002-Keyboard-02.png" />
        </div>
        <section>
          <p>
            Grammarly <b>solves the problem</b> of anxiety people have when they
            need to write something important on their phone. Grammarly helps to
            avoid confusion by making writing clear and mistake-free.
          </p>
        </section>
        <img src="img/001-Design-Keyboard/003-Demo.png" />
        <section>
          <p>
            The Keyboard corrects mistakes and suggests improvements while you
            type. You can apply those suggetsion with one click without losing
            the context. This type of interaction works best for messages and
            quick emails and called <b>Inline Mode</b>.
          </p>
        </section>
        <div className="animated-img">
          <video playsinline autoPlay muted loop>
            <source
              src="img/001-Design-Keyboard/004-Inline.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <p>
            For more indepth and longer pieces we designed <b>Revise mode</b>.
            It allows to focus on writing suggestion after you finished writing.
          </p>
        </section>
        <div className="animated-img">
          <video playsinline autoPlay muted loop>
            <source
              src="img/001-Design-Keyboard/005-Revise.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <p>
            <b>Tone Detection</b> and <b>Synonyms</b> good examples of features
            that are base on machine learning technologies that allows to show
            more complex in-depth suggestions. To differentiate those features I
            came up with a concept of “swoosh”.{' '}
          </p>
        </section>
        {/* <!-- <img src="img/001-Design-Keyboard/006-Emogenie.png"> -->
    <!-- <img src="img/001-Design-Keyboard/007-Synonyms.png"> --> */}

        <div className="gallery">
          <img src="img/001-Design-Keyboard/006-Emogenie-01.png" />
          <img src="img/001-Design-Keyboard/006-Emogenie-02.png" />
        </div>
        <div className="gallery">
          <img
            className="gallery-2-2"
            src="img/001-Design-Keyboard/007-Synonyms-01.png"
          />
          <img src="img/001-Design-Keyboard/007-Synonyms-02.png" />
          <img src="img/001-Design-Keyboard/007-Synonyms-03.png" />
        </div>
        <section>
          <p>
            To bring another level of engagement and improve users writing
            skills passively and encourage people to use Grammarly more in
            general we designed <b>gamification</b> flows.
          </p>
        </section>
        <img src="img/001-Design-Keyboard/008-AGWA.png" />
        <section>
          <p>
            <b>Onboarding</b> was the crucial part of the product. Installing
            keyboard is not a trivial task and for many users it was their first
            time doing this. If on-boarding is confusing people would just churn
            without getting any value from our product.
          </p>
        </section>
        <img src="img/001-Design-Keyboard/009-Onboarding.png" />
        <section>
          <p>
            Grammarly became one of the most popular writing productivity apps
            on the App Store. It was featured by Apple many times and had
            millions of everyday users around the world.
          </p>
        </section>
        <img src="img/001-Design-Keyboard/010-Stats.png" />
      </article>

      <Footer />
    </div>
  );
}

export default SmarterKeyboard;
