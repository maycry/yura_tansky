import { Header } from './components/header';
import { Footer } from './components/footer';

function StyleGuide() {
  return (
    <div>
      <Header isMain={false} />
      <article className="wrapper">
        <h1>Grammarly Dynamic Writing Style Guides</h1>
        <img src="img/003-Style/001-Intro.png" />
        <section>
          <p>
            <b>Style Guide</b> allows companies to define their living writing
            guidelines and make sure that employees adheres to company voice,
            tone and rules when they write.{' '}
          </p>
        </section>
        <img src="img/003-Style/002-Editor.png" />
        <section>
          <p>
            <b>Problem</b> we tried to solve is that organizations struggle with
            making sure that all their written communication is on brand across
            different channels. <b>Our goal</b> was to provide a way for
            companies to help their employees adhere to communication guidelines
            as they write.
          </p>
        </section>
        <img src="img/003-Style/003-Gmail.png" />
        <div className="gallery">
          <img src="img/003-Style/004-Research-01.png" />
          <img src="img/003-Style/004-Research-02.png" />
        </div>
        <img src="img/003-Style/004-2-Job-Story.png" />
        <div className="gallery">
          <img src="img/003-Style/005-Creating-Rules-01.png" />
          <img src="img/003-Style/005-Creating-Rules-02.png" />
        </div>
        <img src="img/003-Style/006-Admin.png" />
        <img src="img/003-Style/007-Onboarding.png" />
      </article>

      <Footer />
    </div>
  );
}

export default StyleGuide;
