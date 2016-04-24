var bio = {
	"name": "Zippo Yap",
	"role": "Web Developer",
	"contacts": {
		"mobile": "0212612728",
		"email": "zippo.yap@gmail.com",
		"github": "zippo-yap",
		"twitter": "@ohmycodeness",
		"location": "Auckland"
	},
	"welcomeMessage": "Hello World",
	"skills": ["Javascript", "HTML", "CSS"],
	"bioPic": "images/fry.jpg",
	"display": function () {
		//Appends info to header
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMessage);

		// Appends info to contact info to header
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		// Appends info to footer
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);

		// Appends skills to header
		if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

			var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkills);
			formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkills);
			formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkills);
		};
	}
};

var work = {
	"jobs": [
	{
		"employer": "The College of Law",
		"title": "Assistant to Director of Programmes",
		"location": "Auckland",
		"dates": "June 2014 - December 2015",
		"description": "Assisting the Director in the administration and support of all New Zealand programmes. This role is primarily an administrative support role, which involves a significant IT and information management component."
	},
	{
		"employer": "The College of Law",
		"title": "Student Services Officer",
		"location": "Timbuktu",
		"dates": "June 2012 – June 2014",
		"description": "Key member of the Student Services team contributing to the delivery of excellent customer service. Front desk position with responsibilities in assisting with student enrolments and administration, campus operations and events and marketing. Involved in the re-design, implementation and launch of NZ Website."
	}],
	"display": function () {
		for (var job in work.jobs){
			if (work.jobs.hasOwnProperty(job)) {
				$("#workExperience").append(HTMLworkStart);
				var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
				$(".work-entry:last").append(formattedWorkEmployerTitle);
				var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedWorkDates);
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedWorkLocation);
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedWorkDescription);
			}
		}
	}
}; // end work object

var education = {
	"schools": [
	{
		"name": "Enspiral Dev Academy",
		"location": "Auckland",
		"degree": "Web Development",
		"majors": ["Web Development"],
		"dates": "In progress"
	},
	{
		"name": "University of Auckland",
		"location": "Auckland",
		"degree": "BSc",
		"majors": ["Biology", "Biomed"],
		"dates": "2010-2012"
	},
	{
		"name": "Media Design School",
		"location": "Auckland",
		"degree": "Dipl",
		"majors": ["Graphic Design"],
		"dates": "2006-2007"
	}],
	"onlineCourses": [
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	},
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	}],
	"display": function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolNameDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			if (education.schools[school].majors.length > 0) {
				for (major in education.schools[school].majors){
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedSchoolMajor);
				}
			}
		}
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedHeading = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedHeading);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}; // end education object

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2016",
		"description": "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.",
		"images": ["images/197x148.gif", "images/197x148.gif"]
	},
	{
		"title": "Sample Project 2", 
		"dates": "2015",
		"description": "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
		"images": ["images/197x148.gif", "images/197x148.gif"]
	}],
	"display": function() {
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[project].images.length > 0) {
                for (pic in projects.projects[project].images){
                    var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[pic]);
                    $(".project-entry:last").append(formattedProjectImages);
                }
            }
        }
    }
}; // end projects object

$(document).click(function (loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});

$("#main").append(internationalizeButton)

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
