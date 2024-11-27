// Select the form and attach a submit event listener
document.getElementById('resumeform')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('Experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Ensure all elements are present
    if (nameElement && emailElement && phoneElement &&  educationElement && experienceElement && skillsElement) {
        // Extract values from elements
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create a resume preview section
        const resumeResult = `
            <h2>Resume Preview</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            const skills = skillsElement.value;
            const skills = skillsElement.value;
            const skills = skillsElement.value;
            const skills = skillsElement.value;
            const skills = skillsElement.value;
            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Get the resume result element and display the preview
        const resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
        } else {
            console.error('Could not find the resume result element');
        }
    } else {
        console.error('Some form fields are missing');
    }
});
