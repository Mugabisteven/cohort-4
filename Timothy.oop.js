/** An object defined as job which is assigned to different requirements
let job = {
  name: "Accountant",
  type: "finance",
  experience: "2yrs",
  level: "juniorAcc",
  pay: "1200000"
};
/**Printing the output of job
console.log("A company needs an :" + job.name);
console.log("In the finance sector:" + job.type);
console.log("Who have technical experience of:" + job.experience);
console.log("And is relatively a:" + job.level);
console.log("Who's salary is :" + job.pay);

/**Defining an object as melon which is assigned to the melon categories 
let melon = {
  name: "cantaloupes",
  color: "grayishgreen",
  biggestgrowth: "NorthAmerica",
  vitamincontent: "A&C",
  locationgrown: "Canada"
};
/**Printing the output of melon 
console.log("there are many types of melons such as:" + melon.name);
console.log("it is of a color:" + melon.color);
console.log("the cantaloupe is highly grown in:" + melon.biggestgrowth);
console.log("we get vitamin:" + melon.vitamincontent);
console.log("You can as well find it grown in:" + melon.locationgrown);

/**An object defined as chocolate 
let chocolate = {
  brandname: "toblerone",
  countryorigin: "Switzerland",
  yearbegun: "1908",
  shape: "triangular",
  specialingredient: "almonds"
};
/**printing out the chocolate properties 
console.log("Chocolate like:" + chocolate.brandname);
console.log("Is produced in:" + chocolate.countryorigin);
console.log("Toblerone manufacturing began in:" + chocolate.yearbegun);
console.log("It is:" + chocolate.shape);
console.log("Toblerone is also made of:" + chocolate.specialingredient);

/**Defining an object as richestkid which is being assigned to different properties 
let richestkid = {
  kidsname: "Prince George Alexaner Loius",
  networth: "$1billion",
  age: "6yrs",
  knownfact: "Comes from the Royal British family",
  countryoforigin: "United Kingdom"
};
/**printing out the properties of the object richestkid 
console.log("The richest kid in the world is:" + richestkid.kidsname);
console.log("His networth is:" + richestkid.networth);
console.log("Can you imagine he is :" + richestkid.age);
console.log("An amazing fact is that he:" + richestkid.knownfact);
console.log("He originates from:" + richestkid.homecountry);

/**Defining an object as technologies 
let technologies = {
  company: "AppleInc",
  Hq: "Califonia_USA",
  founder: "SteveJobs",
  CEO: "TimCook",
  product: "Iphone"
};
/**printing the properties of technologies 
console.log(
  "One of the big four tech companies in the world is :" + technologies.company
);
console.log("Apple's Hq are in :" + technologies.Hq);
console.log(
  "The mind behind the existance of Apple is :" + technologies.founder
);
console.log("The CEO of Apple is :" + technologies.CEO);
console.log("Apple makes products like :" + technologies.product);
*/

//initiallizing a function job which has instances like name, experience, level,pay and type
function job() {
  this.name
  this.experience
  this.level
  this.pay
  this.type
}
//Declaring accountant as an instance from the object job
var accountant = new job()
accountant.name = "accountant"
accountant.experience = "2years"
accountant.level = "junior"
accountant.pay = "5000000"
accountant.type = "fintech_personnale"

//printing the output of accountant
console.log(accountant.name)

//Declaring country_director as an instance from the object job
var country_director = new job()
country_director.name = "country director"
country_director.experience = "5years"
country_director.level = "senior"
country_director.pay = "15000000"
country_director.type = "NGO"

//printing the output of country_director
console.log(country_director.name)

//Declaring teacher as an instance from the object job
var teacher = new job()
teacher.name = "Teacher"
teacher.experience = "1year"
teacher.level = "junior"
teacher.pay = "700000"
teacher.type = "school"

//printing the output of teacher
console.log(teacher.name)

