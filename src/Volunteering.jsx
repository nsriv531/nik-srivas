import "./App.css";

function Volunteering() {

    return (
        <div className="Volunteering">
        <h1 id="projects">Volunteering and Extracurricular Activities</h1>
        <h2>AC Robotics and Game Development</h2>
        <div className="ProjectContainer">
          <div className="Project">
            <div>
              <h2>Director of Education for AC Robotics
              </h2>
              <p>
                I'm a board member at AC Robotics, a non-for-profit organization that is about teaching youth and post-secondary about robotics. I lead the entire education team that consist of post-secondary students and high school students,
                where we run three different FIRST Robotics teams. This is under it's own branch called 'The Hive'. As of last year, our First Tech Challenge Team, Neo Robotics, reached the provincial championships in Red Deer of 2023 for the PowerPlay Season, where we placed 
                20th out of 50 teams that competed in the entire season. I also help the organization run STEM related challenges and competitions that revolve around educating the youth and freshman
                post-secondary students.
                </p>
              <div className="VolunteeringTags">
                <div>Leadership</div>
                <div>Creativity</div>
                <div>Teaching</div>
                <div>Teamwork</div>
                <div>Engineering</div>
                <div>Project Management</div>
                <div>Java</div>
                <div>C++</div>
              </div>
              <a class="VolunteeringLink" href="https://www.acrobotics.ca">
                View Project
              </a>
            </div>
            <img src="https://pbs.twimg.com/media/FmdDVAmaUAAtwjH.jpg" alt="Project 1" />
          </div>
          <div className="Project">
            <img src="https://mru-gddc.vercel.app/assets/gdd-blue-banner-c53c6a24.png" alt="Project 1" />
            <div>
              <h2>President - MRU GDDC - May 2023 - April 2024</h2>
              <p>
               At Mount Royal University, I started my schools first club revolving around Game Design and Development. Through this club and my executive team,
               I was able to facilitate a great environment for those wanting to learn game development. This was done through my efforts in hosting events, such
               as game jams, social meet ups, as well as the collaboration with other organizations and clubs throughout calgary and the Alberta region. 
              </p>
              <div className="VolunteeringTags">
                <div>Leadership</div>
                <div>Game Development</div>
                <div>Project Management</div>
                <div>Teamwork</div>
                <div>C#</div>
                <div>Godot</div>
              </div>
              <a class="VolunteeringLink" href="https://mru-gddc.vercel.app/">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="Project">
            <img src="https://www.camru.ca/_next/static/media/logo-01.4de46dc6.svg" alt="Project 1" />
            <div>
              <h2>President - CAMRU</h2>
              <p>
                As President of CAMRU, I was resonsible for leading my team in various projects. This included workshops for students on building their technical skills, as well as orgranizing our Annual Networking Event, where we collaborated with companies like ATB, Lockheed Martin, CNRL and Keyera.
              </p>
              <div className="VolunteeringTags">
                <div>Leadership</div>
                <div>Project Management</div>
                <div>Teamwork</div>
              </div>
              <a class="VolunteeringLink" href="https://www.camru.ca/">
                View Project
              </a>
            </div>
          </div>
      </div>
    );
}

export default Volunteering;