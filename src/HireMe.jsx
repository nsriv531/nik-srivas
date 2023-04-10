import "./App.css";

function HireMe() {
  return (
    <div className="HireMe">
      <h1 id="hireme">Let's Work Together!</h1>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <br />
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" />
        <br />
        <label for="service">Service Required</label>
        <select id="service" name="service">
          <option value="webdesign">Web Design</option>
          <option value="softwareengineering">Software Engineering</option>
          <option value="gamedevelopment">Game Development</option>
        </select>
        <br />
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Be as detailed as possible"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HireMe;
