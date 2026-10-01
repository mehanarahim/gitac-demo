function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;

  alert(
    `Thank you, ${name}!\n\n` +
    `Your booking request has been received.\n` +
    `Date: ${date}\n` +
    `Guests: ${guests}`
  );

  this.reset();
});
