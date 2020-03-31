const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = on => {
  on("file:preprocessor", cucumber());

  on("task", {
    log(message) {
      console.log(message);
      return null;
    }
  });
};
