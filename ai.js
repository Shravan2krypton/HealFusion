const diseaseData = {
  "fever": {
    modern: "Paracetamol, hydration, rest. Consult doctor if persists over 3 days.",
    ayurvedic: "Tulsi tea, giloy juice, coriander seed water."
  },
  "diabetes": {
    modern: "Insulin or Metformin, low-sugar diet, regular exercise.",
    ayurvedic: "Jamun seeds powder, methi water, karela juice."
  },
  "cough": {
    modern: "Cough syrups, steam inhalation, antibiotics (if bacterial).",
    ayurvedic: "Honey and ginger, turmeric milk, tulsi leaves."
  },
  "headache": {
    modern: "Pain relievers like ibuprofen, hydration, rest.",
    ayurvedic: "Peppermint oil massage, ginger tea, shankhpushpi syrup."
  }
};

function findSolution() {
  const input = document.getElementById("diseaseInput").value.toLowerCase();
  const data = diseaseData[input];

  const card = document.getElementById("solutionCard");
  if (data) {
    document.getElementById("diseaseName").innerText = input.toUpperCase();
    document.getElementById("modernTreatment").innerText = data.modern;
    document.getElementById("ayurvedicRemedy").innerText = data.ayurvedic;
    card.classList.remove("hidden");
  } else {
    alert("Disease not found in database. Try another.");
    card.classList.add("hidden");
  }
}