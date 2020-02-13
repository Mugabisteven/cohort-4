/*
//object oriented programming in js
//Defining object Rover with attributes
let Rover = {
    name:"Opportunity",
    contractor:"Boeing",
    distanceCovered:"45.16km",
    spaceCraft:"rover",
    operator:"NASA"
}
//Printing the object properties
console.log(Rover.name)
console.log(Rover.contractor)
console.log(Rover.distanceCovered)
console.log(Rover.spaceCraft)
console.log(Rover.operator)

//Defining object Insects
let Insect = {
    name:"bee",
    typeOfEye:"compound eyes",
    numberOfLegs:"3 pairs",
    numberOfBodyParts:3,
    numberOfAntenna:2
}
//Printing the object properties
console.log(Insect.name)
console.log(Insect.typeOfEye)
console.log(Insect.numberOfLegs)
console.log(Insect.numberOfBodyParts)
console.log(Insect.numberOfAntenna)

//Defining object Footballer
let Footballer = {
    name:"lionel messi",
    age:32,
    height:"170cm",
    weight:"72kg",
    rating:"94"
}
//Printing the object properties
console.log(Footballer.name)
console.log(Footballer.age)
console.log(Footballer.height)
console.log(Footballer.weight)
console.log(Footballer.rating)

//Defining object CricketPlayer
let CricketPlayer = {
    name:"Kevin Peitersen",
    age:39,
    role:"Batsman",
    batting:"right handed",
    bowling:"right arm off break"
}
//Printing the object properties
console.log(CricketPlayer.name)
console.log(CricketPlayer.age)
console.log(CricketPlayer.role)
console.log(CricketPlayer.batting)
console.log(CricketPlayer.bowling)

//Defining the object Concrete
let Concrete = {
    type:"C30",
    aggregateRatio:1,
    cementRatio:1,
    strength:"30KN per sqmm",
    steal:True
}
//Printing the object properties
console.log(Concrete.type)
console.log(Conctete.aggregateRatio)
console.log(Concrete.cementRatio)
console.log(Concrete.strength)
console.log(Concrete.steal)  
*/

/*Defining objects and creating three instances of 
the objects*/
/*
function rover(){
    this.name
    this.contractor
    this.distanceCovered
    this.spaceCraft
    this.operator
}

var opportunity = new rover()
opportunity.name= 'opportunity'
opportunity.contractor= 'boeing'
opportunity.distanceCovered='45.16km'
opportunity.spaceCraft= 'rover'
opportunity.operator= 'NASA'


var spirit = new rover()
spirit.name= 'spirit'
spirit.contractor= 'boeing'
spirit.distanceCovered='7.73km'
spirit.spaceCraft= 'rover'
spirit.operator= 'NASA'

var curiosity = new rover()
curiosity.name= 'curiosity'
curiosity.contractor= 'boeing'
curiosity.distanceCovered='22.21km'
curiosity.spaceCraft= 'rover'
curiosity.operator= 'NASA'


function Footballer(){
    this.name
    this.age
    this.height
    this.weight
    this.rating
}

var messi= new Footballer()
messi.name= 'lionel messi'
messi.age= 'age'
messi.height= '170cm'
messi.weight= '72kg'
messi.rating= 94

var ronaldo=new Footballer()
ronaldo.name= 'cristino ronaldo'
ronaldo.age= 35
ronaldo.height = '187cm'
ronaldo.weight= '83kg'
ronaldo.rating= 93

var neymar= new Footballer()
neymar.name= 'neymar jr'
neymar.age= 28
neymar.height= '175cm'
neymar.weight= '68kg'
neymar.rating= 92



function Insect(){
    this.order
    this.typeOfEye
    this.numberOfBodyParts
    this.numberOfLegs
    this.numberOfAntenna
}

var bee= new Insect()
bee.order= 'hymenoptera'
bee.typeOfEye= 'compound'
bee.numberOfBodyParts= 3
bee.numberOfLegs= '3pairs'
bee.numberOfAntenna= 2

var grasshopper= new Insect()
grasshopper.order= 'orthoptera'
grasshopper.typeOfEye= 'compound'
grasshopper.numberOfBodyParts= 3
grasshopper.numberOfLegs= '3pairs'
grasshopper.numberOfAntenna= 2

var termite= new Insect()
termite.order= 'blattodea'
termite.typeOfEye= 'simple'
termite.numberOfBodyParts= 2
termite.numberOfLegs= '3pairs'
termite.numberOfAntenna= '2'


function CricketPlayer(){
    this.full_name
    this.age
    this.role
    this.batting
    this.bowling
}
var kevin= new CricketPlayer()
kevin.full_name= 'kevin peitersen'
kevin.age= 39
kevin.role= 'batsman'
kevin.batting= 'right handed'
kevin.bowling= 'right arm off break'

var kohli= new CricketPlayer()
kohli.full_name= 'virat kohli'
kohli.age= 31
kohli.role= 'top order batsman'
kohli.batting= 'right handed'
kohli.bowling= 'right arm meduim'

var sachin= new CricketPlayer()
sachin.full_name= 'sachin ramesh tendulkar'
sachin.age= '46'
sachin.role= 'batsman'
sachin.batting= 'right handed'
sachin.bowling= 'right arm medium, leg break, off break'

function concrete(){
    this.type
    this.aggregadeRatio
    this.cementRatio
    this.strength
    this.steel
}

var class_20 =new concrete()
class_20.type ='c20'
class_20.aggregadeRatio= 4
class_20.cementRatio= 1
class_20.strength= '20KN per sqmm'
class_20.steel= true

var class_30 =new concrete()
class_30.type ='c30'
class_30.aggregadeRatio= 1
class_30.cementRatio= 1
class_30.strength= '30KN per sqmm'
class_30.steel= true

var class_15 =new concrete()
class_15.type ='c15'
class_15.aggregadeRatio= 6
class_15.cementRatio= 3
class_15.strength= '15KN per sqmm'
class_15.steel= false
*/

