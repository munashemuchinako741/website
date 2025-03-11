// Get the modal and the form
const successModal = document.getElementById("successModal");
const contactForm = document.getElementById("contact-form");

// Add an event listener to the form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Send the form data to the API
  fetch(contactForm.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Display the success message in the modal
      const modalBody = successModal.querySelector(".modal-body");
      modalBody.textContent =
        "Thank you for reaching out! Your email has been sent successfully. We'll get back to you soon to discuss further. Have a great day!";

      // Show the modal
      const modal = new bootstrap.Modal(successModal);
      modal.show();
    })
    .catch((error) => {
      console.error(error);
    });
});
