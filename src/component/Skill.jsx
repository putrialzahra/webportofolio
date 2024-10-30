export default function Skill() {
    return (
      <>  
        <section id="skills">
      <div className="main-container">
        <h1 className="section-title-skills">Experience & Skills</h1>
        <div className="skills-grid">
          <div className="skills-left">
            {/* <!-- experience 1 --> */}
            <div className="experience">
              <div className="line">
                <div></div>
              </div>
              <div className="experience-info">
                <h4 className="experience-title">
                  Machine Learning 
                </h4>
                <p>Intern at Bangkit Academy  </p>
                <h4 className="experience-date">February 2024 - July 2024</h4>
              </div>
            </div>
  
            {/* <!-- experience 2 --> */}
            <div className="experience">
              <div className="line">
                <div></div>
              </div>
              <div className="experience-info">
                <h4 className="experience-title">
                  Web Development & UI/UX Design
                </h4>
                <p>Intern at Infinite Learning</p>
                <h4 className="experience-date">September 2024 - Now</h4>
              </div>
            </div>
  
            {/* <!-- experience 3 --> */}
            <div className="experience">
              <div className="line">
                <div></div>
              </div>
              <div className="experience-info">
                <h4 className="experience-title">
                  UI/UX Contributor
                </h4>
                <p>at Infinite Learning</p>
                <h4 className="experience-date">October 2024 - Now</h4>
              </div>
            </div>
          </div>
          <div className="skills-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              aliquam ea quod aut commodi enim sunt, cumque obcaecati
              laboriosam, quia deleniti dolorum ad aperiam velit exercitationem
              cum illo unde voluptatum?
            </p>
            <div className="skills-list">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>FIGMA</li>
                <li>CANVA</li>
              </ul>
              <ul>
                <li>TIME MANAGEMENT</li>
                <li>RESPOSIBILITY</li>
                <li>CRITICAL THINKING</li>
                <li>PROBLEM SOLVING</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
    );
  }
  