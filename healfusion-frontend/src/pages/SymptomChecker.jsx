import { useState } from "react";
import API from "../services/api";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/symptoms/check", {
        symptoms: symptoms,
      });

      setResult(res.data);
    } catch (err) {
      alert("Error checking symptoms");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Symptom Checker</h2>

      <form onSubmit={handleCheck}>
        <input
          type="text"
          placeholder="e.g fever, cough, headache"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <button type="submit">Check</button>
      </form>

      {loading && <p>Checking...</p>}

      {result && (
        <div>
          <h3>Possible Diseases</h3>
          <ul>
            {result.results?.map((item, index) => (
              <li key={index}>
                <b>{item.disease}</b> — Match Score: {item.score}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;
