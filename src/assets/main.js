document.addEventListener("DOMContentLoaded", function () {
  const sectionLeft = document.querySelectorAll(".section__left");
  const sectionTitle = document.querySelectorAll(
    ".section__left .section__title"
  );

  console.log(sectionLeft);
  console.log(sectionTitle);

  const height = sectionTitle[0].offsetHeight;
  const width = sectionTitle[0].clientWidth;
  console.log(width)

  console.log(height);

  sectionLeft.forEach((section) => {
    section.style.width = `${height}px`;
  });
});
