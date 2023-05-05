import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
           <aside className="left">
                    <img className="avatar" src="assets/Heather Avatar.jpeg" />
                    <ul>
                        <li><a href="#About Me">About Me</a></li>
                        <li><a href="#My Work">My Work</a></li>
                        <li><a href="#CSS">CSS</a></li>
                        <li><a href="#Bug Investigation">Bug Investigation</a></li>
                        <li><a href="#Implementation">Implementation</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                    <br /><br />
                    <p>"The way to get started is to quit talking and begin doing."<br />-Walt Disney </p>
                </aside>
                <main className="content">
                    <h2 className="About Me">About Me</h2>
                    <p>My name is Heather and I live in Washington State. I am currently enrolled in UCB full stack bootcamp. I am very excited to continue my career in the exciting world of technology and coding.  </p>
                    <hr />
                    <h2 className="My Work">My Work</h2>
                    <p>I currently work for a SAAS company called Waitwhile. I handle many technical tasks at Waitwhile. I began learning how to investigate issues from a colleage which in turn started my career in the technical industry. I have listed a few of my many skills below. </p>
                    <table>
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
                    </table>
                    <img className="tech" src="assets/technicalpic.png" />
                    <hr />
                    <h2 className="Contact">How Can You Contact Me?</h2>

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
