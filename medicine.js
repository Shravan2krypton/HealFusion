const medicines = [
  {
    name: "Paracetamol 500mg",
    description: "Used for fever and pain relief.",
    image: "https://via.placeholder.com/100",
    price: "₹20"
  },
  {
    name: "Azithromycin 250mg",
    description: "Antibiotic for bacterial infections.",
    image: "https://via.placeholder.com/100",
    price: "₹80"
  },
  {
    name: "Cough Syrup",
    description: "Relieves cough and throat irritation.",
    image: "https://via.placeholder.com/100",
    price: "₹60"
  },
  {
    name: "Vitamin C Tablets",
    description: "Boosts immunity and energy.",
    image: "https://via.placeholder.com/100",
    price: "₹120"
  }
];

const container = document.getElementById('medicine-list');

medicines.forEach(med => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${med.image}" alt="${med.name}">
    <h3>${med.name}</h3>
    <p>${med.description}</p>
    <p><strong>${med.price}</strong></p>
    <button onclick="buyMedicine('${med.name}')">Buy Now</button>
  `;
  container.appendChild(card);
});

function buyMedicine(name) {
  alert(`You have ordered: ${name}. Our team will contact you soon!`);
}
