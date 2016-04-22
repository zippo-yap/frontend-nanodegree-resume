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
  "skills": [
    "Javascript", "HTML", "CSS"],
  "bioPic": "images/fry.jpg"
  //"display": function () {}
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
      "location": "Auckland",
      "dates": "June 2012 – June 2014",
      "description": "Key member of the Student Services team contributing to the delivery of excellent customer service. Front desk position with responsibilities in assisting with student enrolments and administration, campus operations and events and marketing. Involved in the re-design, implementation and launch of NZ Website."
    }
  ]
}; // end work object

var education = {
  "schools": [
    {
      "name": "Enspiral Dev Academy",
      "location": "Auckland",
      "degree": "",
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
    }
  ], // end schools array
    // start object online courses
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
    }
  ]
}; // end education object

var projects = {
  "projects":[ 
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
    }
  ]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedMessage);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
};

//(work[key][0]) <-- Each job, now we need to loop through

for (var job in work.jobs){
  if (work.jobs.hasOwnProperty(job)) {
      $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedWorkEmployerTitle);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDescription);
  }
}

