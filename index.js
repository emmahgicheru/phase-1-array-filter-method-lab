// Func 1: findMatching

function findMatching(drivers, name) {

  // Drivers whose name matches the given name (case insensitive)

  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Func 2: fuzzyMatch

function fuzzyMatch(drivers, letters) {

  // Using filter method to find drivers whose name starts with the provided letters

  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Func 3: matchName

function matchName(drivers, name) {

  // Using filter to find drivers whose name matches the given name property in driver object

  return drivers.filter(driver => driver.name === name);
}

const drivers = [
  "Llewellyn", "Leon", "Leilani", "Alex"
];

// sample

const driverObjects = [
  { name: "Llewellyn", homecounty: "Kiambu" },
  { name: "Leilani", homecounty: "Nairobi" },
  { name: "Leon", homecounty: "Nakuru" },
];

// Logging the functions
console.log(findMatching(drivers, "Llewellyn"));
console.log(fuzzyMatch(drivers, "Leilani"));
console.log(matchName(driverObjects, "Leon"));