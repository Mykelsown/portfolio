export default function submitFormData() {
  const form = document.querySelector('form[name="contact"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validation check
    if (!name || !email || !message) {
      alert("Please fill the form before submitting");
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      form.reset();
      alert("Message sent successfully! 🚀");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  });
}
