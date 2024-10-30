export default function Header() {
    return (
      <div>
        {/* header */}
        <header>
          <div className="main-container">
            <div className="nav">
              <div className="logo">
                <a href="">Web Profile</a>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skills">Skill</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <section id="home">
              <div className="home-left">
                <h3 className="pre-title">Halo Guys 🚀</h3>
                <h1 className="home-name">I am Putri Alzahra</h1>
                <p>
                  Information Systems Student at Palcomtech Institute of
                  Technology and Business | UI/UX Design Enthusiast
                </p>
                <br />
                <a href="https://drive.google.com">
                  <button className="btn">My Resume</button>
                </a>
              </div>
              <div className="home-right">
                <img src="photo1.png" alt="My photos" />
              </div>
            </section>
          </div>
        </header>
        {/* End header */}
      </div>
    );
  }
  