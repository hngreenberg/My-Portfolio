import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <aside className="left">
          <img className="avatar" src="public/Heather Avatar.jpeg" />
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#my-work">My Work</a></li>
            <li><a href="#css">CSS</a></li>
            <li><a href="#bug-investigation">Bug Investigation</a></li>
            <li><a href="#implementation">Implementation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <br /><br />
          <p>"The way to get started is to quit talking and begin doing."<br />-Walt Disney </p>
        </aside>
        <main className="content">
          <h2 id="about-me">About Me</h2>
          <p>My name is Heather and I live in Washington State. I am currently enrolled in UCB full stack bootcamp. I am very excited to continue my career in the exciting world of technology and coding.  </p>
          <hr />
          <h2 id="my-work">My Work</h2>
          <p>I currently work for a SAAS company called Waitwhile. I handle many technical tasks at Waitwhile. I began learning how to investigate issues from a colleague which in turn started my career in the technical industry. I have listed a few of my many skills below. </p>
          <table>
            <tbody>
              <tr>
                <th>CSS</th>
                <th>Bug Investigation</th>
                <th>Implementation</th>
              </tr>
              <tr>
                <td>I utilize CSS to manipulate existing code to create brand styling for our Enterprise clients.</td>
                <td>I investigate any issues that come down from our support team. I create bug tickets for our engineers using Gitlab.</td>
                <td>I assist our sales team with Enterprise client onboarding by answering any technical questions that they may have.</td>
              </tr>
            </tbody>
          </table>
          <img className="tech" src="public/technicalpic.png" />
          <hr />
          <h2 id="contact">How Can You Contact Me?</h2>
          <form>
            <label>Email: <input type="text" name="email" /></label><br />
            <label> Mobile: <input type="text" name="mobile" /> </label><br />
            <textarea name="comments" rows="4">Enter your message</textarea><br />
            <input type="submit" value="Submit" /><br />
          </form>
        </main>
      </div>
    );
  }
}

export default Home;
