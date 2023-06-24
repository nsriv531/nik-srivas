import "./App.css";

function Volunteering() {

    return (
        <div className="Volunteering">
        <h1 id="projects">Volunteering</h1>
        <h2>AC Robotics and Game Development</h2>
        <div className="ProjectContainer">
          <div className="Project">
            <div>
              <h2>Director of Education - AC Robotics
              </h2>
              <p>
                At AC Robotics, I lead the entire educataion team for the non-profit organization of AC Robotics.
                We're an organization that has extended into all post secondary schools here in Calgary. I run all our teams in
                the name of First Robotics. As of last year, our first FTC reached the provincial championships, where we placed 
                top 20 in a team of 100 people.
                </p>
              <div className="ProjectTags">
                <div>Leadership</div>
                <div>Creativity</div>
                <div>Initiative</div>
                <div>Java</div>
              </div>
              <a class="ProjectLink" href="https://www.google.com">
                View Project
              </a>
            </div>
            <img src="https://via.placeholder.com/600" alt="Project 1" />
          </div>
          <div className="Project">
            <img src="https://media.discordapp.net/attachments/1080855321796427858/1110994064465199195/gdd-blue-banner.png" alt="Project 1" />
            <div>
              <h2>President - MRU GDDC</h2>
              <p>
               At Mount Royal University, I started my schools first club revolving around Game Design and Development. Through this club and my exec team,
               I was able to faciliate a great environment for those wanting to learn game development. This was done through my efforts in hosting events, such
               as game jams, social meet ups, as well as the collaboration with other organizations and clubs throughout calgary and the alberta region. 
              </p>
              <div className="ProjectTags">
                <div>Leadership</div>
                <div>Game Development</div>
                <div>Event Handeling</div>
              </div>
              <a class="ProjectLink" href="https://mru-gddc.vercel.app/">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Volunteering;