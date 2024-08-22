module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.addFilter("sortByNumber", (array) => {
    const sortedArray = array.sort((a, b) => {
      return parseInt(a.data.navOrder) - parseInt(b.data.navOrder);
    });

    return sortedArray;
  });

  eleventyConfig.addFilter("getStars", function (numberOfStars) {
    let starsString = ``;
    const total = 5;
    const nonFilledStars = total - numberOfStars;

    /* get filled stars */
    for (let i = 0; i < numberOfStars; i++) {
      starsString += `<img class="star" src="/assets/images/filledStar.png" alt="Filled star">`;
    }

    for (let i = 0; i < nonFilledStars; i++) {
      starsString += `<img class="star" src="/assets/images/nonFilledStar.png" alt="Unfilled star">`;
    }

    return starsString;
  });
 
  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
