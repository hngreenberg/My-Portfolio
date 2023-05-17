import React from 'react';

function Work() {
  return (
    <div>
      <h2 id="my-work">My Work</h2>
      <p>
        I currently work for a SAAS company called Waitwhile. I handle many technical tasks at Waitwhile. I am currently finishing up Full Stack Bootcamp through UC Berkeley Extension. Here are some examples of the work that I have done within the last 6 months.
      </p>
      <table>
        <tbody>
          <tr>
            <th>FilmFinder</th>
            <th>Heather's Weather App</th>
            <th>aquaDown</th>
          </tr>
          <tr>
            <td>
              This project was a group project that utilized HTML, CSS, and JavaScript, and third-party APIs to build an app that allows a movie buff to search the database for movies and their ratings.
              Github repo: <a href="https://github.com/hngreenberg/Film-Finder">https://github.com/hngreenberg/Film-Finder</a>
              <img src="/movieapp.png" alt="Movie App" />
            </td>
            <td>I investigate any issues that come down from our support team. I create bug tickets for our engineers using Gitlab.</td>
            <td>I assist our sales team with Enterprise client onboarding by answering any technical questions that they may have.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Work;
