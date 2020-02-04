const getSubsetOfClickData = clicks => {
  // Object type to hold occurence of each IP
  occurenceOfIps = {};

  clicks.forEach(click => {
    occurenceOfIps[click["ip"]] = occurenceOfIps[click["ip"]] + 1 || 1;
  });

  // Empty array to hold valid clicks(excluding IPs that have more than 10 occurrence)
  validClicks = [];
  clicks.forEach(click => {
    if (occurenceOfIps[click["ip"]] <= 10) {
      validClicks.push(click);
    }
  });

  // Empty array to hold unique clicks from valid clicks based on the amount and occurence for each period from clicks
  arrayByPeriods = [];

  validClicks.forEach(click => {
    d = new Date(click.timestamp);
    timePeriod = d.getHours();
    day = d.getDate();
    month = d.getMonth() + 1;
    year = d.getFullYear();
    // Creating unique Key for each unique IP + period combination
    key = day + "_" + month + "_" + year + "_" + timePeriod + "_" + click.ip;

    if (!arrayByPeriods[key]) {
      arrayByPeriods[key] = click;
    } else {
      if (click.amount > arrayByPeriods[key].amount) {
        arrayByPeriods[key] = click;
      } else if (click.amount === arrayByPeriods[key].amount) {
        if (arrayByPeriods[key].timestamp > click.timestamp) {
          arrayByPeriods[key] = click;
        }
      }
    }
  });

  // Final array to store final data
  finalArray = [];
  // Extract Final data from the arrayByPeriods to store as a subset of clicks
  Object.keys(arrayByPeriods).map(arrayByPeriod =>
    finalArray.push(arrayByPeriods[arrayByPeriod])
  );
  return finalArray;
};
// Exporting function
module.exports = {
  getSubsetOfClicks: getSubsetOfClickData
};
