const fs = require("fs");

const writeToJSON = clicks => {
  // Strigify the content from clicks
  json = JSON.stringify(clicks);
  // Saving the data to resultSet.json file!
  fs.writeFile("result​set.json", json, err =>
    err ? console.log("error", err) : console.log("Success!!")
  );
};
// Exporting function
module.exports = {
    saveFile: writeToJSON
}