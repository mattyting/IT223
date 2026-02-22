// 1. Select the elements from the HTML
const submitBtn = document.getElementById('submit_btn');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const userMessage = document.getElementById('user_message');

// 2. Add an "Event Listener" to the button
submitBtn.addEventListener('click', function() {
    
    // 3. Simple Validation: Check if fields are empty
    if (userName.value === "" || userEmail.value === "" || userMessage.value === "") {
        alert("Please fill out all fields before submitting! 🚀");
    } else {
        // 4. Success Message
        alert(`Hi ${userName.value}! Thank you for your message. I'll get back to you soon!`);
        
        // 5. Optional: Log to console to see the data (Press F12 in browser)
        console.log("Form Submitted:", {
            name: userName.value,
            email: userEmail.value,
            message: userMessage.value
        });

        // 6. Clear the form after submission
        userName.value = "";
        userEmail.value = "";
        userMessage.value = "";
    }
});