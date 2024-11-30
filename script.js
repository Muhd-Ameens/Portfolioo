/* script.js */

// Scroll to section functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  // Theme toggle functionality
 
  
  // Toggle the navigation menu
document.getElementById("menu-toggle").addEventListener("click", function() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
});


document.querySelector('.send-message-btn').addEventListener('click', async (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('http://127.0.0.1:8000/api/send-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send the message.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error sending the message.');
  }
});


