import React from 'react';


function Home () {
  // render() {
    return (
      <div>
        <aside className="left">
          <img className="avatar" src="/avatar.jpeg" />
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#my-work">My Work</a></li>
            {/* <li><a href="#css">CSS</a></li>
            <li><a href="#bug-investigation">Bug Investigation</a></li>
            <li><a href="#implementation">Implementation</a></li> */}
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
          <br /><br />
          <p>"The way to get started is to quit talking and begin doing."<br />-Walt Disney </p>
        </aside>
        <main className="content">
          <h2 id="about-me">About Me</h2>
          <p> I live in Washington State. I am currently enrolled in UCB full stack bootcamp. I am very excited to continue my career in the exciting world of technology and coding.  </p>
          <hr />
          <h2 id="my-work">My Work</h2>
      <p>
        I currently work for a SAAS company called Waitwhile. I handle many technical tasks at Waitwhile. I am currently finishing up Full Stack Bootcamp through UC Berkeley Extension. Here are some examples of the work that I have done within the last 6 months.
      </p>
      <table>
        <tbody>
          <tr>
            <th> <a href="https://github.com/hngreenberg/HW5---Heather-s-Weather-">Film Finder</a></th>
            <th><a href="https://github.com/hngreenberg/Planning-Power">Planning Power</a></th>
            <th><a href="https://github.com/hngreenberg/aquaDown">aquaDown</a></th>
          </tr>
          <tr>
            <td>
            <div style={{padding: '10px'}}>
          <p>FilmFinder is a group project that utilized HTML, CSS, and JavaScript, and third-party APIs to build an app that allows a movie buff to search the database for movies and their ratings.</p>
          <img id="movie" src="/movieapp.png" alt="Movie App"/>
        </div>
      </td>
      <td>
        <div style={{padding: '10px'}}>
          <p>Planning Power is an app to keep track of daily activities and personal schedule. This app is designed to add to the schedule, update, and remove items on the planner. I used HTML, CSS, JavaScript, and jQuery.</p>
          <img id="planner" src="/planner.png" alt="Daily Planner"/>
        </div>
      </td>
      <td>
        <div style={{padding: '10px'}}>
          <p>aquaDown is a plant care application that helps users take care of their plants by providing them with accurate and timely information about watering and sun exposure. The app was built using Node.js, Sequelize, MySQL, JavaScript, and Express.</p>
          <img id="plant" src="/aquadown2.png" alt="Plant App"/>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
          {/* <img className="tech" src="public/technicalpic.png" /> */}
          <hr />
          <h2 id="resume"><a href="https://github.com/hngreenberg/aquaDown">Please review my resume for my work experience!</a></h2>
          <h2 id="contact">How Can You Contact Me?</h2>
          <form>
            <label>Email: <input type="text" name="email" /></label><br />
            <label> Mobile: <input type="text" name="mobile" /> </label><br />
            <textarea name="comments" rows="4">Enter your message</textarea><br />
            <input type="submit" value="Submit" /><br />
            </form>
            {/* <h2 id="resume"><a href="https://github.com/hngreenberg/aquaDown">Please review my resume for my work experience!</a></h2> */}
        </main>
      </div>
    );
  
}

export default Home;
