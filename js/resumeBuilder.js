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