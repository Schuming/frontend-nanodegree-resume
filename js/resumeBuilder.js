 var bio = {
     "name": "Schuming Zhang",
     "role": "Software Developer",
     "contacts": {
         "mobile": "+(86)186xxxx1227",
         "email": "schuming89@gmail.com",
         "github": "https://github.com/Schuming",
         "location": "Shanghai"
     },
     "welcomeMessage": "Hi,welcome to my page!",
     "skills": [
         "C++",
         "Python",
         "HTML",
         "CSS",
         "Linux",
         "Qt"
     ],
     "bioPic": "images/schuming.jpg",
 };

 var education = {
     "schools": [{
         "name": "Shanghai University",
         "location": "Shanghai，CN",
         "degree": "Bachelor",
         "dates": "2008-2012",
         "majors": "Communication & Information Engineering"
     }],
     "onlineCourses": [{
         "title": "Deep Learning Nanodegree",
         "school": "Udacity",
         "dates": "Ongoing",
         "url": "https://classroom.udacity.com/nanodegrees/nd101/syllabus"
     }]
 };

 var work = {
     "jobs": [{
             "employer": "Hoshare",
             "title": "Co-Founder",
             "dates": "2015-current",
             "description": "Used a suite of framework tools, along with appropriate new solutions to creatively build a comprehensive verification automation framework. Responsible for creating a reliable, scalable test toolset approach for assigned product coverage, as well as contributing to the improvement of the release framework. Involved with training employees how to install, launch, and modify tests within the framework. Created test cases and used combination of black and white box testing to assure the release of high quality products.",
             "location": "Shanghai，CN"
         },
         {
             "employer": "Onbon",
             "title": "Embedded Software Engineer",
             "dates": "2012-2015",
             "description": "HWas responsible for the quality assurance of 8 different websites. Created and maintained test cases which were later automated using a combination of Selenium and Browserstack which cut regression time down from 24+ hours down to 10. Trained and led a small team of QA Engineers whom I delegated tasks between. Was involved with mostly blackbox testing, and occasionaly whitebox testing. I was also included and gave input during sprint planning and pull requests.",
             "location": "Shanghai，CN"
         }
     ],
 };


 var projects = {
     "project": [{
             "title": "News Website",
             "dates": "11/2016",
             "description": "Responsive, mobile first news website",
             "images": ["images/news.jpg", "images/news2.jpg"],
             "url": "https://schuming.github.io/news/"
         },
         {
             "title": "Portfolio",
             "dates": "12/2016",
             "description": "Responsive, mobile first portfolio website created with Bootstrap, CSS and jQuery, one of my projects from FEND, Udacity",
             "images": ["images/portfolio.jpg"],
             "url": "https://github.com/Schuming/Udacity/tree/master/Front-end/Portfolio/Portfolio%20of%20Schuming"
         }
     ]
 };

 bio.display = function() {
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
     var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
     var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
     $("#header").prepend(formattedName, formattedRole);
     $("#header").append(formattedImage, formattedMsg);
     $("#topContacts, #footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedlocation);
     if (bio.skills.length > 0) {
         $("#header").append(HTMLskillsStart);
         var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
         $("#skills").append(formattedSkill);
     }
 };
 bio.display();
 work.display = function() {
     work.jobs.forEach(function(job) {
         $("#workExperience").append(HTMLworkStart);
         var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
         var formattedDates = HTMLworkDates.replace("%data%", job.dates);
         var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
         $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
     });
 };
 work.display();
 projects.display = function() {
     projects.project.forEach(function(project) {
         $("#projects").append(HTMLprojectStart);
         var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
         var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
         var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
         $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

         if (project.images.length > 0) {
             project.images.forEach(function(image) {
                 var formattedimages = HTMLprojectImage.replace("%data%", image);
                 $(".project-entry:last").append(formattedimages);
             });
         }
     });
 };

 projects.display();
 education.display = function() {
     education.schools.forEach(function(school) {
         $("#education").append(HTMLschoolStart);
         var formattedschoolname = HTMLschoolName.replace("%data%", school.name);
         var formatteddegree = HTMLschoolDegree.replace("%data%", school.degree);
         var formattedschooldate = HTMLschoolDates.replace("%data%", school.dates);
         var formattedmajor = HTMLschoolMajor.replace("%data%", school.majors);
         $(".education-entry:last").append(formattedschoolname + formatteddegree, formattedschooldate, formattedmajor);
     });


     $("#education").append(HTMLonlineClasses);
     education.onlineCourses.forEach(function(course) {
         $("#education").append(HTMLschoolStart);
         var formattedcourse = HTMLonlineTitle.replace("%data%", course.title);
         var formattedschool = HTMLonlineSchool.replace("%data%", course.school);
         var formatteddate = HTMLonlineDates.replace("%data%", course.dates);
         var formattedurl = HTMLonlineURL.replace("%data%", course.url);
         $(".education-entry:last").append(formattedcourse + formattedschool, formatteddate);
     });
 };
 education.display();



 $("#mapDiv").append(googleMap);