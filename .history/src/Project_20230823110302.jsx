import "./App.css";


function Project() {
  return (
    <div className="Project">
          <div>
            <h2>Tasks - DentrisDMS</h2>
            <p>
              Tasks.dentrisDMS is a task system built using the CodeIgnitor framework in PHP. With some basic Javascript and simple styling with CSS was I able to build a simple to-do-list feature
              allowing users who work for The Pas Dental Clinic to make task assigning easy and practical for business use. This website helps 30 active employees manage their tasks
              for this dental clinic, making their work extremly efficent. 
            </p>
            <div className="ProjectTags">
              <div>CodeIgnitor</div>
              <div>PHP</div>
              <div>SQL</div>
            </div>
            <a class="ProjectLink" href="http://tasks.dentrisdms.com/">
              View Project
            </a>
          </div>
          <img src="https://i.ibb.co/cQrJkSg/dentris-square.png" alt="Project 1" />
        </div>
  );
}

export default Project;
