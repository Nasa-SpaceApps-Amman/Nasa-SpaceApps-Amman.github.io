import "./Home.css";


const Home = () => {
  return (
    <div className="Home">
      {/* Header */}
      <header>
        <nav>
          <ul>
            <li>
              <a href="/login">Judging Rubric</a>
            </li>
            {/* <li>
              <a href="/login">Admin Portal</a>
            </li> */}
            <li className="search-icon">
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="nasa-title">
          <h1>NASA Space Apps Challenge</h1>
          <p className="tagline">
            sky is <span>not</span> the limit
          </p>
        </div>
        <img src="/images/6.png" alt="NASA Logo" className="header-logo" />
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>About Us...</h2>
        <div className="patches"></div>
        <div className="mission-text">
          <p>
            At NASA Space Apps Amman, our mission is to empower innovators, creators, and problem-solvers from all backgrounds to tackle some of the worlds most pressing challenges. As part of the global NASA Space Apps Challenge, we aim to inspire participants to use open data and cutting-edge technologies to address issues related to Earth, space, and beyond.

This competition brings together individuals with diverse skills, from software development and engineering to science, design, and entrepreneurship, encouraging collaboration and creativity. 




Our judges play a crucial role in evaluating these efforts, helping to recognize the most impactful and innovative solutions that could shape the future.

We are committed to fostering a community of changemakers, and we believe that with the right tools and opportunities, every participant has the potential to contribute to the advancement of science, technology, and sustainability.
          </p>
          <p>
            Thank you for being part of this exciting journey!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <img src="/images/6.png" alt="NASA Logo" className="header-logo" />
      </footer>
    </div>
  );
};

export default Home;