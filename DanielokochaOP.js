/**function continent(name,no_oceans,no_rivers,bigsCountry)
{
    this.name=name
    this.no_oceans=no_oceans
    this.no_rivers=no_rivers
    this.bigstCounttry=bigsCountry
}
var europe=new continent('europe','2','7','russia')
console.log(europe)**/




/**  definition of three objects ,creating instances with five
   there properties and printing there properties intances.**/

function soil(type,particle,color,location,use)
{
    this.type=type
    this.particle=particle
    this.color=color
    this.location=location
    this.use=use

}
var clay=new soil('clay','slipery','dark','swampy_Area','pot_modaling')
console.log(clay)
var sand=new soil('sand','rough','bround_in_color','mostly_in_arid_and_desert','building')
console.log(sand)
var loam=new soil('loam','smooth','dark','found_in_fertile_land','for_farming')
console.log(loam)

function park(name,location,animal_variety,variety_of_birds,size)
{
    this.name=name
    this.location=location
    this.animal_variety=animal_variety
    this.variety_of_birds=variety_of_birds
    this.size=size
}
var Murchision=new park('Murchision','nwoya','(lion,leopard,geraff,etc)','ostrick','the_largest_park_in_Uganda.')
console.log(Murchision)

var Kidepo=new park('Kidepo','karamoja','(geraff,leopard,mankey)','eagle','not_big')
console.log(Kidepo)

var Nvura_National_Park=new park('Nvura_National_Park','kenya',
'(lion,Gorilla,baffuloo,leopard,etc','(eagls,ostrick,etc','The_largest_park_in_kenya.')
console.log(Nvura_National_Park)

var Nakuru_national_park=new park('Nakuru_national_park','kenya',
'(baffuloo,Gorilla','geese,eagles','200_sqare_kilometer')
console.log(Nakuru_national_park)

function radioStation(name,location,frequency,programmeList,presentor)
{
    this.name=name
    this.location=location
    this.frequency=frequency
    this.programmeList=programmeList
    this.presentor=presentor
}
var MegaFM=new radioStation('MegaFM','Gulu','102.1_hz',
'(wake_up_with_Jesus,Dwon_angica,the_morning_show,etc)','Cathy_and_juma_for_dwong_angica')
console.log(MegaFM)

var RadioPacis=new radioStation('RadioPacis','Nebi',
'(morning_breeze,public_talk,reguest_hour,etc)','104.1','Christopher_for_public_talk')
console.log(RadioPacis)
var capitalFM=new radioStation('capitalFM','kamuja','91.3','(request_hour,eight_to_eight,etc)','Oshasize')
console.log(capitalFM)

