import { useState } from "react";
import API from "../services/api";

function Admin() {
  const [name, setName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [medicines, setMedicines] = useState("");

  const addDisease = async (e) => {
    e.preventDefault();

    try {
      await API.post("/diseases", {
        name,
        symptoms: symptoms.split(","),
        medicines: medicines.split(","),
      });

      alert("Disease Added Successfully");
      setName("");
      setSymptoms("");
      setMedicines("");
    } catch (err) {
      alert("Error adding disease");
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <form onSubmit={addDisease}>
        <input
          placeholder="Disease Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Symptoms (comma separated)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />

        <input
          placeholder="Medicines (comma separated)"
          value={medicines}
          onChange={(e) => setMedicines(e.target.value)}
        />

        <button type="submit">Add Disease</button>
      </form>
    </div>
  );
}

export default Admin;
