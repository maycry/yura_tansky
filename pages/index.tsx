import { useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Link from 'next/link';

const defaultImg = 'img/Index/Material Test 002.png';

function HomePage() {
  const [heroImg, setHeroImg] = useState(defaultImg);
  const setDefaultImage = () => setHeroImg(defaultImg);
  return (
    <div>
      <Header isMain />
      <div className="index-bottom wrapper">
        <div className="casestudies">
          <ul>
            <li
              className="menu-link"
              onMouseEnter={() =>
                setHeroImg('img/001-Design-Keyboard/001-Intro.png')
              }
              onMouseLeave={setDefaultImage}
            >
              <Link href="/001-Smarter-Keyboard">Smart Mobile Keyboard</Link>
            </li>
            <li
              className="menu-link"
              onMouseEnter={() => setHeroImg('img/003-Style/001-Intro.png')}
              onMouseLeave={setDefaultImage}
            >
              <Link href="/003-Style">Writing Style Guide</Link>
            </li>
            <li
              className="menu-link"
              onMouseEnter={() => setHeroImg('img/002-Marketing/001-Intro.png')}
              onMouseLeave={setDefaultImage}
            >
              <Link href="/002-Marketing">Grammarly Marketing</Link>
            </li>
          </ul>
        </div>
        <div className="demo">
          <img className="hero-img" src={heroImg} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
