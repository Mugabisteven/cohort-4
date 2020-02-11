/*Allthrugh, we are assignining differrent classes different kinds of objects with different properties.
We are also posting the results to the browser's console.
*/
/* let animal={pet:"cat", aquatic:"fish", biggest:"elephant", flying:"bat", pouched:"wallaby"}
console.log("this is a "+ animal.pet + ".")
console.log("A " + animal.aquatic + ".")
console.log("The biggest animal in the bush is an " + animal.biggest + ".")
console.log("The only flying mammal is a " + animal.flying + ".")
console.log("A " + animal.pouched + "; the creatcher with a pouch.") 

let light={sky1:"sun", sky2:"moon", sky3:"stars", art:"lump", glow:"worm" }
console.log("The main source of light is the "+ light.sky1 +".")
console.log("The " + light.sky2 + " rules over the night.")
console.log(light.sky3+ " are also in the sky.")
console.log("The " + light.art + "; the artificial source of light, even long ago.")
console.log("surprisingly, the glow " + light.glow + " can also produce some light.")

let window={rich:"glas", poor:"metal",verypoor  :"wood",witch:"cloth",thief:"no"}
console.log("The rich: window of " +window.rich +".")
console.log("The poor: window of " +window.poor +".")
console.log("The very poor: window of " +window.verypoor +".")
console.log("A witch: window of " +window.witch +".")
console.log("A thief: "+window.thief +" window.")

let alphabet={eng:"english", chai:"chinese", hin:"hindu", fre:"french", hev:"heaven",}
console.log("The "+ alphabet.eng + " alphabet.")
console.log( "The "+ alphabet.chai + " alphabet.")
console.log("The "+ alphabet.hin + " alphabet.")
console.log("The "+ alphabet.fre + " alphabet.")
console.log("The "+ alphabet.hev + " alphabet.")

let color={chel:"blue", blk:"black", man:"red", real:"white", es:"maroon",}

console.log("Chelsea likes " +color.chel+ ".")
console.log("Blackban likes " +color.blk+ ".")
console.log("Manunited likes " +color.man+ ".")
console.log("realmadrid likes " +color.real+ ".")
console.log("Esroma likes " +color.es+ ".")  */

// Working with constracters

/* Through out the work bellow, we define different funtions with properties, instaciate different odjects to the defined functions and post results of 
each of them to the console */
function game(){
    this.no_officials
    this.no_players
    this.equipment
}

var football=new game()
football.no_officials=3
football.no_players=22
football.equipment='boots'
console.log(football)

var basketball=new game()
basketball.no_officials=3
basketball.no_players=10
basketball.equipment='sketters'
console.log(basketball)

var volley=new game()
volley.no_officials=2
volley.no_players=6
volley.equipment='armlesses'
console.log(volley)

function pen(){
    this.brand
    this.color
    this.breadth
}
var natarage=new pen()
natarage.band='natarage'
natarage.color='white_strips'
natarage.breadth=3
console.log(natarage)

var bick=new pen()
bick.band='bick'
bick.color='blue'
bick.breadth=4
console.log(bick)

var top_speed=new pen()
top_speed.band='top_speed'
top_speed.color='colorless'
top_speed.breadth=5
console.log(top_speed)

function vertebrate(){
    this.food
    this.example
    this.movement
}

var reptile=new vertebrate()
reptile.food='flesh'
reptile.example='snake'
reptile.movement='scrolling'
console.log(reptile)

var fish=new vertebrate()
fish.food='soil'
fish.example='tilapia'
fish.movement='yawing'
console.log(fish)

var birds=new vertebrate()
birds.food='carcase'
birds.example='ibis'
birds.movement='flying'
console.log(birds)

function weapon(){
    this.type
    this.user
    this.method
}

var sward=new weapon()
sward.type='cutting'
sward.user='asasin'
sward.method='swinging'
console.log(sward)

var bomb= new weapon()
bomb.type='spliting'
bomb.user='soldier'
bomb.method='setting'
console.log(bomb)

var gun= new weapon()
gun.type='penetrating'
gun.user='soldier'
gun.method='shooting'
console.log(gun)

function tree(){
    this.min_height
    this.friut_color
    this.fruit_taste
}
var mango =new tree()
mango.min_height=7
mango.friut_color='yello when ripe'
fruit_taste='sweet'
console.log(mango)

var orange=new tree()
orange.min_height=4
orange.friut_color='green'
orange.fruit_taste='sweet when ripe'
console.log(orange)




var apple =new tree()
apple.min_height=5
apple.friut_color='lightgreen'
apple.fruit_taste='sweet'
console.log(apple)