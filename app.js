function sendEmail() {
  const recipientEmail = "alphanj3@gmail.com";

  try {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const locationSelect = document.getElementById('location');
    const location = locationSelect.selectedIndex > 0 ? locationSelect.options[locationSelect.selectedIndex].value : "Not selected";

    const experience1 = document.querySelector('input[name="experience1"]:checked')?.value || "Not specified";
    const experience2 = document.querySelector('input[name="experience2"]:checked')?.value || "Not specified";
    const experience2Details = document.getElementById('experience2')?.value.trim() || "No details provided";

    const coffeeKnowledgeSelect = document.getElementById('experience3');
    const coffeeKnowledge = coffeeKnowledgeSelect.selectedIndex > 0 ? coffeeKnowledgeSelect.options[coffeeKnowledgeSelect.selectedIndex].value : "Not selected";

    const expectations = Array.from(document.querySelectorAll('input[name="expectations"]:checked:not([disabled])'))
      .map(input => input.value)
      .join(", ") || "None selected";

    const trainingInterest = Array.from(document.querySelectorAll('input[name="teg1"]:checked:not([disabled])'))
      .map(input => input.value)
      .join(", ") || "None selected";

    const healthIssues = document.querySelector('input[name="YES"]:checked')?.value || "Not answered";
    const healthDetails = document.getElementById('hs1')?.value.trim() || "No details provided";

    const allergies = document.querySelector('input[name="allergies"]:checked')?.value || "Not answered";
    const allergyDetails = document.getElementById('allergy-details')?.value.trim() || "No details provided";

    const subject = `Barista Course Application from ${fullname}`;
    let body = `New Barista Course Application:\n\n`;
    body += `--- Personal Details ---\n`;
    body += `Name: ${fullname}\n`;
    body += `Email: ${email}\n`;
    body += `Phone: ${phone}\n`;
    body += `Location: ${location}\n\n`;

    body += `--- Experience Level ---\n`;
    body += `Worked as a BARISTA level: ${experience1}\n`;
    body += `Prior coffee preparation experience: ${experience2}\n`;
    if (experience2 === 'yes' && experience2Details !== "No details provided") {
      body += `  Details: ${experience2Details}\n`;
    }
    body += `Coffee knowledge level: ${coffeeKnowledge}\n\n`;

    body += `--- Training Expectations & Goals ---\n`;
    body += `Expectations from program: ${expectations}\n`;
    body += `Interest in training reason(s): ${trainingInterest}\n\n`;

    body += `--- Health & Safety ---\n`;
    body += `Any health issues affecting training: ${healthIssues}\n`;
    if (healthIssues === 'yes' && healthDetails !== "No details provided") {
      body += `  Details: ${healthDetails}\n`;
    }
    body += `Any allergies/conditions for instructor: ${allergies}\n`;
    if (allergies === 'yes' && allergyDetails !== "No details provided") {
      body += `  Details: ${allergyDetails}\n`;
    }

    body += `\n--- End of Application ---`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    if (mailtoLink.length > 2000) {
      alert("Error: The collected information is too long to send via email link. Please contact us directly.");
      console.warn("Mailto link exceeded 2000 characters.");
      return;
    }

    window.location.href = mailtoLink;
    alert("Your email application should open now. Please check the details and click 'Send'.");

  } catch (error) {
    console.error("Error finding form elements or constructing email:", error);
    alert("An error occurred while preparing your application. Please check the form or contact us directly.");
  }
}