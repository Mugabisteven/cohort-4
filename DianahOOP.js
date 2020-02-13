/**Defining five Objects and five properties
Printing the 5 five properties for each object

var tree={type:"coniferous",local_name:"mutuba",sciname:"fnatalensis",height:"100ft",native:"Uganda"}
console.log(tree.type)
console.log(tree.local_name)
console.log(tree.sciname)
console.log(tree.height)
console.log(tree.native)

var soil={location:"central",xtr:"subsoil",color:"red", texture:"clay", pH:"acidic"}
console.log(soil.location)
console.log(soil.xtr)
console.log(soil.color)
console.log(soil.texture)
console.log(soil.pH)

var shop={type:"boutique",stock:"clothes",location:"Ntinda",status:"active", oprtn:"fulltime"}
console.log(shop.type)
console.log(shop.stock)
console.log(shop.location)
console.log(shop.status)
console.log(shop.oprtn)

var book={category:"diary",year:"2020",pages:"100",covertype:"hard",source:"aristoc"}
console.log(book.category)
console.log(book.year)
console.log(book.pages)
console.log(book.covertype)
console.log(book.source)

var crop={name:"beans", family:"leguminaceae",origin:"Asia",height:"medium", seed:"dicot"}
console.log(crop.name)
console.log(crop.family)
console.log(crop.origin)
console.log(crop.height)
console.log(crop.seed)
**/

/**defiing obects and their properties as well as creating instances of the defined objects
key word new is called a constructor-special method used to initialze instanciated objects**/
function tree()
{
    this.type
    this.local_name
    this.sciname
    this.height
    this.native
}
var Natalfig =new tree()
Natalfig.type="coniferous"
Natalfig.local_name="Mutuba"
Natalfig.sciname="Ficus_natalensis"
Natalfig.height="100ft"
Natalfig.native="Uganda"

console.log(Natalfig)

var Neem=new tree()
Neem.type="decidous"
Neem.local_name="neem"
Neem.sciname="Azadirachta_Indica"
Neem.height="60ft"
Neem.native="S_India"

console.log(Neem)

var Eucalyptus=new tree()
Eucalyptus.type="decidous"
Eucalyptus.local_name="Kalitunsi"
Eucalyptus.sciname="Eucalyptus_globulus"
Eucalyptus.height="300ft"
Eucalyptus.native="Australia"

console.log(Eucalyptus)

Function soil()
{
  this.location
  this.xter
  this.color
  this.texture
  this.pH
}
var Andosol=new soil ()
Andosol.location="sAmerica"
Andosol.xter="fertile"
Andosol.color="black"
Andosol.texture="sandyloam"
Andosol.pH="slightly_alkaline"

console.log(Andosol)

var histosol=new soil()
histosol.location="temperate"
histosol.xter="v.fertile"
histosol.color="black"
histosol.texture="sandyloam"
histosol.pH="alkaline"

console.log(histosol)

var ferralsol=new soil()
ferralsol.location="Africa"
ferralsol.xter="Infertile"
ferralsol.color="red"
ferralsol.texture="clayey"
ferralsol.pH="acidic"

console.log(ferralsol)

var plinthosol=new soil()
plinthosol.location="America"
plinthosol.xter="moderately_fertile"
plinthosol.color="light_black"
plinthosol.texture="sandy_clay"
plinthosol.pH="moderately_acidic"

console.log(plinthosol)

var acrisol=new soil ()
acrisol.location="Asia"
acrisol.xter="fairly fertile"
acrisol.color="light black"
acrisol.texture="coarse"
acrisol.pH="acidic"

Function shop()
{
 this.type
 this.stock
 this.location
 this.status
 this.oprtn
}
var boutique=new shop ()
boutique.type="retail"
boutique.stock="clothes"
boutique.location="downtown"
boutique.status="active"
boutique.oprtn="fulltime"

console.log(boutique)

var hardware=new shop ()
hardware.type="wholesale"
hardware.stock="cement"
hardware.location="Makindye"
hardware.status="active"
hardware.oprtn="fulltime"

console.log(hardware)

var stall=new shop()
stall.type="retail"
stall.stock="matooke"
stall.location="Wakiso"
stall.status="closed"
stall.oprtn="fulltime"

console.log(stall)

var merchidise=new shop()
merchidise.type="wholesale"
merchidise.stock="variety"
merchidise.location="entebbe"
merchidise.status="active"
merchidise.oprtn="fulltime"

console.log(merchidise)

var textile=new shop()
textile.type="wholesale"
textile.stock="Partymaterial"
textile.location="kiyembe"
textile.status="active"
textile.oprtn="fulltime"

console.log(textile)

function book()
 {
  this.category
  this.year
  this,pages
  this.covertype
  this.source
}
var bible=new book()
bible.category="kjv"
bible.year=1990
bible.pages=2000
bible.covertype="hard"
bible.source="bibleH"

Console.log(bible)

Var diary=new book()
diary.category="notebook"
diary.year=2020
diary.pages=360
diary.covertype="light"
diary.source="bookshop"

console.log(diary)

var novel=new book()
novel.category="Pread"
novel.year=1980
novel.pages=550
novel.covertype="hard"
novel.source="aristoc"

var textbook=new book()
textbook.category="science"
textbook.year=1990
textbook.pages=2050
textbook.covertype="hard"
textbook.source="aristock"

console.log(textbook)

var magazine=new book()
magazine.category="fashion"
magazine.year=2020
magazine.pages=75
magazine.covertype="light"
magazine.source="supermarkets"

console.log (magazine)

function crop()
{
    this.name
    this.family
    this.origin
    this.height
    this.seed
}
var cereal=new crop()
cereal.name="maize"
cereal.family="graminea"
cereal.origin="kenya"
cereal.height="3m"
cereal.seed="monocot"

console.log(cereal)

var root=new crop()
root.name="cassava"
root.family="rubicaea"
root.origin="Egyppt"
root.height="5m"
root.seed="none"

console.log(root)

var oil=new crop()
oil.name="gnuts"
oil.family="leguminoceae"
oil.origin="india"
oil.height="1m"
oil.seed="dicot"

console.log(oil)

var bulb=new crop()
bulb.name="onion"
bulb.family="licocea"
bulb.origin="malawi"
bulb.height="0.5m"
bulb.seed="monocot"

console.log(bulb)

var legume=new crop()
legume.name="beans"
legume.family="leguminoceae"
legume.origin="uganda"
legume.height="0.3m"
legume.seed="dicot"
