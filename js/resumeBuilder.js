/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = 'Tunçer Damat',
    role = 'Web Developer';

var formattedName = HTMLheaderName.replace('%data%', name),
    formattedRole = HTMLheaderRole.replace('%data%', role);

var bio = {
    name: name,
    role: role,
    contactInfo: 'tuncer.damat@gmail.com',
    pictureURL: 'https://media.licdn.com/dms/image/C4D03AQFotJdMkxtD-A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=iR-dhEIGFoniL4Ov1Vqw9JHXMGdYmY-SuhMg2G4OiAM'
};

var work = {
    "jobs": [
        {
            "startDate": "Feb 2014",
            "employer": "Vizyon Komünikasyon Teknolojileri",
            "title": "Junior Web Developer",
            "dates": "Feb 2014 - December 2015",
            "description": "Support team"
        },
        {
            "startDate": "Jun 2016",
            "employer": "Facile.it",
            "title": "Web Developer",
            "dates": "Jun 2016 - May 2018",
            "description": "Development"
        },
        {
            "startDate": "Jun 2018",
            "employer": "Wellnet S.r.l",
            "title": "Web Developer",
            "dates": "Jun 2018 - Jun 2019",
            "description": "Development"
        },
        {
            "startDate": "Jul 2019",
            "employer": "Lenis S.r.l",
            "title": "Web Developer",
            "dates": "Jul 2019 - Current",
            "description": "Development"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2020",
            "description": "lorem ipsum",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCs4gOdKWhzHyqoq2M5ysh57yLXpc77fKwAdTz8CJnPXBV-nI7A&s",
                "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
            ]
        }
    ]
};

work.currentJob = 'Web Developer';
work.employer = 'Lenis S.r.l';
work.yearsWorked = 5;
work.cityOfBusiness = 'Milan';

var education = {
    "schools": [
        {
            "name": "Istanbul Kültür University",
            "location": "Istanbul, Turkey",
            "degree": "Bachelors",
            "majors": ["CS"],
            "dates": 2009,
            "url": "https://www.iku.edu.tr/",
        },
        {
            "name": "Jönköping University",
            "location": "Jönköping, Sweden",
            "degree": "Bachelors",
            "majors": ["CS"],
            "dates": 2011,
            "url": "https://ju.se/",
        },
    ]
};


$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#main').append(bio.name);
$('#main').append(bio.role);
$('#main').append(bio.contactInfo);
$('#main').append(bio.pictureURL);
$('#main').append(work.currentJob);
$('#main').append(education['nameOfTheLastSchoolAttended']);

function displayWork() {
    work.jobs.forEach(function (jobObject) {
        $('#workExperience').append(HTMLworkStart);

        $('.work-entry:last').append(
            HTMLworkEmployer.replace('%data%', jobObject.employer)
            + HTMLworkTitle.replace('%data%', jobObject.title));
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', jobObject.dates));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', jobObject.description));
    });
}

displayWork();
