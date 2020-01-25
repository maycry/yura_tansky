type Props = { isMain: boolean };
export function Header(props: Props) {
  return props.isMain ? (
    <header className="wrapper">
      <div className="about">
        <b>
          <span className="shrinkOnScroll">I’m </span>Tanskyi
          <span className="hideOnScroll">.</span>
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
  ) : (
    <header className="wrapper notSticky">
      <div className="logo">
        <a href="index.html">
          <b>Tanskyi</b>
        </a>
      </div>
      <div className="social">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/yuriy-tanskiy-65505139/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yuriytan/">Instagram</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
