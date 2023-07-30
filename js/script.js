document.addEventListener('DOMContentLoaded',() => {
	fetch('cypress/fixtures/resume-data.json?v='+Date.now())
		.then((response) => {
		  if (!response.ok) {
			throw new Error('File not found');
		  }
		  return response.json();
		})
		.then(data => {
			//console.log('Simple Console Message');
			// Profile Name
			document.getElementById('profile_name').innerHTML="<h1> I'm "+data.personalDetails.name+"</h1>";
			
			// Primary Skills
			const primarySkills=document.getElementById('primarySkills');
			data.primarySkills.forEach(skill => {
				primarySkills.innerHTML+="<span>"+skill.skill+"</span>";
			});
			
			 // Introduction
			document.getElementById('introduction').innerHTML="<p class='lead'>"+data.introducton.statement+"</p>";
			
			// Personal Details
			document.getElementById('fullName').textContent=data.personalDetails.name;
			document.getElementById('dateOfBirth').textContent=data.personalDetails.DOB;
			document.getElementById('jobTitle').textContent=data.personalDetails.jobTitle;
			document.getElementById('personalWebsite').textContent=data.personalDetails.website;
			document.getElementById('profileEmail').textContent=data.personalDetails.email;
			
			//Skills
			const skills=document.getElementById('skills');
			data.skills.forEach(skill => {
				skills.innerHTML+="<li><div class='progress percent"+skill.score*10+"'><span>"+skill.score+"</span></div><strong>"+skill.skill+"</strong></li>";
			});
			
			// Experiences
			const experiences=document.getElementById('experiences');
			data.experiences.forEach(experience => {
				experiences.innerHTML+="<div class='timeline-block'><div class='timeline-ico'><i class='fa fa-briefcase'></i></div><div class='timeline-header'><h3>"+experience.position+"</h3><p>"+experience.startDate+" - "+experience.endDate+"</p></div><div class='timeline-content'><h4>"+experience.company+"</h4><p>"+experience.description+"</p></div></div>";
			});
			
			// Educations
			const educations=document.getElementById('educations');
			data.education.forEach(education => {
				educations.innerHTML+="<div class='timeline-block'><div class='timeline-ico'><i class='fa fa-graduation-cap'></i></div><div class='timeline-header'><h3>"+education.degree+"</h3><p>"+education.startDate+" - "+education.endDate+"</p></div><div class='timeline-content'><h4>"+education.institution+"</h4><p>"+education.description+"</p></div></div>";
			});
	})
	
	.catch((error) => {
      
	  if (error.message === 'File not found') {
		document.getElementById('about').innerHTML = '<p>Resume data file not found. Please make sure the file exists.</p>';
      } else if (error instanceof SyntaxError) {
        // JSON parsing error
		document.getElementById('about').innerHTML = '<p>Invalid data format. Please check the JSON file.</p>';
      } else if (error instanceof TypeError && error.message.includes('fetch')) {
        // Network error or fetch related error
		document.getElementById('about').innerHTML = '<p>Could not fetch data. Please check your internet connection.</p>';
      } else {
        // Other unexpected errors
		document.getElementById('about').innerHTML = '<p>An unexpected error occurred. Please try again later.</p>';
      }
    });
});

