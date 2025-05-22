// Sample data - In real apps, fetch from backend
const reports = [
  {
    title: "General Checkup",
    date: "2024-12-05",
    doctor: "Dr. Sharma",
    description: "Routine check-up, all vitals normal.",
    url: "#"
  },
  {
    title: "Diabetes Consultation",
    date: "2025-03-10",
    doctor: "Dr. Mehta",
    description: "Blood sugar levels evaluated. Prescribed medication adjusted.",
    url: "#"
  },
  {
    title: "ENT Diagnosis",
    date: "2025-04-15",
    doctor: "Dr. Kapoor",
    description: "Treatment for mild sinus infection started.",
    url: "#"
  }
];

const reportList = document.getElementById("reportList");

reports.forEach(report => {
  const card = document.createElement("div");
  card.className = "report-card";

  card.innerHTML = `
    <h3>${report.title}</h3>
    <p><strong>Date:</strong> ${report.date}</p>
    <p><strong>Doctor:</strong> ${report.doctor}</p>
    <p>${report.description}</p>
    <a href="${report.url}" class="view-btn">View Report</a>
  `;

  reportList.appendChild(card);
});
