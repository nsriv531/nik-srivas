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
                I'm a board member at AC Robotics, a non-for-profit organization that is about teaching youth and post-secondary about robotics. I lead the entire education team that consist of Post-Secondary students,
                Where we run three different FIRST Robotics teams.  As of last year, our First Tech Challenge Team, Neo Robotics, reached the provincial championships in Red Deer of 2023, where we placed 
                20th out of 50 teams that competed. I also help the organization run STEM related challenges and competitions that revolve around educating the youth and freshman
                post-secondary students.
                </p>
              <div className="VolunteeringTags">
                <div>Leadership</div>
                <div>Creativity</div>
                <div>Teaching</div>
                <div>Teamwork</div>
                <div>Engineering</div>
                <div>Event Planning</div>
                <div>Java</div>
              </div>
              <a class="VolunteeringLink" href="https://www.acrobotics.ca">
                View Project
              </a>
            </div>
            <img src="https://cdn.discordapp.com/attachments/803773872167059488/1120031830545014834/020A9400.JPG" alt="Project 1" />
          </div>
          <div className="Project">
            <img src="https://media.discordapp.net/attachments/1080855321796427858/1110994064465199195/gdd-blue-banner.png" alt="Project 1" />
            <div>
              <h2>President - MRU GDDC</h2>
              <p>
               At Mount Royal University, I started my schools first club revolving around Game Design and Development. Through this club and my exec team,
               I was able to facilitate a great environment for those wanting to learn game development. This was done through my efforts in hosting events, such
               as game jams, social meet ups, as well as the collaboration with other organizations and clubs throughout calgary and the alberta region. 
              </p>
              <div className="VolunteeringTags">
                <div>Leadership</div>
                <div>Game Development</div>
                <div>Event Handling</div>
                <div>Teamwork</div>
              </div>
              <a class="VolunteeringLink" href="https://mru-gddc.vercel.app/">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Volunteering;