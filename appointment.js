document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const doctor = document.getElementById("doctor").value;

  alert(`Appointment Booked Successfully!\n\nName: ${name}\nDoctor: ${doctor}\nDate: ${date}\nConfirmation sent to ${email}`);
  
  this.reset(); // Optional: Clear form after submission
});