/*Definig 5 objects with 3 instances*/

function rover(name,contractor,distanceCovered,spaceCraft,operator){
    this.name= name
    this.contractor= contractor
    this.distanceCovered= distanceCovered
    this.spaceCraft= spaceCraft
    this.operator=operator
}
var opportunity = new rover('opportunity','boeing','45.16km','rover','NASA')
var spirit= new rover('spirit','boeing','7.73km','rover','NASA')
var curiosity = new rover('curiosity','boeing','22.21km','rover','NASA')


function Footballer(name,age,height,weight,rating){
    this.name= name
    this.age= age
    this.height= height
    this.weight= weight
    this.rating=rating
}
var messi= new Footballer('lionel messi','32','170cm','72kg','94')
var ronaldo= new Footballer('cristino ronaldo','35','187cm','83kg','93')
var neymar= new Footballer('neymar jr','28','175cm','68kg','92')

function Insect(order,typeOfEye,numberOfBodyParts,numberOfLegs,numberOfAntenna){
    this.order= order
    this.typeOfEye= typeOfEye
    this.numberOfBodyParts= numberOfBodyParts
    this.numberOfLegs= numberOfLegs
    this.numberOfAntenna= numberOfAntenna
}
var bee= new Insect('hymenoptera','compound','3','3pairs','2')
var grasshopper= new Insect('orthoptera','compound','3','3pairs','2')
var termite= new Insect('blattodea','simple','2','3pairs','2')

function CricketPlayer(full_name,age,role,batting,bowling){
    this.full_name= full_name
    this.age= age 
    this.role= role
    this.batting= batting
    this.bowling= bowling
}
var kevin= new CricketPlayer('kevin peitersen','39','batsman','right handed','right arm off break')
var kohli= new CricketPlayer('virat kohli','39','top order batsman','right handed','right arm medium')
var sachin=new CricketPlayer(
    'sachin ramesh tendular',
    '46',
    'batsman',
    'right handed',
    'right arm meduim, leg break,off break'
)

function concrete(type,aggregadeRatio,cementRatio,strength,steel){
    this.type= type
    this.aggregadeRatio= aggregadeRatio
    this.cementRatio= cementRatio
    this.strength= strength
    this.steel= steel
}

var class_20 =new concrete('c20','4','1','20KN per sqmm','true')
var class_30= new concrete('c30','1','1','30KN per sqmm','true')
var class_15= new concrete('c15','6','3','15KN per sqmm','false')

console.log(class_20)


