import React, { useState, useEffect } from "react";
import { addRow } from "./db";
import "./JudgingRubric.css";

const App = () => {
  const [teamName, setTeamName] = useState("");
  const [judgeName, setJudgeName] = useState("UNK");
  const [ratings, setRatings] = useState({
    q1: 0,
    q2: 0,
    q6: 0,
    q10: 0,
    q5: 0,
  });
  const [recommendForStrategy, setRecommendForStrategy] = useState(false);
  const [notes, setNotes] = useState(""); // Added state for notes

  // const location = useLocation();

  // useEffect(() => {
  //   if (location.state && location.state.username) {
  //     setJudgeName(location.state.username);
  //   }
  // }, [location.state]);

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    const validValue = Math.min(Math.max(Number(value), 1), 10);
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: validValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the addRow function to insert form data into the Supabase table
    await addRow(
      teamName,                    // teamName
      judgeName,                   // judge's name from props
      ratings.q1,                  // impact score
      ratings.q2,                  // creativity score
      ratings.q6,                  // validity score
      ratings.q10,                 // relevance score
      ratings.q5,                  // presentation score
      recommendForStrategy,        // strategy boolean (checkbox)
      notes                        // strategyBox (optional notes)
    );

    // Optionally clear the form after submission
    setTeamName('');
    setRatings({
      q1: '', q2: '', q6: '', q10: '', q5: ''
    });
    setRecommendForStrategy(false);
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="rubric-container">
      <h2>Judging Rubric</h2>

      <div className="team-judge-info">
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input
            id="teamName"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Judge's Name:</label>
          <span className="judge-name">{judgeName}</span>
        </div>
      </div>

      {/* Ratings Sections with Descriptions */}
      <div className="rating-section">
        <h3>Impact</h3>
        <div>
          <div className="question">
            <span>1.</span>How much impact can this project have?
          </div>
          <div className="question">
            <span>2.</span> Does it solve a big problem or a little problem?
          </div>
          <div className="question">
            <span>3.</span> Will it inspire or help many, or a few?
          </div>
        </div>
        <input
          type="number"
          name="q1"
          value={ratings.q1}
          min="3"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Creativity</h3>
        <div>
          <div className="question">
            <span>1. Originality and Novelty: </span> Does the project introduce something entirely new, or is it built upon existing ideas? How fresh and innovative are the concepts? Does it push boundaries or offer a unique perspective?
          </div>
          <div className="question">
            <span>2. Creative Approach and Thinking:</span> Are unconventional methods used to solve the problem? Does the project demonstrate innovative problem-solving or fresh ideas that stand out from typical approaches? How well does it balance improvement and innovation?
          </div>
        </div>
        <input
          type="number"
          name="q2"
          value={ratings.q2}
          min="3"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Validity</h3>
        <div>
          <div className="question">
            <span>1. Scientific Basis:</span> Is it grounded in solid science?
          </div>
          <div className="question">
            <span>2. Feasibility:</span> Can it be realistically implemented?
          </div>
          <div className="question">
            <span>3. Sustainability:</span> Will it remain effective over time?
          </div>
          <div className="question">
            <span>4. Effectiveness:</span> Will it do what it sets out to do?
          </div>
        </div>
        <input
          type="number"
          name="q6"
          value={ratings.q6}
          min="3"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Relevance</h3>
        <div>
          <div className="question">
            <span>1. Challenge Fit:</span> Does it align with the challenge?
          </div>
          <div className="question">
            <span>2. User-Friendly:</span> Is it easy for users to engage with?
          </div>
          <div className="question">
            <span>3. Future Relevance:</span> Will it stay useful long-term?
          </div>
          <div className="question">
            <span>4. Technical feasibility: </span> Is it technically feasible?
          </div>
          <div className="question">
            <span>5. Completeness:</span> Is it a complete solution or does it have a long way to go?
          </div>
        </div>
        <input
          type="number"
          name="q10"
          value={ratings.q10}
          min="3"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Presentation</h3>
        <div>
          <div className="question">
            <span>1. storytelling:</span> Were they effective in telling the story of the project: the challenge, the solution?
          </div>
          <div className="question">
            <span>2. Visual Appeal:</span> Is the presentation attractive?
          </div>
          <div className="question">
            <span>3. Structure:</span> Is the information organized?
          </div>
          <div className="question">
            <span>4. Engagement:</span> Is it engaging for the audience?
          </div>
          <div className="question">
            <span>5. Communication:</span> Are ideas clearly communicated?
          </div>
        </div>
        <input
          type="number"
          name="q5"
          value={ratings.q5}
          min="3"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      {/* Best Strategy Award Section */}
      <div className="strategy-section">
        <h3>Best Strategy Award</h3>
        <p>
          1. Problem Analysis: How well did the team analyze the problem before starting their solution? Did they clearly define the challenge and identify key requirements? Did their approach clearly demonstrate how they intended to solve the problem?
        </p>
        <p>
          2. Team Roles: How effectively were roles assigned? Was there a clear task distribution and good collaboration?
        </p>
        <p>
          3. Research and Data: How well did the team use research and integrate NASA data or other sources into their solution?
        </p>

        <div>
          <label htmlFor="recommendForStrategy">
            Recommend for Best Strategy Award:
          </label>
          <input
            type="checkbox"
            id="recommendForStrategy"
            checked={recommendForStrategy}
            onChange={(e) => setRecommendForStrategy(e.target.checked)}
          />
        </div>

        {/* Text Box for Notes */}
        <div>
          <label htmlFor="notes">Strategy BOX (optional):</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter any additional notes here"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default App;
