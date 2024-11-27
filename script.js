var _a;
// Select the form and attach a submit event listener
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get form input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('skills');
    // Ensure all elements are present
    if (nameElement && emailElement && phoneElement &&  educationElement && experienceElement && skillsElement) {
        // Extract values from elements
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create a resume preview section
        var resumeResult = "\n            <h2>Resume Preview</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n                <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Get the resume result element and display the preview
        var resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
        }
        else {
            console.error('Could not find the resume result element');
        }
    }
    else {
        console.error('Some form fields are missing');
    }
});
