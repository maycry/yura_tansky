import { Header } from './components/header';
import { Footer } from './components/footer';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <Header isMain />
      <div className="index-bottom wrapper">
        <div className="casestudies">
          <ul>
            <li className="menu-link">
              <Link
                href="/001-Smarter-Keyboard"
                data-url="img/001-Design-Keyboard/001-Intro.png"
              >
                Smart Mobile Keyboard
              </Link>
            </li>
            <li className="menu-link">
              <Link href="/003-Style" data-url="img/003-Style/001-Intro.png">
                Writing Style Guide
              </Link>
            </li>
            <li className="menu-link">
              <Link
                href="/002-Marketing"
                data-url="img/002-Marketing/001-Intro.png"
              >
                Grammarly Marketing
              </Link>
            </li>
          </ul>
        </div>
        <div className="demo">
          <img className="hero-img" src="img/Index/Material Test 002.png" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
