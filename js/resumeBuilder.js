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
  "bioPic": "images/fry.jpg",
  "display": function () {}
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
  ],
  "display": function () {}
}; // end work object

var education = {
  "schools": [
    {
      "name": "",
      "location": "",
      "degree": "",
      "majors": ["", ""],
      "dates": ""
    },
    {
      "name": "",
      "location": "",
      "degree": "",
      "majors": ["", ""],
      "dates": ""
    }
  ], // end schools array
    // start object online courses
  "onlineCourses": [
    {
      "title": "",
      "school": "",
      "date": "",
      "url": ""
    },
    {
      "title": "",
      "school": "",
      "date": "",
      "url": ""
    }
  ],
  "display": function () {}
  }; // end education object

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
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedLocation);