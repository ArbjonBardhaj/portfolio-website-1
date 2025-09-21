// Navigation Bar SECTION
export const navBar = {
  show: true,
};

// Main Body SECTION
export const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arbion",
  middleName: "",
  lastName: "Bardhaj",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ArbjonBardhaj",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arbion-bardhaj/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

export const about = {
  show: true,
  heading: "About Me",
  imageLink: "",
  imageSize: 375,
  message: "I'm a developer passionate about building amazing applications.",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
export const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ArbjonBardhaj",
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
export const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 95 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Team Work", value: 85 },
  ],
};

// Leadership SECTION
export const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: { width: "615", height: "450" },
};

// GET IN TOUCH SECTION
export const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "I'm currently looking for new opportunities!",
  email: "bardhajarbion@gmail.com",
};

export const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Developer",
      company: "Company Name",
      date: "2024 - Present",
      desc: "Description of your role.",
    },
  ],
};
