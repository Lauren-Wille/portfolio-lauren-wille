

// get the height of the section title to set the width of section__left
const sectionLeft = document.querySelectorAll(".section__left");
const sectionTitle = document.querySelectorAll(
  ".section__left .section__title"
);

//console.log(sectionLeft);
//console.log(sectionTitle);

const height = sectionTitle[0].offsetHeight;
const width = sectionTitle[0].clientWidth;
//console.log(width)

//console.log(height);

sectionLeft.forEach((section) => {
  section.style.width = `${height}px`;
});

// get the length of each title of the section, to set a unique top margin
const aboutSection = document.querySelector("#about");
const aboutTitle = aboutSection.querySelector(".section__title");
const aboutTitleLength = aboutTitle.offsetWidth;
aboutTitle.style.marginTop = `${aboutTitleLength}px`;

const languageSection = document.querySelector("#languages");
const languagesTitle = languageSection.querySelector(".section__title");
const languagesTitleLength = languagesTitle.offsetWidth;
languagesTitle.style.marginTop = `${languagesTitleLength}px`;

const projectSection = document.querySelector("#projects");
const projectTitle = projectSection.querySelector(".section__title");
const projectTitleLength = projectTitle.offsetWidth;
projectTitle.style.marginTop = `${projectTitleLength}px`;