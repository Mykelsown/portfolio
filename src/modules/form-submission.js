export default function submitFormData() {
  const form = document.querySelector('form[name="contact"]');
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    if (name.value === "" || email.value === "" || message.value === "") {
      alert("Please fill the form before submiting");
      throw new Error("Input field empty");
    } else {
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        form.reset();
        alert("Message sent successfully! 🚀");
      } catch (error) {
        alert("Something went wrong. Please try again.");
      }
    }
  });
}
