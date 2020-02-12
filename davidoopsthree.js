

/** 
function continent ()
{
this.name="Africa"
this.country="Uganda"
this.caPcity="Kampala"
this.population="35M"
this.language="Luganda"
this.oceans="Indian and Atlantic"

}

console.log(continent.name)
console.log(continent.country)

var europe = new continent()
europe.name='europe'
europe.numOfoceans='2'
europe.numOfrivers='6'
europe.biGstCountry='Russia'

console.log (europe.name)
console.log (europe.numOfoceans)
console.log (europe.numOfrivers)
console.log (europe.biGstCountry)


var europe= new continent('europe',2,7,'russia') 

*/

/* A function object is declared by the name of continent. continent has 5 parameters
that feature descriptions of a country in that continent */
function continent(countryName,numberofOceans,bigstRiver,bigstCountry,bigstCountryPopulation)
{
    this.countryName=countryName
    this.numberofOceans=numberofOceans
    this.bigstRiver=bigstRiver
    this.bigstCountry=bigstCountry
    this.bigstCountryPopulation=bigstCountryPopulation
    
}

/* The variable africa is declared. africa is assigned
to the function object continent with 5 parameters specified */
var africa=new continent("Africa","2","Nile","Nigeria","190 million")

/* The 5 specified parameters of variable africa are printed to screen*/

console.log (africa.countryName)
console.log (africa.numberofOceans)
console.log (africa.bigstRiver)
console.log (africa.bigstCountry)
console.log (africa.bigstCountryPopulation)

/** XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/


/* A function object is declared by the name of cars. cars has 5 parameters
that feature descriptions of a particular type of car */
function cars(companyName,modelofCar,sizeofEngine,typeofEngine,sizeofTires)
{
    this.companyName=companyName
    this.modelofCar=modelofCar
    this.sizeofEngine=sizeofEngine
    this.typeofEngine=typeofEngine
    this.sizeofTires=sizeofTires
    
}

/* The variable specificCar is declared. specificCar is assigned
to the function object cars with the 5 specified parameters */
var specificCar=new cars("Mercedes Benz","E420","4200cc","Petrol","215/65/18")

/* The 5 specified parameters of variable specificCar are printed to screen*/

console.log (specificCar.companyName)
console.log (specificCar.modelofCar)
console.log (specificCar.sizeofEngine)
console.log (specificCar.typeofEngine)
console.log (specificCar.sizeofTires)

/** XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

 

/* A function object is declared by the name of tvs (televisons). tvs has 4 parameters
that feature descriptions of a particular type of tv */
function tvs(tvCompanyName,modelofTV,sizeofTV,typeofTV)
{
    this.tvCompanyName=tvCompanyName
    this.modelofTV=modelofTV
    this.sizeofTV=sizeofTV
    this.typeofTV=typeofTV
    
}

/* The variable specificTV is declared. specificTV is assigned
to the function object tvs with the 4 specified parameters */
var specificTV=new tvs("LG","LG55HWR","55in","OLED")

/* The 4 specified parameters of variable specificTV are printed to screen*/

console.log (specificTV.tvCompanyName)
console.log (specificTV.modelofTV)
console.log (specificTV.sizeofTV)
console.log (specificTV.typeofTV)