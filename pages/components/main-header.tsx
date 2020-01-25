import { useState, useEffect } from 'react';

export default function Header() {
  const [st, setSt] = useState({
    fontSize: '2rem',
    opacity: 1,
  });

  const handleScroll = debounce((e: Event) => {
    let scrollTop = (e.srcElement as Document).documentElement.scrollTop;
    if (scrollTop > 0) {
      setSt({
        fontSize: '0rem',
        opacity: 0,
      });
    } else {
      setSt({
        fontSize: '2rem',
        opacity: 1,
      });
    }
  });

  useEffect(() => {
    if (!window) return;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="wrapper">
      <div className="about">
        <b>
          <span className="shrinkOnScroll" style={st}>
            I’m{' '}
          </span>
          Tanskyi
        </b>
        <br />
        <span className="hideOnScroll">
          Product Designer at Grammarly passionate about building delightful
          products that people love to use everyday.
        </span>
      </div>
      <div className="social">
        <ul>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yuriy-tanskiy-65505139/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/yuriytan/">
                Instagram
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </header>
  );
}

const debounce = function(fn) {
  // Setup a timer
  let timeout;

  // Return a function to run debounced
  return function() {
    // Setup the arguments
    const context = this;
    const args = arguments;

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function() {
      fn.apply(context, args);
    });
  };
};
