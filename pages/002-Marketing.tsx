import { Header } from './components/header';
import { Footer } from './components/footer';

function Marketing() {
  return (
    <div>
      <Header isMain={false} />

      <article className="wrapper">
        <h1>Grammarly.com And More</h1>
        <div className="animated-img">
          <video playsinline autoPlay muted loop>
            <source
              src="img/002-Marketing/001-IntroSlow@2x.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <p>
            I had a chance to work on a full revamp of{' '}
            <b>Grammarly onboarding flow</b>. The project included redesigning
            home page, Grammarly extension installation, sign up and adding
            personalization steps.
          </p>
          <p>
            One of the main goals of the project was optimizing signup
            conversions. Team collected a lot of knowledge from previous
            experiments and was ready to put everything we learned in a brand
            new onboarding flow design.
          </p>
        </section>
        <img src="img/002-Marketing/002-Flow.png" />
        <section>
          <p>
            <b>Landing page</b> was the starting point of onboarding. Hypotesis
            for its redeisng was showing tool for improving everyday writing. To
            support this idea I created a demo video that showcased how
            Grammarly work and how it’s different from competitors.{' '}
          </p>
          <p>
            We conducted two user testings and trimmed page a lot removing all
            unnecessary information that users pointed out as confusing.{' '}
          </p>
        </section>
        <div className="animated-img">
          <video playsinline autoPlay muted loop>
            <source
              src="img/002-Marketing/003-Landing-Page@2x.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <p>
            One of the main hypotesis for redesign was idea of personaliztion.
            Letting users adjust their experience would make their experience
            better and explain the values of the product.
          </p>
          <p>
            <b>As a result</b> of redesing one of the main hypotesis for
            redesign was idea of personaliztion. Letting users adjust their
            experience would make their experience better and explain the values
            of the product.
          </p>
        </section>
        <section>
          <h2>Marketing Sites</h2>
          <p>
            Over the course of years I designed many other web pages for
            Grammarly. Starting from blog to about and careers pages.{' '}
          </p>
        </section>
        <img src="img/002-Marketing/004-Grammarly-Business.png" />
        <img src="img/002-Marketing/005-Grammarly-Advanced.png" />
        <div className="gallery">
          <img
            className="gallery-2-2"
            src="img/002-Marketing/005-Grammarly-Advanced-01.png"
          />
          <img src="img/002-Marketing/005-Grammarly-Advanced-02.png" />
          <img src="img/002-Marketing/005-Grammarly-Advanced-03.png" />
        </div>
        <img src="img/002-Marketing/006-Grammarly-Tone-Detection.png" />
        <div className="animated-img">
          <video autoPlay muted loop>
            <source
              src="img/002-Marketing/007-About-Us@2x.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <img src="img/002-Marketing/008-Content-Hub.png" />
        <img src="img/002-Marketing/009-Pricing.png" />
      </article>

      <Footer />
    </div>
  );
}

export default Marketing;
